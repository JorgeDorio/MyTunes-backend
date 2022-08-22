const login = require('../model/login.model')

const loginService = async (data) => {
  const { username, password } = data;
  const [result] = await login(username);
  try {
    if (password === result.password) {
      return { status: 200 };
    }
    return { status: 400 };
  } catch (_error) {
    return { status: 400 };
  }
};

module.exports = loginService;
