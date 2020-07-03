const Router = require('@koa/router');
const RegistrationService = require('../services/Registration');

const router = new Router();

router.post('/', async (ctx) => {
  const result = await RegistrationService.registrate(ctx.request.body);
  ctx.body = { id: result[0] };
});

module.exports = router;
