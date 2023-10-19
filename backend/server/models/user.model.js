module.exports = (sequelize, Sequelize) => {
  const User = sequelize
    .define('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
      },
      // firstName: {
      //   type: Sequelize.STRING,
      // },
      // lastName: {
      //   type: Sequelize.STRING,
      // },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    })
    .beforeCreate(async (user, options) => {
      const existingSession = await User.findOne({
        where: { active: true },
      });
    });

  return User;
};
