const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoute = require('./db/routes/userRoute');
const authMiddleware = require('./db/authentication/authMiddleware');
const authRoute = require('./db/authentication/authRoute');

dotenv.config({});

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use('/users', authMiddleware, userRoute);
app.use('/', authRoute);
app.get('/', (req, res) => {
  res.send('Hello tp my app');
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('listening on port===> ' + port);
});
