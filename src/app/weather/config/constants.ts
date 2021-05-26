export const DEGREE = { celisius: 'c', fahrenheit: 'f'};
export const STATUS = { clear: 'clear', cloudy: 'cloudy'};
export const WAETHER_API_URL = `https://api.darksky.net/forecast/{{API_KEY}}/{{Latitude}},{{Longitude}}`;
export const CITY_API_URL = `http://api.positionstack.com/v1/reverse?access_key={{API_KEY}}&query={{Latitude}},{{Longitude}}`;
