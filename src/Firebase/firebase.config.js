// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2UuBFumAoEk5rLx-Sfxx7Pk0Ay1xOu_M",
  authDomain: "mintie-art-and-craft.firebaseapp.com",
  projectId: "mintie-art-and-craft",
  storageBucket: "mintie-art-and-craft.appspot.com",
  messagingSenderId: "252334999144",
  appId: "1:252334999144:web:54fea00509d2bc81d15ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;