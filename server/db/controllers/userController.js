const prisma = require('../prismaClient');

const getUserById = async (req, res) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getUserById };
