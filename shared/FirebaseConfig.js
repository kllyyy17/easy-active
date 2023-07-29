// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "easy-active-9a2a5.firebaseapp.com",
  projectId: "easy-active-9a2a5",
  storageBucket: "easy-active-9a2a5.appspot.com",
  messagingSenderId: "316858323015",
  appId: "1:316858323015:web:bb5629c02b2cfcceac2162",
  measurementId: "G-YE47GZST0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// const analytics = getAnalytics(app);