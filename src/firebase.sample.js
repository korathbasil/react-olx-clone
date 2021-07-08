import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Paste your firebaseConfig file here

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();
const storage = app.storage();

export { auth, db, storage };

// Rename filename firebase.sample.js => firebase.js
