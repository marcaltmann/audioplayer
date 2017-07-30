require('seneca')()
  .use('logger')
  .listen({port: 9003});
