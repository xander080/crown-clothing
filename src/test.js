import firebase from 'firebase/firebase-app';
import 'firebase/firebase-firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('QvSGmbd987b2qRh2GAzI')
  .collection('cartItems')
  .doc('NsammeKIW3RJ7IDGqnGh');

// same ways are this
// firestore.doc('/users/QvSGmbd987b2qRh2GAzI/cartItems/NsammeKIW3RJ7IDGqnGh')
// firestore.collection('/users/QvSGmbd987b2qRh2GAzI/cartItems')
