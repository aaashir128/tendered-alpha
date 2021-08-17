import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLk96xZlRma8YQOWuSbCT7uQcdJLik-jY",
  authDomain: "tendered-clone.firebaseapp.com",
  projectId: "tendered-clone",
  storageBucket: "tendered-clone.appspot.com",
  messagingSenderId: "1035936347850",
  appId: "1:1035936347850:web:0a79f1e7d2c671c628e633",
  measurementId: "G-DGSFJ04NHE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
