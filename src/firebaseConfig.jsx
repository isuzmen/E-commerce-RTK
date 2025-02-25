import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDambXW91Nq__PXbplx0JIuSfQyNrzwm4I",
  authDomain: "traced-e-e921e.firebaseapp.com",
  projectId: "traced-e-e921e",
  storageBucket: "traced-e-e921e.firebasestorage.app",
  messagingSenderId: "27031384055",
  appId: "1:27031384055:web:5312078482104eb9fc88f2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
