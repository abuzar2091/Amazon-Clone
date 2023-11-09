// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALtILLrOG5_w8q34UwaFaWOyhBbilEuX0",
  authDomain: "clone-b55af.firebaseapp.com",
  projectId: "clone-b55af",
  storageBucket: "clone-b55af.appspot.com",
  messagingSenderId: "239937322953",
  appId: "1:239937322953:web:9f9db38a0eb7e03df67218",
  measurementId: "G-K0062T5FZD"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {auth,db};
// const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);
// export const fbDatabase = getDatabase(app);
// export const fStore = getFirestore(app);
// export const fStorage = getStorage(app);
