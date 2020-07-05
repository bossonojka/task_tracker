const Router = require('@koa/router');
const TasksService = require('../services/Tasks');

const router = new Router();

router.get('/', async (ctx) => {
  const { status } = ctx.query;

  const query = TasksService.getTasksByNewOldUsers();

  if (status) {
    await TasksService.getTasksByStatus(status, query);
  }

  ctx.body = await query;
});

router.get('/:id(\\d+)', async (ctx) => {
  const { id } = ctx.params;

  ctx.body = await TasksService.getTaskById(id);
});

router.post('/', async (ctx) => {
  const { title, description, status } = ctx.request.body;
  const { id: userId } = ctx.request.jwtPayload;

  const result = await TasksService.addTask(title, description, status, userId);

  ctx.body = { id: result[0] };
});

router.patch('/:id(\\d+)', async (ctx) => {
  const {
    title, description, status, assignee_id: assigneeId,
  } = ctx.request.body;
  const { id } = ctx.params;

  const { id: userId } = ctx.request.jwtPayload;

  const [task] = await TasksService.getTaskById(id);

  const { user_id: taskCreatorId } = task;

  if (userId !== taskCreatorId) {
    ctx.throw(400, 'You do not have permissions to change this task');
  }

  if (assigneeId === userId) {
    ctx.throw(400, 'You can`t assign your task to yourself');
  }

  const result = await TasksService.updateTaskById(id, title, description, status, assigneeId);

  ctx.assert(result, 404, `Task with id ${id} wasn't updated`);
  ctx.body = `Task with id ${id} was updated`;
});

router.delete('/:id(\\d+)', async (ctx) => {
  const { id } = ctx.params;

  const { id: userId } = ctx.request.jwtPayload;

  const [task] = await TasksService.getTaskById(id);

  const { user_id: taskCreatorId } = task;

  if (userId !== taskCreatorId) {
    ctx.throw(400, 'You do not have permissions to delete this task');
  }

  const result = await TasksService.deleteTaskById(id);

  ctx.assert(result, 404, `Task with id ${id} wasn't deleted`);
  ctx.body = `Task with id ${id} was deleted`;
});

module.exports = router;
