// models/Employee.js
export default (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return Employee;
  };
  