// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf1HQ3npIthY7N7mr7ElzdmysfPFp1M1A",
  authDomain: "test-f8e3a.firebaseapp.com",
  projectId: "test-f8e3a",
  storageBucket: "test-f8e3a.appspot.com",
  messagingSenderId: "499183379833",
  appId: "1:499183379833:web:f9e42765b66522cbd07ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intialize Firestore
export const db = getFirestore(app);


