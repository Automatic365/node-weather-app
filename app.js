const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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

geocode.geocodeAddress(argv.address, callback = (error, result) => {
  if (error){
    console.log(error);
  } else {
    console.log(JSON.stringify(result, undefined, 2));
  }
});

weather.getWeather(39.6751269, -104.9680914, callback = (error, weatherResult) =>{
  if (error){
    console.log(error)
  } else {
    console.log(weatherResult)
  }
})
