const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./db/routes/userRoute')
dotenv.config({});

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use('/users',userRoute)
app.get('/', (req, res) => {
  res.send('Hello tp my app');
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('listening on port===> ' + port);
});
