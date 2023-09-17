const jwt = require('jsonwebtoken');
const { Prisma, PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'No token ,authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const id = decoded.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(401).json({ error: 'invalid token' });
    }
    req.user = user;
    next();
  } catch (errors) {
    console.error(errors);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = authMiddleware;
