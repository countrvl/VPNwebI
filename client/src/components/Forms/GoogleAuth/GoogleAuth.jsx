/* eslint-disable camelcase */
// import * as dotenv from 'dotenv';
// import 'dotenv/config';
// import env from 'react-dotenv';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGoogleDataThunk } from '../../../redux/actions/googleAuthActions';
/* global google */

const { REACT_APP_GOOGLE_AUTH: auth } = process.env;

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    dispatch(getGoogleDataThunk(response, navigate));
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: auth,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { },
    );
  }, []);

  return (

    <div className="google">
      <i id="signInDiv" />
    </div>

  );
}
