import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCHIMRTQJ-YWvoyjs78VHTDmClYyFeu_7Y',
  authDomain: 'playlix-a21e3.firebaseapp.com',
  projectId: 'playlix-a21e3',
  storageBucket: 'playlix-a21e3.appspot.com',
  messagingSenderId: '1034108951137',
  appId: '1:1034108951137:web:924a0da96f1b63b5c42820',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  app,
  auth,
  createUserWithEmailAndPassword,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  signInWithEmailAndPassword,
};
