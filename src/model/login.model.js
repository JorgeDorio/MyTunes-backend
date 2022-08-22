const connection = require('./connection');

const loginModel = async (username) => {
  const queryString = 'SELECT password FROM `mytunes`.users WHERE username = ?';
  const [result] = await connection.query(queryString, [username]);
  return result;
};

module.exports = loginModel;
