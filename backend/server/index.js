const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server Started working');
});

app.listen(port, () => {
  console.log(`Server started , listening to port: ${port}`);
});
