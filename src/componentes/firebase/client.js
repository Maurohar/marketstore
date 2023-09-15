import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJTAhbCmypzf15SCMMq5u2VO5pvGBJurg",
  authDomain: "ecommerce-maurohar.firebaseapp.com",
  projectId: "ecommerce-maurohar",
  storageBucket: "ecommerce-maurohar.appspot.com",
  messagingSenderId: "674229666800",
  appId: "1:674229666800:web:ba7c1f13e0b56139241335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);