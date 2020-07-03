const db = require('../lib/db');

class TasksService {
  static addTask(title, description, status, userId) {
    return db('tasks').insert({
      title, description, status, user_id: userId,
    });
  }

  static updateTaskById(id, title, description, status, assigneeId) {
    return db('tasks').update({
      title, description, status, assignee_id: assigneeId,
    }).where({ id });
  }

  static deleteTaskById(id) {
    return db('tasks').where({ id }).delete();
  }

  static getTaskById(id) {
    return db('tasks').where({ id });
  }

  static getTasksByStatus(status, query) {
    return query.where({ status });
  }

  static getTasks() {
    return db('tasks').select();
  }

  static getTasksByNewOldUsers() {
    return db('users').select('tasks.id', 'tasks.title', 'tasks.description', 'tasks.status', 'tasks.user_id', 'tasks.assignee_id').innerJoin('tasks', 'users.id', 'tasks.user_id').orderBy('users.reg_date_time');
  }
}

module.exports = TasksService;
