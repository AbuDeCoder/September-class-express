'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      validate: {
          isInt: {
            args: true,
            msg: "Id must be an integer"
          },
          notNull: {
            args: true,
            msg: "Id is required"
          }
      }
    },
    studentNumber:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: {
        args: true,
        msg: "studentNumber must be unique"
      },
      validate: {
          notEmpty: {
            args: true,
            msg: "Empty string is not a valid studentNumber"
          },
          notNull: {
            args: true,
            msg: "StudentNumber is required"
          },
          len: {
            args: [10, 50],
            msg: "Student Number can can take a minimum of 10 and a maximum of 50 characters"
          }
      }
    },
     
    registrationNumber:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: {
        args: true,
        msg: "registrationNumber must be unique"
      },
      validate: {
          notEmpty: {
            args: true,
            msg: "Empty string is not a valid registrationNumber"
          },
          notNull: {
            args: true,
            msg: "registrationNumber is required"
          },
          len: {
            args: [10, 50],
            msg: "Registration number can take a minimum of 10 and a maximum of 50 characters"
          }
      }
    },
    gender: {
      type: DataTypes.ENUM('FEMALE', 'MALE'),
      defaultValue: 'MALE',
      allowNull: false,
      validate: {
        isIn: {
          args: [['FEMALE', 'MALE']],
          msg: "Invalid gender"
        }
      }
    },
    dateOfBirth:{
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: {
          args: true,
          msg: 'Invalid dateOfBirth'
        }
      }
    }, 
    firstName:{
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
          notEmpty: {
            args: true,
            msg: "Empty string is not a valid first names"
          },
          notNull: {
            args: true,
            msg: "firstName is required"
          },
          len: {
            args: [1, 50],
            msg: "firstName can take a minimum of 1 and a maximum of 50 characters"
          }
      }
    },
    lastName:{
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
          notEmpty: {
            args: true,
            msg: "Empty string is not a valid last names"
          },
          notNull: {
            args: true,
            msg: "lastName is required"
          },
          len: {
            args: [1, 50],
            msg: "lastName can take a minimum of 1 and a maximum of 50 characters"
          }
      }
    },
    otherNames: {
      type:DataTypes.STRING(80)
    },
    imagePath:{
      type:DataTypes.STRING(300),
      allowNull: true,
      unique: {
        args: true,
        msg: 'images should be unique'
      }
    },
    email: {
      type:DataTypes.STRING(255),
      allowNull: true,
      unique: {
        args: true,
        msg: 'email should be unique'
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email"
        }
      }
    },
    telephone: {
      type:DataTypes.STRING(20),
      allowNull: true,
      unique: {
        args: true,
        msg: 'telephone should be unique'
      }
    },
  }, {
    sequelize,
    modelName: 'Student',
    timestamps: true,
    underscored: false,
    freezeTableName: true
  });
  return Student;
};