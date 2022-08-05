module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    RA: DataTypes.INTEGER,
    CPF: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Students',
  });
  return Student;
};