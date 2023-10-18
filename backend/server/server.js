const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
var corsOptions = {
  origin: 'http://localhost:8081',
};
const db = require('./models');
const Role = db.role;
// console.log(db);
// { force: true }
db.sequelize.sync().then(() => {
  console.log('Drop and Resync Db');
  // initial();
});

function initial() {
  Role.create({
    id: 1,
    name: 'user',
  });

  // Role.create({
  //   id: 2,
  //   name: 'moderator',
  // });

  Role.create({
    id: 2,
    name: 'admin',
  });
}

//cors activate

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Chat web application!' });
});
const PORT = 3001;
app.listen(PORT, () => {
  // console.log(`Server started , listening to port: ${port}`);
});

// OLD CODE

// // Create connection
// //DATABASECONNECTION
// const { Client } = require('pg');
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ChatDB',
//   password: 'aspida2002@#',
//   port: 5432,
// });

// client.connect((err) => {
//   if (err) {
//     console.error('Error connecting to PostgreSQL database', err.stack);
//   } else {
//     console.log('Connected to PostgreSQL database');
//   }
// });

// process.on('SIGINT', () => {
//   client.end(() => {
//     console.log('Disconnected from PostgreSQL database');
//     process.exit();
//   });
// });

// app.get('/', (req, res) => {
//   // res.send('Server Started working');
//   client.query('SELECT * FROM USERS;', (err, results) => {
//     if (err) {
//       console.error('Error executing query', err.stack);
//       //TODO check what returns in case of error
//       res.json('Something is wrong with the database');
//     } else {
//       console.log('Query results are :', results.rows);
//       res.json(results.rows);
//     }
//   });
// });

// app.get('/getFriendsShortChats', (req, res) => {
//   // res.send('Server Started working');
//   client.query(
//     'SELECT DISTINCT ON (u.id)  u2.firstName as sender,u2.id as senderId,u.firstName as reciever,u.id as recieverId ,u2.active as sender_activity,u.active as reciever_activity,u.active as recieverStatus,u2.active as senderStatus,m.id,m.content,m.status from MESSAGES m JOIN USERS U on m.receiverID = U.id JOIN USERS U2 on m.senderID=u2.id where m.senderID=1 or m.receiverID=1 order by recieverId,m.id desc;',
//     (err, results) => {
//       if (err) {
//         console.error('Error executing query', err.stack);
//         //TODO check what returns in case of error
//         res.json('Something is wrong with the database');
//       } else {
//         console.log('Query results are :', results.rows);
//         res.send(results.rows);
//       }
//     }
//   );
// });
