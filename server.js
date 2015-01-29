var zetta = require('zetta');

zetta()
  .name(process.env.RESIN_DEVICE_UUID)
  .link(process.env.ZETTA_CLOUD.split(','))
  .listen(process.env.PORT || 0)
