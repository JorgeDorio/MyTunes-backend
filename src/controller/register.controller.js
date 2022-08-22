const register = require('../service/register.service')

const registerController = async (req, res) => {
  const data = req.body;
  await register(data);
  return res.status(200).end();
};

module.exports = registerController;
