import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLsTmBNbgspgDG639nvsw7jRkQbyDckqY",
  authDomain: "viking-19eb8.firebaseapp.com",
  projectId: "viking-19eb8",
  storageBucket: "viking-19eb8.appspot.com",
  messagingSenderId: "103875668489",
  appId: "1:103875668489:web:220e0b7fb65fa7454be6d8",
  measurementId: "G-Y5QH947K6K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
