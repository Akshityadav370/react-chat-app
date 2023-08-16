// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC32ZmUmZ3atFBgUiwUjjiH6Ml1GN7hEok",
  authDomain: "react-chat-7bb91.firebaseapp.com",
  projectId: "react-chat-7bb91",
  storageBucket: "react-chat-7bb91.appspot.com",
  messagingSenderId: "581804118377",
  appId: "1:581804118377:web:c574c5f8bafd0993a16df8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
