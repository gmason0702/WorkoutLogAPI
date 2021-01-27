module.exports = (sequelize, DataTypes) => {
  const WorkoutLog = sequelize.define("workoutlog", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  });
  return WorkoutLog;
};
