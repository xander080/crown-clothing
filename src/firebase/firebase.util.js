import firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
  apiKey: 'AIzaSyDUG3p4RyiYaeX73D6pGX8Wb5zYNvytlSc',
  authDomain: 'crown-db-785bc.firebaseapp.com',
  projectId: 'crown-db-785bc',
  storageBucket: 'crown-db-785bc.appspot.com',
  messagingSenderId: '223888057038',
  appId: '1:223888057038:web:41771f9806ed1d531ce69f',
  measurementId: 'G-D95L3HW2QS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
