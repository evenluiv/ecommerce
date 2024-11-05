const express = require('express');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
