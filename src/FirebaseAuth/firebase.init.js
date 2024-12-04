// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0mCe9eM3UddNdt7TW3F4w9wJA0P0_kVA",
  authDomain: "chill-gamer-a150c.firebaseapp.com",
  projectId: "chill-gamer-a150c",
  storageBucket: "chill-gamer-a150c.firebasestorage.app",
  messagingSenderId: "399912990484",
  appId: "1:399912990484:web:b6b5fa938c1d4185a47401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);