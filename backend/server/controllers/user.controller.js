const db = require('../models');
// const config = require('../config/auth.config');
const User = db.user;
const Message = db.message;
const Session = db.session;
const Friends = db.friends;
const Role = db.role;
exports.userData = (req, res) => {
  User.findOne({
    where: {
      id: req.query.id,
    },
  }).then((user) => {
    if (!user) {
      return res
        .status(404)
        .send({ message: "Couldn't load data.Permission denied!." });
    }
    user.getRoles().then((roles) => {
      const roleNames = roles.map((role) => role.name);
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        role: roleNames,
      });
    });
  });
};

exports.userFriends = (req, res) => {
  User.findByPk(req.query.id, {
    attributes: ['id', 'username'],
    include: [
      {
        model: User,
        as: 'UserOneFriends',
        through: 'friends',
        attributes: ['id', 'username'],
      },
      {
        model: User,
        as: 'UserTwoFriends',
        through: 'friends',
        attributes: ['id', 'username'],
      },
    ],
  })
    .then((user) => {
      if (user) {
        const userOneFriends = user.UserOneFriends; // Friends where the user is UserOne
        // const userTwoFriends = user.UserTwoFriends; // Friends where the user is UserTwo
        res.json({ userOneFriends });

        // res.json({ userOneFriends, userTwoFriends });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Failed to retrieve user and their friends' });
    });
  // res.status(200).send('Those are user friends');
};

exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.', req.body);
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

// exports.moderatorBoard = (req, res) => {
//   res.status(200).send('Moderator Content.');
// };

exports.addFriend = (req, res) => {
  //TODO cjeck if the friend exists
  //TODO check if they are already friends
  const userId1 = req.query.id; // User 1's ID
  const userId2 = req.body.friendId; // User 2's ID
  console.log('NEW FRIENDS', userId1, ' & ', userId2);

  // Create a friendship between user1 and user2
  User.findByPk(userId1, { include: 'UserOneFriends' })
    .then((user1) => {
      user1.addUserOneFriend(userId2).then(() => {
        console.log('Friendship created successfully.');
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  User.findByPk(userId2, { include: 'UserOneFriends' })
    .then((user2) => {
      user2.addUserOneFriend(userId1).then(() => {
        console.log('Friendship created successfully.');
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  console.log('Friendship created successfully.');
  res.status(200).send('Adding a friend.');
};
