// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC-rZAPSohVSqRjn1SuiPVrgie_rs-CPM",
  authDomain: "solutionchallengehumg2023.firebaseapp.com",
  projectId: "solutionchallengehumg2023",
  storageBucket: "solutionchallengehumg2023.appspot.com",
  messagingSenderId: "96138120905",
  appId: "1:96138120905:web:4bc37ee867773c1dc9c718",
  measurementId: "G-8M2WG24JF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);