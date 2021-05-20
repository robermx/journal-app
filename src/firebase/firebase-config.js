import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDWXJbZ4fGYjqCTFe-Oob0bING3Ne8I29Q',
  authDomain: 'react-journal-2f66d.firebaseapp.com',
  projectId: 'react-journal-2f66d',
  storageBucket: 'react-journal-2f66d.appspot.com',
  messagingSenderId: '28513941440',
  appId: '1:28513941440:web:9e9898916ff605f7b77a25',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
