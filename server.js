var zetta = require('zetta');

console.log(process.env)

zetta()
  .link(process.env.ZETTA_CLOUD.split(','))
  .listen(process.env.PORT || 0)
