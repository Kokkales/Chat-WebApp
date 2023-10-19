const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  app.get('/getUserFriends', [authJwt.verifyToken], controller.userFriends);

  app.get('/getUserData', [authJwt.verifyToken], controller.userData);

  app.post('/addFriend', [authJwt.verifyToken], controller.addFriend);
};

// app.get(
//   '/api/test/user',
//   [authJwt.verifyToken, authJwt.isUser],
//   controller.userBoard
// );

// app.get(
//   '/api/test/admin',
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.adminBoard
// );
// app.get('/api/test/all', [authJwt.verifyToken], controller.allAccess);

// app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);
