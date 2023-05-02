// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeR57z8up_HPswxX526QfxY2kG2qUyHQA",
  authDomain: "food-lovers-3b485.firebaseapp.com",
  projectId: "food-lovers-3b485",
  storageBucket: "food-lovers-3b485.appspot.com",
  messagingSenderId: "867755350146",
  appId: "1:867755350146:web:183de501b911ea3053fc9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app