const usernameValidation = (username) => {
  if (username === undefined || username.length === 0) {
    return false;
  } else {
    return true;
  }
};

const passwordValidation = (password) => {
  if (password === undefined || password.length === 0) {
    return false;
  } else {
    return true;
  }
};

const loginValidation = (req, res, next) => {
  const { username, password } = req.body;
  if (!usernameValidation(username) || !passwordValidation(password)) {
    return res.status(400).json({ message: 'deu certo' });
  } else {
    next();
  }
};

module.exports = loginValidation;
