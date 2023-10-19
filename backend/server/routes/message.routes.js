const { authJwt } = require('../middleware');
const controller = require('../controllers/message.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  app.get('/getMyMessages', controller.userMessages);
  app.post('/sendMessage', controller.sendMessage);
};
