const bcrypt = require('bcrypt');
const db = require('../lib/db');

class AuthService {
  static async login(email, password) {
    const user = (await db('users').select().where({ email }))[0];

    if (!user) {
      return null;
    }

    if (await bcrypt.compare(password, user.password)) {
      return user;
    }

    return null;
  }
}

module.exports = AuthService;
