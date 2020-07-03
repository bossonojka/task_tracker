const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (ctx, next) => {
  if (!ctx.headers.authorization) ctx.throw(401, 'Authentication Error');

  const token = ctx.headers.authorization.split(' ')[1];

  try {
    ctx.request.jwtPayload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    ctx.throw(err.status || 403, err.text);
  }

  return next();
};
