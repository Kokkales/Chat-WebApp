const { json } = require('sequelize');
const db = require('../models');
const ROLES = db.ROLES;
const User = db.user; //take the user entity
if (!User) {
  console.error('Entity is not existing');
} else {
  console.error('Entity exists');
}

checkDuplicateUsernameOrEmail = (req, res, next) => {
  console.log('This is the username: ' + req.body.username);
  // const username = req.body.username;
  // const email = req.body.email;
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Username is already in use!',
      });
      return;
    }

    console.log('this is the email: ' + req.body.email);
    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: 'Failed! Email is already in use!',
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: 'Failed! Role does not exist = ' + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
