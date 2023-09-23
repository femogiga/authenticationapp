require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const prisma = require('../prismaClient');

const googleClient = new OAuth2Client({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const authenticatedUser = async (req, res) => {
  const { credential } = req.body;
  console.log('token', credential);
  const ticket = await googleClient.verifyIdToken({
    idToken: credential,
    audience: process.env.CLIENT_ID,
  });

  const payload = ticket.getPayload();
  let user = await prisma.user.findUnique({
    where: {
      email: payload?.email,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: payload?.email,
        photo: payload?.picture,
        name: payload?.name,
        bio: '',
        password: "",
        phone:""
      },
    });
  }

  res.status(200).json({ user, credential });
};

module.exports = { authenticatedUser };
