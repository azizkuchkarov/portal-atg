import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAUquBmZdGKB3mhBFQsfHx0oABpRHeQEDE",
  authDomain: "atg-comments.firebaseapp.com",
  projectId: "atg-comments",
  storageBucket: "atg-comments.appspot.com",
  messagingSenderId: "157480976924",
  appId: "1:157480976924:web:15f1361d7682f656b6d5d9",
  measurementId: "G-PJDZNK19TX" // Optional, if you're using Firebase Analytics
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
