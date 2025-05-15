const OAuth = require('oauth').OAuth;

const consumerKey = 'TWÓJ_CONSUMER_KEY';
const consumerSecret = 'TWÓJ_CONSUMER_SECRET';
const requestTokenUrl = 'https://provider.com/oauth/request_token';
const accessTokenUrl = 'https://provider.com/oauth/access_token';
const authorizeUrl = 'https://provider.com/oauth/authorize';

const oauth = new OAuth(
  requestTokenUrl,
  accessTokenUrl,
  consumerKey,
  consumerSecret,
  '1.0',
  'http://localhost:4200/callback', // frontend redirect
  'HMAC-SHA1'
);

module.exports = oauth;
