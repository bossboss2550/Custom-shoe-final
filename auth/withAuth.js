import React, { useEffect } from 'react';
import router from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config';

firebaseConfig();
const auth = firebase.auth();

// eslint-disable-next-line react/display-name
const withAuth = Component => props => {
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (!authUser) {
        router.push('/');
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  )
};

export default withAuth;