import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChEhS1fBFuFzew3vQMG3FX3HnM6ERu5XA",
    authDomain: "house-marketplace-de82b.firebaseapp.com",
    projectId: "house-marketplace-de82b",
    storageBucket: "house-marketplace-de82b.appspot.com",
    messagingSenderId: "146751064838",
    appId: "1:146751064838:web:beaed4a20557cceeb3ec87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();