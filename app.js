const Koa = require('koa');
const db = require('./db');
const Router = require('koa-rest-router');
const bodyParser = require('koa-bodyparser');
const handleError = require('koa-handle-error');

const app = new Koa();
const router = Router();

const leagueRouter = require('./controllers/LeagueController')(router);
const printResponseTime = require('./services/printResponseTime');

app.use(printResponseTime);
app.use(bodyParser());

// handle thown errors
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = e.message;
  }
});

app.use(leagueRouter.middleware());

app.listen(3000);
