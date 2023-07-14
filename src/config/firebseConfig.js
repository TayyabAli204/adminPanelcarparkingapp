import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "carparking-7db82.firebaseapp.com",
  projectId: "carparking-7db82",
  storageBucket: "carparking-7db82.appspot.com",
  messagingSenderId: "16218982306",
  appId: "1:16218982306:web:dee435284f743be3f4d4fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
export { db, auth }