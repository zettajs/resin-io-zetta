# Zetta Deployed to Resin.io

Example project for deploying [Zetta](http://zettajs.org) using [Resin.io](http://resin.io)

The best part about this project is that it looks almost identical to any other Zetta repo because Resin.io uses standard dev tools for deploying.


## Getting it Up and Running

Head over to [Resin.io](http://resin.io) and setup and account and follow the instructions for creating a new application on either a Beaglebone Black or Raspberry Pi and get your image installed on the device.

Once you've created the project add a remote Zetta cloud env variable to the project using the Resin UI. Eg. `ZETTA_CLOUD` = `http://hello-zetta.herokuapp.com`

Clone this repo and run `git remote add resin <repo>` with your project's Resin git repo. Then run the `git push resin master` and watch it deploy.

Once everything is online you can check the api response for `http://hello-zetta.herokuapp.com` and find your devices Resin ID in the API response. Or use the [Zetta Browser](browser.zettajs.io) to navigate the API.

## License

MIT
