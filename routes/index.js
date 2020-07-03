const Router = require('@koa/router');
const authenticated = require('../middlewares/authenticated');

const router = new Router();

const registration = require('./registration');
const auth = require('./auth');
const users = require('./users');
const tasks = require('./tasks');

router.prefix('/api');

router.use('/registration', registration.routes());
router.use('/auth', auth.routes());

router.use('/users', authenticated, users.routes());
router.use('/tasks', authenticated, tasks.routes());

module.exports = router;
