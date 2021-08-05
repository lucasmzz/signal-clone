import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiiGsE8b8N5Qrc9IOD03Eu0ud-QZsB1jg",
  authDomain: "signal-clone-8250f.firebaseapp.com",
  projectId: "signal-clone-8250f",
  storageBucket: "signal-clone-8250f.appspot.com",
  messagingSenderId: "763534161228",
  appId: "1:763534161228:web:1271f6c95b982a87250be9",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
