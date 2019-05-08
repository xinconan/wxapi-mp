const API = require('./src/index');

API.mixin(require('./src/api_auth'))

module.exports = API;
