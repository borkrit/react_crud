// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByNlfw-97hxHSF-ypvPLksYg0Q7856RM8",
  authDomain: "blog-cd977.firebaseapp.com",
  projectId: "blog-cd977",
  storageBucket: "blog-cd977.appspot.com",
  messagingSenderId: "490005485164",
  appId: "1:490005485164:web:7d4edb02a4970d189aea49",
  measurementId: "G-YJEVWK4NZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);