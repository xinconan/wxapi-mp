const axios = require('axios');

const instance = axios.create({
  timeout: 10000
});

instance.interceptors.response.use(function (resp) {
  // return data if status is 200, otherwise return reject
  if (resp.status === 200) {
    return resp.data;
  } else {
    return Promise.reject(resp)
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

exports.http = instance;
