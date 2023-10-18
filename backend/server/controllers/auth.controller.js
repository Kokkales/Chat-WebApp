const db = require('../models');
const config = require('../config/auth.config');
const User = db.user;
const Role = db.role;
const Session = db.session;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

// SIGN UP
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      console.log('User registered with roles: ', req.body.roles);
      if (req.body.roles) {
        console.log('ok');
        Role.findAll({
          where: {
            name: {
              [Op.in]: req.body.roles,
            },
          },
        }).then((roles) => {
          console.log('Those are my roles: ' + roles);
          user.setRoles(roles).then(() => {
            res.send({ message: 'User was registered successfully!' });
          });
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: err.message });
    });
};

// SIGN IN
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }
      console.log('USER FOUND');

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      });

      // Create a new session
      Session.create({
        token: token,
      }).then((newSession) => {
        console.log('USER ID: ', user.id);
        newSession.userId = user.id;
        newSession.save().then(() => {
          console.log('This is the new Session!::::: ', newSession);
        });
      });

      // Get roles
      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push('ROLE_' + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// LOGOUT
exports.logout = (req, res) => {
  // TODO delete the whole session tuple from the user that is logged in
  Session.destroy({
    where: { userId: req.body.id },
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        return res
          .status(404)
          .json({ message: 'No session found for the user' });
      } else {
        return res.status(204).json({
          message: 'Succesfully logged out!',
        }); // Respond with a 204 status (No Content) for a successful deletion
      }
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ message: 'Failed to delete session' });
    });
};
