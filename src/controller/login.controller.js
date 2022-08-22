const login = require('../service/login.service')

const loginController = async (req, res) => {
  const data = req.body;
  const { status } = await login(data);
  return res.status(status).end();
};

module.exports = loginController;
