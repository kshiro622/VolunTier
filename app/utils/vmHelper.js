const WSSE = require('wsse');
const axios = require('axios');
const user = 'do-good-app';
const key = require('./vmApiKey.js');

let vmHelper = {
  searchOpportunities: function (options) {
    let token = WSSE({
      username: user,
      password: key
    });

    let tokenKey = token.toString({
      nonceBase64: true
    });

    const url = 'http://www.volunteermatch.org/api/call';

    let authenticationHeaders = {
      "Authorization": "WSSE profile=\"" + token.getUsername() + "\"",
      'X-WSSE': tokenKey
    };

    const request = {
      method: 'GET',
      headers: authenticationHeaders,
      params: {
        key: key,
        action: 'searchOpportunities',
        query: JSON.stringify(options)
      }
    };

    return axios(url, request);
  }
}