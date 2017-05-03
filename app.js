const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=12%20woodlawn%20rd%20somerset',
  json: true
}, (error, response, body) => {
  console.log(body)
});
