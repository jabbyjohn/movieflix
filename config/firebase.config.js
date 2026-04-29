// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "movieflix-e3c74.firebaseapp.com",
  projectId: "movieflix-e3c74",
  storageBucket: "movieflix-e3c74.firebasestorage.app",
  messagingSenderId: "579410356039",
  appId: "1:579410356039:web:3e9ca4e6a5d39eccd58e62"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};