import firebase from "firebase/app";
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.RREACT_APP_APIKEY,
    authDomain: "cv-feedback-13652.firebaseapp.com",
    projectId: "cv-feedback-13652",
    storageBucket: "cv-feedback-13652.appspot.com",
    messagingSenderId: "353684710937",
    appId: "1:353684710937:web:89fc40c007bd93d0046c88",
    measurementId: "G-9NNR5RBC5G"
};
firebase.initializeApp(firebaseConfig);

export default firebase; 