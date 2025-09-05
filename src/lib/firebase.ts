import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-rLRvsiPJp7LPgpNLFYEMXD4-P4leBmk",
  authDomain: "propfind-3ep1i.firebaseapp.com",
  projectId: "propfind-3ep1i",
  storageBucket: "propfind-3ep1i.firebasestorage.app",
  messagingSenderId: "603038082907",
  appId: "1:603038082907:android:4aac4e48262a3d78461c7e",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth };
