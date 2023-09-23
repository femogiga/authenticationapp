const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoute = require('./db/routes/userRoute');
const authMiddleware = require('./db/authentication/authMiddleware');
const authRoute = require('./db/authentication/authRoute');
const googleRoute = require('./db/google/request');
const oauth = require('./db/google/oauth');
const passport = require('passport');
const session = require('express-session');
require('./db/google/oauth');
dotenv.config({});
const prisma = require('./db/prismaClient');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use('/users', authMiddleware, userRoute);
app.use('/googleusers', userRoute);
app.use('/api/google-login',googleRoute)
app.use('/', authRoute);
// app.use(
//   session({
//     secret: 'mySecret',
//     cookie: { secure: false },
//     saveUninitialized: true,
//     resave: false,
//   })
//);



const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('listening on port===> ' + port);
});
