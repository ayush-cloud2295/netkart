// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2ZaFmRM74c2sJbYjwwG1jO39nZrCwQ4E",
    authDomain: "netkart-ba31d.firebaseapp.com",
    projectId: "netkart-ba31d",
    storageBucket: "netkart-ba31d.firebasestorage.app",
    messagingSenderId: "112694696338",
    appId: "1:112694696338:web:8d92ee042ea937f4b9c94b",
    measurementId: "G-PR7JEGBGK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export { app, auth };

