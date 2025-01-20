// app.js
import express from "express";
import bodyParser from "body-parser";
import db from "./models/index.js";

const app = express();
app.use(bodyParser.json());

// Sync database
(async () => {
  try {
    await db.sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (err) {
    console.error("Error syncing database:", err);
  }
})();

// Create a new employee (POST)
app.post("/employees", async (req, res) => {
  try {
    const { name, position, salary } = req.body;
    const newEmployee = await db.Employee.create({ name, position, salary });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all employees (GET)
app.get("/employees", async (req, res) => {
  try {
    const employees = await db.Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific employee by ID (GET)
app.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await db.Employee.findByPk(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an employee by ID (DELETE)
app.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.Employee.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: "Employee deleted successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
