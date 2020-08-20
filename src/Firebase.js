import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEuuWApFv8id4e6RpyThuLcgLmxWDECTw",
    authDomain: "whatsapp-f6ea8.firebaseapp.com",
    databaseURL: "https://whatsapp-f6ea8.firebaseio.com",
    projectId: "whatsapp-f6ea8",
    storageBucket: "whatsapp-f6ea8.appspot.com",
    messagingSenderId: "793300637759",
    appId: "1:793300637759:web:5437cdeb3619ec6ef8008a",
    measurementId: "G-7PWWH32ML0"
  });

  // firebase.firestore.setLogLevel('debug');
firebase.firestore().settings({ experimentalForceLongPolling: true });
const db=firebaseApp.firestore(); //access to db
const provider = new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage(); //access to storage like upload

export {provider,storage};
export default db;