module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('messages', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    messageContent: Sequelize.STRING,
    status: Sequelize.STRING,
    timestamp: Sequelize.DATE,
    senderId: Sequelize.INTEGER, // Sender's ID
    receiverId: Sequelize.INTEGER, // Receiver's ID
  });

  return Message;
};
