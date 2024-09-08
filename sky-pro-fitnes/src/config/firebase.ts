// src/config/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
     apiKey: "AIzaSyBjycuYIdU9dHr3K321x_KbPBH56dZOC_s",
     authDomain: "skyfitnespro.firebaseapp.com",
     databaseURL: "https://skyfitnespro-default-rtdb.europe-west1.firebasedatabase.app",
     projectId: "skyfitnespro",
     storageBucket: "skyfitnespro.appspot.com",
     messagingSenderId: "1032692405656",
     appId: "1:1032692405656:web:745f61781f272d8ffa47ed",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;