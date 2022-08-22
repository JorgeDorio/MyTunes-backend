const connection = require('./connection');

const registerModel = async (
  username,
  password,
  email
) => {
  const queryString =
    'INSERT INTO mytunes.users (username, password, email) VALUES (?, ?, ?)';
  const [result] = await connection.query(queryString, [
    username,
    password,
    email,
  ]);
  return result;
};

module.exports = registerModel;
