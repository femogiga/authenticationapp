const express = require('express');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

const router = express.Router();

router.post('/', async function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Referrer-Policy', 'no referrer-when-downgrade');
  const redirectUrl = 'http://localhost:9000/oauth';
  const oauth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );
  const authorizedUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
    prompt: 'consent',
  });
   res.json({ url: authorizedUrl });
});

module.exports = router;
