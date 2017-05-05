const yargs = require('yargs');
const geocode = require('./geocode/geocode')

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

// geocode.geocodeAddress(argv.address, callback = (error, result) => {
//   if (error){
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(result, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: 'https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/39.9396284,-75.18663959999999',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
});
