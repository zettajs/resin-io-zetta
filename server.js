var zetta = require('zetta');
var Hue = require('zetta-hue-driver');

zetta()
  .name(process.env.RESIN_DEVICE_UUID)
  .link(process.env.ZETTA_CLOUD.split(','))
  .use(Hue)
  .listen(process.env.PORT || 0)
