
import firebase from "firebase/app";
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyCDa50HVlEdfQLuWCnpBI0vj8CYgltBmLQ",
  // authDomain: "electric-nomad-253012.firebaseapp.com",
  // databaseURL: "https://electric-nomad-253012.firebaseio.com",
  // projectId: "electric-nomad-253012",
  // storageBucket: "electric-nomad-253012.appspot.com",
  // messagingSenderId: "80823868377",
  // appId: "1:80823868377:web:604aaebc9cb755ad7197c8",
  // measurementId: "G-PVK0MHYR7C"
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