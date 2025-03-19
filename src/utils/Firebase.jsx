// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCjCgHuwABI14Lvv9P3701mGTrwtLoDYY",
  authDomain: "cineflixgpt-df975.firebaseapp.com",
  projectId: "cineflixgpt-df975",
  storageBucket: "cineflixgpt-df975.firebasestorage.app",
  messagingSenderId: "482369197095",
  appId: "1:482369197095:web:f66f64bfaa5ea2ec0e2a02",
  measurementId: "G-VVF8HM6GX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);