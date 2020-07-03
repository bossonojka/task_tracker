const Router = require('@koa/router');
const UsersService = require('../services/Users');

const router = new Router();

router.get('/', async (ctx) => {
  const { page = 1, limit = 10 } = ctx.query;

  const count = await UsersService.getUsersLength();

  ctx.set('X-Total-Count', count);
  ctx.body = await UsersService.getUsersWithPagination(page, limit);
});

router.get('/:id(\\d+)', async (ctx) => {
  const { id } = ctx.params;

  ctx.body = await UsersService.getUserById(id);
});

router.delete('/:id(\\d+)', async (ctx) => {
  const { id } = ctx.params;
  const result = await UsersService.deleteUserById(id);

  ctx.assert(result, 404, `User with id ${id} wasn't deleted`);
  ctx.body = `User with id ${id} was deleted`;
});

router.patch('/:id(\\d+)', async (ctx) => {
  const {
    first_name: firstName, last_name: lastName, email, password,
  } = ctx.request.body;
  const { id } = ctx.params;

  const result = await UsersService.updateUserById(id, firstName, lastName, email, password);

  ctx.assert(result, 404, `User with id ${id} wasn't updated`);
  ctx.body = `User with id ${id} was updated`;
});

module.exports = router;
