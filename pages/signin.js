import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../config';
import { setUserCookie } from '../auth/userCookie';
import { mapUserData } from '../auth/mapUserData';
import style from './register.module.css'
import { useRouter } from 'next/router';

initFirebase();
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({


  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    }
  }
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/"
  const router = useRouter();
  function clickRegis() {
    router.push('/register')
  }
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={firebase.auth()}
        signInSuccessUrl={signInSuccessUrl}
      />
      <div className={style.box}>
        <h5>ยังไม่มีบัญชี ? <a onClick={clickRegis} className={style.link}>สมัครเลย !!</a></h5>
      </div>
    </div>
  );
};


export default FirebaseAuth;