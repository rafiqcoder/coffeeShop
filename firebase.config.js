// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUadiVfYW_1-qV6Q3HnycUduDI4gr2aXo",
  authDomain: "cofeeshop-918b5.firebaseapp.com",
  projectId: "cofeeshop-918b5",
  storageBucket: "cofeeshop-918b5.firebasestorage.app",
  messagingSenderId: "267975368458",
  appId: "1:267975368458:web:4c8d466c91ea76d80ca4f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
