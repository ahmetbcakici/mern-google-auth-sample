const cors = require('cors');
const bP = require('body-parser');
const express = require('express')();
const {GOOGLE_CLIENT_ID} = require('../src/keys');

express.use(cors());
express.use(bP.json());

const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

express.post('/google', (req, res) => {
  const {token} = req.body;
  console.log(token);
  client
    .verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    })
    .then((res) => console.log(res));
  res.send(token);
});

express.listen(4444);
