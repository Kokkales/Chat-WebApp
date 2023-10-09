module.exports = (sequelize, Sequelize) => {
  const Session = sequelize.define('sessions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sessionNumber: {
      type: Sequelize.INTEGER,
    },
  });

  return Session;
};
