// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*var firebaseConfig = {
    apiKey: "AIzaSyCCq52doafLrCgEtBbxClk4zwmvACFfKqg",
    authDomain: "tryproject-2ac32.firebaseapp.com",
    databaseURL: "https://tryproject-2ac32-default-rtdb.firebaseio.com",
    projectId: "tryproject-2ac32",
    storageBucket: "tryproject-2ac32.appspot.com",
    messagingSenderId: "210588634555",
    appId: "1:210588634555:web:97e0c17344bc4f64f0489e",
    measurementId: "G-00GE88C3D5"
  };*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATGKVNKZ4YYOd2KMu6Z_sPhO2ARmcQ2rA",
  authDomain: "active-intro.firebaseapp.com",
  databaseURL: "https://active-intro-default-rtdb.firebaseio.com/",
  projectId: "active-intro",
  storageBucket: "active-intro.appspot.com",
  messagingSenderId: "848593232708",
  appId: "1:848593232708:web:4c6b6c2622f3eadfbb6d11",
  measurementId: "G-CDC8DEXETD"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

console.log('firebaseConfig');