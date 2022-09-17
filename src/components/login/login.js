import React from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientId = '558874201953-bnik5ln6t0j5ekuad0a2l788ds0g4898.apps.googleusercontent.com';

function Login() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("Login Success!!! Current user: ", res.profileObj);
    navigate('/main');
  };

  const onFailure = (res) => {
    console.log("Login Faild!!! ", res);
  };

  return (
    <div id='signInButton'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        // isSignedIn={true}
      />
    </div>
  );
}

export default Login;
