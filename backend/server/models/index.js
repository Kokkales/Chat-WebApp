// const config = require('../config/db.config.js');
const config = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);
db.message = require('../models/message.model')(sequelize, Sequelize);
db.session = require('../models/session.model')(sequelize, Sequelize);

//USER and MESSAGES
db.user.hasMany(db.message, { foreignKey: 'senderId', as: 'SentMessages' });
db.user.hasMany(db.message, {
  foreignKey: 'receiverId',
  as: 'ReceivedMessages',
});
db.message.belongsTo(db.user, { foreignKey: 'senderId', as: 'Sender' });
db.message.belongsTo(db.user, { foreignKey: 'receiverId', as: 'Receiver' });

//USER and FRIENDS
db.user.belongsToMany(db.user, {
  through: 'friends',
  as: 'UserOneFriends',
  foreignKey: 'userIdOne',
});

db.user.belongsToMany(db.user, {
  through: 'friends',
  as: 'UserTwoFriends',
  foreignKey: 'userIdTwo',
});

//USER and ROLES
db.user.belongsToMany(db.role, {
  through: 'userRoles',
  foreignKey: 'userId',
  as: 'Roles', // Use 'Roles' as the alias to access user's roles
});

db.role.belongsToMany(db.user, {
  through: 'userRoles',
  foreignKey: 'roleId',
  as: 'Users', // Use 'Users' as the alias to access users with a role
});

//USER and SESSIONS
db.user.hasOne(db.session, { foreignKey: 'userId', as: 'UserSession' });
db.session.belongsTo(db.user, { foreignKey: 'userId' });

db.ROLES = ['user', 'admin'];

module.exports = db;
