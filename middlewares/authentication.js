const jwt = require('jsonwebtoken');
const AuthService = require('../services/Auth');

const { JWT_SECRET } = process.env;

module.exports = async (ctx) => {
  const { email = '', password = '' } = ctx.request.body;

  const user = await AuthService.login(email, password);

  if (!user) {
    ctx.throw(400, 'Invalid credentials');
  }

  const {
    id, first_name: firstName, last_name: lastName, email: userEmail,
  } = user;

  ctx.body = {
    id,
    firstName,
    lastName,
    email,
    token: jwt.sign({
      id, firstName, lastName, email: userEmail,
    }, JWT_SECRET),
  };
};
