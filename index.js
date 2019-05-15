const API = require('./src/index');

API.mixin(require('./src/api_auth'))
API.mixin(require('./src/api_code'))

module.exports = API;
