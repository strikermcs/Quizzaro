
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ53n__gAMQpGbG_9Y9h_ytIyrJWfHD3k",
  authDomain: "quizzaro-29cc0.firebaseapp.com",
  projectId: "quizzaro-29cc0",
  storageBucket: "quizzaro-29cc0.appspot.com",
  messagingSenderId: "495888279734",
  appId: "1:495888279734:web:a07d120d1a254e00b5de17",
  measurementId: "G-ZQ5Z76TSBH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app) 

export {
    db,
    auth
}
