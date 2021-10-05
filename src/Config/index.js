import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3pA-Dx7WUr_ovTjkiyzPHwgLv8oiXJgU",
  authDomain: "anuncios-1498b.firebaseapp.com",
  databaseURL: "https://anuncios-1498b.firebaseio.com",
  projectId: "anuncios-1498b",
  storageBucket: "anuncios-1498b.appspot.com",
  messagingSenderId: "35529713752",
  appId: "1:35529713752:web:7c730906d2bfc8deb3c22d",
  measurementId: "G-HZVE696TRJ"
};

if(firebase.apps.length === 0) {
  // Initialize Firebase
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;