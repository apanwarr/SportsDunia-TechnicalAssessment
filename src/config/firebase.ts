// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrwhvdpiXrAYl3DhRgDyOdt10Lli7wKUk",
  authDomain: "reactproject-b6df9.firebaseapp.com",
  projectId: "reactproject-b6df9",
  storageBucket: "reactproject-b6df9.firebasestorage.app",
  messagingSenderId: "242889703915",
  appId: "1:242889703915:web:c2c1156346a2299d2a19ae",
  measurementId: "G-ML3T0QLV6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication and Firestore
const auth = getAuth(app);
const Providers = { google: new GoogleAuthProvider() };
const db = getFirestore(app);

// Export the necessary services
export { app, analytics, auth, Providers, db, onAuthStateChanged };
