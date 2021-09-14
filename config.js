import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCw4IS0JJyzamrXdTyyPMVB7mZs8hozpJw",
    authDomain: "customporject.firebaseapp.com",
    projectId: "customporject",
    storageBucket: "customporject.appspot.com",
    messagingSenderId: "888300534157",
    appId: "1:888300534157:web:3a2595eb0549da5ab925c4",
    databaseURL: "https://customporject.firebaseio.com"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}