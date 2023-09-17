const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const prisma = new PrismaClient();

const register = async (req, res) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, bio, photo, phone } = req.body;

    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      return res.status(400).json({ error: 'user already exists.' });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const person = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        bio: bio || '',
        photo: photo || '',
        phone: phone || '',
      },
    });
    return res
      .status(201)
      .json({ person, message: 'person successfully created' });
  } catch (errors) {
    console.error(errors);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1hr',
    });
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'internal server error' });
  }
};

module.exports = { register, login };
