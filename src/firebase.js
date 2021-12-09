import firebase from "firebase";
// authentication
import "firebase/auth";
// firestore database
import "firebase/firestore";
// real time database
import "firebase/database";
// storage
import "firebase/storage";
// function
// import 'firebase/functions'
// hosting

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyConQvcqdG8Ni7iaQvYtmMXeszIF8my8HU",
  authDomain: "spotify-clone-78424.firebaseapp.com",
  projectId: "spotify-clone-78424",
  storageBucket: "spotify-clone-78424.appspot.com",
  messagingSenderId: "309302778288",
  appId: "1:309302778288:web:051442f59fb061f9371e75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
