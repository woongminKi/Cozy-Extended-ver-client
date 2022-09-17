import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Login from './components/login/login';
import Logout from './components/login/logout';
import { loginSuccess } from './features/auth/authSlice';
import { gapi } from 'gapi-script';

const clientId = '558874201953-bnik5ln6t0j5ekuad0a2l788ds0g4898.apps.googleusercontent.com';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginCheck, setLoginCheck] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log("isLogin::", isLogin)

  useEffect(() => {
    async function start() {
      if (!gapi.auth) {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        });

        const accessToken = await gapi.auth.getToken().access_token;
      }
    }

    gapi.load('client:auth2', start);
  }, [navigate]);

  return (
    <>
      <h1>Cozy</h1>
      <Login />
    </>
  )
}
