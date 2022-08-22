const { OK } = require('../HTTP_STATUS')
const register = require('../model/register.model')

const registerService = async (data) => {
  const { username, email, password } = data;
  const result = await register(username, password, email);
  return { status: OK, data: result };
};

module.exports = registerService;
