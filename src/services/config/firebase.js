// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiiYL5SAr_YXNX19_dfBIfsPEi715qbNw",
  authDomain: "ecommerce-torres-e5f05.firebaseapp.com",
  projectId: "ecommerce-torres-e5f05",
  storageBucket: "ecommerce-torres-e5f05.firebasestorage.app",
  messagingSenderId: "869867356320",
  appId: "1:869867356320:web:3c6b96c0fa47f13caf49c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();