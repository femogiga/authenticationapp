const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoute = require('./db/routes/userRoute');
const authMiddleware = require('./db/authentication/authMiddleware');
const authRoute = require('./db/authentication/authRoute');
const request = require('./db/google/request');
const oauth = require('./db/google/oauth');

dotenv.config({});

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use('/users', authMiddleware, userRoute);
app.use('/', authRoute);
app.use('/oauth', oauth);
app.use('/request', request);
app.get('/', (req, res) => {
  res.send('Hello tp my app');
});

app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Headers', ['X-Requested-With', 'content-type', 'credentials']);
  res.header('Access-Control-Allow-Methods', 'GET,POST');
})

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('listening on port===> ' + port);
});
