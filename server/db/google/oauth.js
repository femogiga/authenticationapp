const express = require('express');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

const router = express.Router();

async function getUserData(access_token) {


  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  const data = await response.json();
  console.log('data====>', data);
  // res.status(200).json({data:data})
    return data
}

router.get('/', async function (req, res, next) {
  const code = req.query.code;
  console.log('code', code);
  try {
    const redirectUrl = 'http://localhost:9000/oauth';
    const oauth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );
    const tokenResponse = await oauth2Client.getToken(code);
    await oauth2Client.setCredentials(tokenResponse.tokens);
    console.log('Tokens acquired');
    const user = oauth2Client.credentials;
    console.log('crediatials===>', user);

    const userData = await getUserData(user.access_token);
      res.status(200).json({data:userData})
  } catch (err) {
    console.log('signnig in error',err);
  }
});

module.exports = router;
