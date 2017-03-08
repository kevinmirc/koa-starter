const printResponseTime = async (ctx, next) => {
  const start = new Date();

  try {
    await next();
  } catch (e) {
    throw e;
  }

  const ms = new Date() - start;
  console.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
};

module.exports = printResponseTime;
