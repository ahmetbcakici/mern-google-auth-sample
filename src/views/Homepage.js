import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import {GOOGLE_CLIENT_ID} from '../keys';

function Homepage() {
  const responseGoogle = (response) => {
    axios
      .post('http://localhost:4444/google', {token: response.tokenId})
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1 onClick={responseGoogle}>homepage</h1>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      ,
    </div>
  );
}

export default Homepage;
