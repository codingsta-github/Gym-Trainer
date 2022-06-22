// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzsPe0I4EdDVAYuYaiJnXthIDTt3nZ7FA",
  authDomain: "gym-trainer-95cdd.firebaseapp.com",
  projectId: "gym-trainer-95cdd",
  storageBucket: "gym-trainer-95cdd.appspot.com",
  messagingSenderId: "968502503406",
  appId: "1:968502503406:web:6dfbeda59b393fcea790ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;