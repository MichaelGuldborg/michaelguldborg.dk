import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAfikKmqXdqxPlzZjc4xG9g9r12WOlsChk",
    authDomain: "michaelguldborgdk.firebaseapp.com",
    databaseURL: "https://michaelguldborgdk.firebaseio.com",
    projectId: "michaelguldborgdk",
    storageBucket: "",
    messagingSenderId: "887703921444"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

firestore.settings({
    timestampsInSnapshots: true //disable deprecated functions
});


export {
    firebase, auth, database, firestore,
};
