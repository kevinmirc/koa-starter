const League = require('../db').League;

module.exports = function (router) {
  return router.resource('leagues', {
    // GET /leagues
    index: async (ctx, next) => {
      ctx.body = await League.find();
      await next();
    },

    // GET /leagues/new
    // new: (ctx, next) => {},

    // POST /leagues
    create: async (ctx, next) => {
      try {
        ctx.body = await League.create(ctx.request.body);
      } catch (e) {
        handleError(e);
      }

      await next();
    },

    // GET /leagues/:league
    show: async (ctx, next) => {
      ctx.body = await League.findById(ctx.params.league);
      await next();
    },

    // GET /leagues/:league/edit
    edit: (ctx, next) => {},

    // PUT /leagues/:league
    update: (ctx, next) => {},

    // DELETE /leagues/:league
    remove: (ctx, next) => {}
  });

  function handleError(e) {
    e.message = e.toString();
    e.status = 400;
    throw e;
  }
}
