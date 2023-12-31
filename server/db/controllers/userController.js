const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const prisma = new PrismaClient();

const getUser = async (req, res) => {
  try {
    // const token = req.header('Authorization');
    // const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await prisma.user.findUnique({
      where: {
        // id: decoded.id,
        id: req.user.id,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getByEmail = async (req, res) => {
  const email = req.params.email;
  console.log('email=>',email);
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  res.status(200).json({ user });
};

module.exports = { getUser, getByEmail };
