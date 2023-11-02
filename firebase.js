import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
 // pour la base de données

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env["APIKEY"],
  authDomain: "site-e-commerce-headn.firebaseapp.com",
  projectId: "site-e-commerce-headn",
  storageBucket: "site-e-commerce-headn.appspot.com",
  messagingSenderId: "397272175498",
  appId: "1:397272175498:web:9242e9f2a6026ca3ef2e73"
};


// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();