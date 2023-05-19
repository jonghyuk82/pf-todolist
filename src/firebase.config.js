// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA42CcIQqk3tdy8ecfZIex4P6796BJatGw",
  authDomain: "pf-reajs-todolist.firebaseapp.com",
  projectId: "pf-reajs-todolist",
  storageBucket: "pf-reajs-todolist.appspot.com",
  messagingSenderId: "35979280198",
  appId: "1:35979280198:web:57ee386b3820eb86f0af47",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
