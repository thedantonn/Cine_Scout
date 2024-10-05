// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehMriFyp8a7SiB7AsGoHyujysYCjMGKM",
  authDomain: "netflix-gpt-56315.firebaseapp.com",
  projectId: "netflix-gpt-56315",
  storageBucket: "netflix-gpt-56315.appspot.com",
  messagingSenderId: "694096650391",
  appId: "1:694096650391:web:acbb1424606f52ab4a09d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);