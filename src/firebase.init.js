// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zvPQjtKt9w50beJIjm3aqdPUeBZpsqY",
  authDomain: "router-firebase-ab998.firebaseapp.com",
  projectId: "router-firebase-ab998",
  storageBucket: "router-firebase-ab998.appspot.com",
  messagingSenderId: "642059765785",
  appId: "1:642059765785:web:19ede3289fbe06ca000288"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;