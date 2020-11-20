import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_TOKEN,
  authDomain: "react-app-curso-fa113.firebaseapp.com",
  databaseURL: "https://react-app-curso-fa113.firebaseio.com",
  projectId: "react-app-curso-fa113",
  storageBucket: "react-app-curso-fa113.appspot.com",
  messagingSenderId: "778712200990",
  appId: "1:778712200990:web:f6634dc2b5470ab534bb0f",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
