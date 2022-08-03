/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGoogleDataThunk } from '../../../redux/actions/googleAuthActions';
/* global google */

export default function GoogleAuth() {
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    dispatch(getGoogleDataThunk(response));
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '841875808140-265h78c8ini3d4da85k7g2hu3cphc7uu.apps.googleusercontent.com',
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
