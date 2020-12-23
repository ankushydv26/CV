import firebase from "firebase/app";
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUXK5e3K2BKbQq8MZor1TjgUcOvpQdU4",
  authDomain: "feedbac-7866b.firebaseapp.com",
  databaseURL: "https://feedbac-7866b.firebaseio.com",
  projectId: "feedbac-7866b",
  storageBucket: "feedbac-7866b.appspot.com",
  messagingSenderId: "217617908289",
  appId: "1:217617908289:web:fdf420e0974e899dbf3cc0"
};
firebase.initializeApp(firebaseConfig);

export default firebase; 