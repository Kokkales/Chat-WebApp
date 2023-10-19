const db = require('../models');
// const config = require('../config/auth.config');
const Sequelize = require('sequelize');

const User = db.user;
const Message = db.message;
const Session = db.session;
const Friends = db.friends;
const Role = db.role;

exports.userMessages = (req, res) => {
  console.log('ok');
  res.status(200).send({ message: 'Those are my messages' });
};

exports.sendMessage = (req, res) => {
  const currentDate = new Date();
  // console.log('MESSAGE INFO:::', req.body);
  const newMessage = {
    messageContent: req.body.messageContent,
    status: 'sent',
    timestamp: currentDate.getFullYear(),
    senderId: req.body.senderId, // Sender's ID
    receiverId: req.body.receiverId, // Receiver's ID
  };
  Message.create(newMessage)
    .then((result) => {
      // console.log('New message created succesfully!', result);
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal Server error!' });
    });
};

exports.getConversation = (req, res) => {
  const senderId = req.body.id;
  const receiverId = req.body.friendId;
  // console.log('SenderId::::', senderId);
  // console.log('ReceiverId::::', receiverId);
  Message.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          senderId: senderId,
          receiverId: receiverId,
        },
        {
          senderId: receiverId,
          receiverId: senderId,
        },
      ],
      // senderId: senderId,
      // receiverId: receiverId,
    },
    // include: [
    //   {
    //     model: User,
    //     as: 'Sender',
    //   },
    //   {
    //     model: User,
    //     as: 'Receiver',
    //   },
    // ],
  })
    .then((messages) => {
      // console.log('Messages: ', messages);
      res.json(messages);
    })
    .catch((error) => {
      // console.log('Error:', error);
      res.status(500).send({ message: 'Internal Server error' });
    });
};

exports.getLastMessage = (req, res) => {
  const senderId = 1; // Replace with the desired senderId

  Message.findAll({
    attributes: ['messageContent', 'timestamp', 'receiverId', 'senderId'],
    where: {
      [Sequelize.Op.or]: [{ senderId: senderId }, { receiverId: senderId }],
    },
    order: [
      [
        Sequelize.literal(
          'LEAST("senderId", "receiverId"), GREATEST("senderId", "receiverId")'
        ),
      ],
      ['createdAt', 'DESC'],
    ],
  })
    .then((messages) => {
      // Filter and format the results to match the SQL query structure
      const formattedMessages = [];

      const uniqueSenderReceiverKeys = new Set();

      messages.forEach((message) => {
        const senderReceiverKey = `${Math.min(
          message.senderId,
          message.receiverId
        )}-${Math.max(message.senderId, message.receiverId)}`;
        if (!uniqueSenderReceiverKeys.has(senderReceiverKey)) {
          uniqueSenderReceiverKeys.add(senderReceiverKey);
          formattedMessages.push({
            messageContent: message.messageContent,
            timestamp: message.timestamp,
            receiverId: message.receiverId,
            senderId: message.senderId,
          });
        }
      });
      res.send(formattedMessages);

      console.log('Messages:', formattedMessages);
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle any errors that occur during the query
    });
};
