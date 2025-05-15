const OAuth = require('oauth').OAuth;

const consumerKey = 'TWÓJ_CONSUMER_KEY';
const consumerSecret = 'TWÓJ_CONSUMER_SECRET';

const accessToken = 'UZYSKANY_ACCESS_TOKEN';
const accessTokenSecret = 'UZYSKANY_ACCESS_TOKEN_SECRET';

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  consumerKey,
  consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

const url = 'https://api.twitter.com/1.1/account/verify_credentials.json';

oauth.get(url, accessToken, accessTokenSecret, (error, data, res) => {
  if (error) {
    console.error('Błąd podczas pobierania danych użytkownika:', error);
  } else {
    const user = JSON.parse(data);
    console.log('Dane użytkownika Twittera:', user);
  }
});
