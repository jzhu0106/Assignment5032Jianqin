// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEPvbu_HD53Tvy5_Ue5CJeNf7TTtGjlzw",
  authDomain: "assignment-jianqin.firebaseapp.com",
  projectId: "assignment-jianqin",
  storageBucket: "assignment-jianqin.firebasestorage.app",
  messagingSenderId: "1027783815724",
  appId: "1:1027783815724:web:f8830af07a0e2a310a1789"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;