// Import main libs
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();

const PORT = 3000;

// JWT Secret
process.env.JWT_SECRET = 'server_secret';

const router = require('./routes');

// Global errors handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.type = 'json';
    ctx.status = err.status || 500;
    ctx.body = { status: 'error', message: err.message };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(cors({
  origin: '*',
  exposeHeaders: 'X-Total-Count',
}));

// Parse body of HTTP requests
app.use(bodyParser());

// Routes middleware
app.use(router.routes());

// Server errors handler
app.on('error', (err, ctx) => {
  ctx.body = { message: err.message };
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
