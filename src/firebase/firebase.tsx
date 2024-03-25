// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEmjbK9GE4PkVXQU8yqf_I6BfOwIVymCc",
  authDomain: "insta-clone-a619b.firebaseapp.com",
  projectId: "insta-clone-a619b",
  storageBucket: "insta-clone-a619b.appspot.com",
  messagingSenderId: "77412207715",
  appId: "1:77412207715:web:4145ea2a0d7d05683abc56",
  measurementId: "G-RJVW4BXFQZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
// const analytics = getAnalytics(app);