const request = require('request');
const yargs = require('yargs');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to check weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  const encodedAddress = encodeURIComponent(argv.address);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(`Address: ${body.results[0].formatted_address}`, undefined, 2));
  console.log(JSON.stringify(`Latitide: ${body.results[0].geometry.location.lat}`, undefined, 2));
  console.log(JSON.stringify(`Longitude: ${body.results[0].geometry.location.lng}`, undefined, 2));
});
