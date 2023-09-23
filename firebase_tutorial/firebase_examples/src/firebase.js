// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRbyufTVNMtm_fOL_KNc-FdU66bBH-cuA",
  authDomain: "fir-demo-322f5.firebaseapp.com",
  projectId: "fir-demo-322f5",
  storageBucket: "fir-demo-322f5.appspot.com",
  messagingSenderId: "892432847895",
  appId: "1:892432847895:web:518f64861558b35a5df852",
  measurementId: "G-FPBEGGXMY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);