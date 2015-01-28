var zetta = require('zetta');

zetta()
  .link(process.env.ZETTA_CLOUD.split(','))
  .listen(process.env.PORT || 0)
