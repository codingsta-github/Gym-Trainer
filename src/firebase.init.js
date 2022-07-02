// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBE4Ozda07_jdoRthzuyeketMDhOwxLhk",
  authDomain: "gym-trainer-4d0e7.firebaseapp.com",
  projectId: "gym-trainer-4d0e7",
  storageBucket: "gym-trainer-4d0e7.appspot.com",
  messagingSenderId: "591565232469",
  appId: "1:591565232469:web:e28ad571513f8b6dab77dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;