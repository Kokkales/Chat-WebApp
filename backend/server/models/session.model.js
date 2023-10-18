module.exports = (sequelize, Sequelize) => {
  const Session = sequelize
    .define('sessions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sessionNumber: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
    })
    .beforeCreate(async (session, options) => {
      let uniqueToken = false;
      while (!uniqueToken) {
        const randomToken = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit number
        console.log('ËEEEEEEEEEEEEE::::: ', randomToken);
        const existingSession = await Session.findOne({
          where: { sessionNumber: randomToken.toString() },
        });
        if (!existingSession) {
          console.log('EXISTS');
          session.sessionNumber = randomToken.toString();
          uniqueToken = true;
        }
      }
    });

  return Session;
};
