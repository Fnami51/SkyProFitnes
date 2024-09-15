import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Импортируем getFirestore
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjycuYIdU9dHr3K321x_KbPBH56dZOC_s",
  authDomain: "skyfitnespro.firebaseapp.com",
  databaseURL: "https://skyfitnespro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitnespro",
  storageBucket: "skyfitnespro.appspot.com",
  messagingSenderId: "1032692405656",
  appId: "1:1032692405656:web:745f61781f272d8ffa47ed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // Создаем экземпляр Firestore
const database = getDatabase(app);

export { app, auth, firestore, database };

