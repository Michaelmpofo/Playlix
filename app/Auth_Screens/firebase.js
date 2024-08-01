import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCHIMRTQJ-YWvoyjs78VHTDmClYyFeu_7Y',
  authDomain: 'playlix-a21e3.firebaseapp.com',
  projectId: 'playlix-a21e3',
  storageBucket: 'playlix-a21e3',
  messagingSenderId: '1034108951137',
  appId: '1:1034108951137:web:924a0da96f1b63b5c42820',
};

// Initialize Firebase app if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);
const storage = getStorage(app);

export {
  db,
  app,
  auth,
  storage,
  createUserWithEmailAndPassword,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  signInWithEmailAndPassword,
  ref,
  getDownloadURL,
  listAll,
};
