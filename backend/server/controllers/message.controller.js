const db = require('../models');
// const config = require('../config/auth.config');
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
  res.status(200).send({ message: 'Message sent sucesfully!' });
};
