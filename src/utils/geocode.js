const request = require('request');

function geocode(address, callback){
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2luZ2tvb3BhMjNqciIsImEiOiJja2l0MG40YWUwNGIzMnVwaDZxbTZhcWx4In0.Iw7zzr3pXOoJ7oTjvSuDmA&limit=1'
 
  request({url: url, json: true}, (error, response) => {
     if(error){
       callback("Unable to connect to location services", undefined);
     }
     else if(response.body.features === undefined || response.body.features.length === 0){
       callback("Unable to find location. Try another search.", undefined)
     }
     else{
       callback(undefined, {
         latitude: response.body.features[0].center[1],
         longitude: response.body.features[0].center[0],
         location: response.body.features[0].place_name
       });
     }
  })
 }
 module.exports = geocode;