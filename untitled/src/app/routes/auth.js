const express = require('express');
const router = express.Router();
const oauth = require('../oauth.service');

// [GET] /api/oauth/request-token
router.get('/request-token', (req, res) => {
  oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret, results) => {
    if (error) return res.status(500).json({ error });

    req.session = { oauthTokenSecret };

    res.json({
      oauthToken,
      authorizeUrl: `https://provider.com/oauth/authorize?oauth_token=${oauthToken}`
    });
  });
});

router.post('/access-token', (req, res) => {
  const { oauth_token, oauth_verifier } = req.body;
  const oauthTokenSecret = req.session?.oauthTokenSecret;

  oauth.getOAuthAccessToken(
    oauth_token,
    oauthTokenSecret,
    oauth_verifier,
    (error, accessToken, accessTokenSecret, results) => {
      if (error) return res.status(500).json({ error });

      res.json({
        accessToken,
        accessTokenSecret
      });
    }
  );
});
