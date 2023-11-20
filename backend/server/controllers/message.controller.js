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

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3002 });
server.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      const { from, to, content } = parsedMessage;
      const currentDate = new Date();
      // console.log('MESSAGE INFO:::', req.body);
      const newMessage = {
        messageContent: content,
        status: 'sent',
        timestamp: currentDate.getFullYear(),
        senderId: from, // Sender's ID
        receiverId: to, // Receiver's ID
      };
      Message.create(newMessage)
        .then((result) => {
          // console.log('New message created succesfully!', result);
          console.log('successful');
        })
        .catch((error) => {
          console.log('internal error on ws');
        });
      console.log(`Received Message from ${from} to ${to}: ${content}`);
    } catch (error) {
      console.log('Invalid message format');
    }
  });
});

exports.getConversation = (req, res) => {
  const senderId = req.query.id;
  const receiverId = req.query.friendId;
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
      for (let i = 0; i < messages.length; i++) {
        if (req.query.id == messages[i].senderId) {
          messages[i].dataValues.type = 'receiver';
        } else {
          messages[i].dataValues.type = 'sender';
        }
      }
      console.log('Messages: ', messages);
      res.json(messages);
    })
    .catch((error) => {
      // console.log('Error:', error);
      res.status(500).send({ message: 'Internal Server error' });
    });
};

exports.getLastMessage = (req, res) => {
  const senderId = req.query.id; // Replace with the desired senderId

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
    .then(async (messages) => {
      // Fetch the usernames of the sender and receiver
      const userIds = new Set([
        ...messages.map((message) => message.senderId),
        ...messages.map((message) => message.receiverId),
      ]);
      const users = await User.findAll({
        attributes: ['id', 'username'],
        where: {
          id: [...userIds],
        },
      });

      const userMap = new Map();
      users.forEach((user) => {
        if (user.id != req.query.id) {
          userMap.set(user.id, user.username);
        }
      });

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
            // timestamp: message.timestamp,
            receiverId: message.receiverId,
            senderId: message.senderId,
            receiverUserName: userMap.get(message.receiverId),
            senderUserName: userMap.get(message.senderId),
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
