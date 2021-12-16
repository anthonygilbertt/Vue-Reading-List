import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWrx0lidSj5ugsS7Z7Ct4Tvxcrg2F4ehY",
  authDomain: "fir-9-reading-list-b2a53.firebaseapp.com",
  projectId: "fir-9-reading-list-b2a53",
  storageBucket: "fir-9-reading-list-b2a53.appspot.com",
  messagingSenderId: "325687782751",
  appId: "1:325687782751:web:31131a4b530f0177801aea",
};

// Init Firebase
initializeApp(firebaseConfig);

// Init Services
const db = getFirestore();
const auth = getAuth();

export { db, auth };
