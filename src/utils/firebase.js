// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "lamablog-b624f.firebaseapp.com",
  projectId: "lamablog-b624f",
  storageBucket: "lamablog-b624f.appspot.com",
  messagingSenderId: "460419359468",
  appId: "1:460419359468:web:d4ca0e675b3abec30e3bc9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
