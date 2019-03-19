const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/5d9a29a0cefd95eeea092ce73eab2844/${longitude},${latitude}?exclude=flags,alerts,minutely,hourly`;

    request({ url, json: true }, (error, { body }) => {

    if (error) {
        callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
        callback(body.error, undefined);
    } else {
        callback(undefined, body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
    }
    });
}

module.exports = forecast;