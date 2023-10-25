const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Session = db.session;

// TODO change every API with params
verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  const idParam = req.query.idParam;
  console.log('This is the id Param');
  console.log('MY ID ISSSS::::::', req.body.id);

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    if (req.body.id != decoded.id) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    console.log('DECODED:::: ', decoded.id);
    User.findOne({
      where: {
        id: decoded.id,
      },
      include: {
        model: Session,
        as: 'UserSession', // Use the alias defined in your association
      },
    }).then((user) => {
      const userSession = user.UserSession;
      // console.log('USEEER::::::', user);
      // console.log('USER SESSION::::::', userSession);
      if (!userSession) {
        return res.status(401).send({
          message: 'There is no session for this user. Unauthorized call.',
        });
      }
      const savedToken = userSession.token;
      if (savedToken != token) {
        return res.status(401).send({
          message: 'Unauthorized!',
        });
      } else {
        next();
      }
    });
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
          next();
          return;
        }
      }

      res.status(403).send({
        message: 'Require Admin Role!',
      });
      return;
    });
  });
};

isUser = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'user') {
          next();
          return;
        }
      }

      res.status(403).send({
        message: 'Require User Role!',
      });
    });
  });
};

isUserOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'user') {
          next();
          return;
        }

        if (roles[i].name === 'admin') {
          next();
          return;
        }
      }

      res.status(403).send({
        message: 'Require User or Admin Role!',
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isUser: isUser,
  isUserOrAdmin: isUserOrAdmin,
};
module.exports = authJwt;
