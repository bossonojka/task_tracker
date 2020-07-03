const bcrypt = require('bcrypt');
const db = require('../lib/db');

const saltRounds = 10;

class RegistrationService {
  static async registrate(body) {
    const { password } = body;

    const hash = bcrypt.hashSync(password, saltRounds);

    return db('users').insert({ ...body, password: hash });
  }
}

module.exports = RegistrationService;
