const db = require('../lib/db');

class UsersService {
  static getUsersWithPagination(page, limit) {
    return db('users').limit(limit).offset(limit * (page - 1));
  }

  static async getUsersLength() {
    const result = await db('users').select().count('id as count');

    return result[0].count;
  }

  static getUserById(id) {
    return db('users').where({ id });
  }

  static deleteUserById(id) {
    return db('users').where({ id }).delete();
  }

  static updateUserById(id, firstName, lastName, email, password) {
    return db('users').update({
      firstName, lastName, email, password,
    }).where({ id });
  }
}

module.exports = UsersService;
