const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=00f95f59977a2d3d25a35709ece8f542&query=37.8267,-122.4233&units=m';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to internet');
  } else if (response.body.error) {
    console.log('Unable to find the location');
  } else {
    console.log(
      'The temperature is currently ' +
        response.body.current.temperature +
        ' degree Celcius' +
        ' and it feels like ' +
        response.body.current.feelslike +
        ' degree Celcius'
    );
  }
});
const urls =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlkaGk3IiwiYSI6ImNrZm13ajU3NjIyanIyeW52czN1cXhuZjIifQ.2BNh1DaxjeeZzz9Zsu9WdA&limit=1';
request({ url: urls, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to internet');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find the location');
  } else {
    console.log(
      'Coordinates of Los Angeles are : Longitute = ' +
        response.body.features[0].center[0] +
        ' latitude : ' +
        response.body.features[0].center[1]
    );
  }
});
