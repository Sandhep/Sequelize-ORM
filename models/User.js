export default (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, // Ensures no empty strings are allowed
          len: [2, 50], // Optional: Limits string length (2 to 50 characters)
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true, // Ensures a value is provided
          isInt: true, // Ensures the value is an integer
          min: 0, // Optional: Ensures age cannot be negative
        },
      },
    });
  
    return User;
  };
  