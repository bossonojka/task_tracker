const Router = require('@koa/router');
const authentication = require('../middlewares/authentication');

const router = new Router();

router.post('/', async (ctx) => {
  await authentication(ctx);
});

module.exports = router;
