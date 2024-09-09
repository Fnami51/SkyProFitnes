import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

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

if (process.env.NODE_ENV === 'development') {
     connectAuthEmulator(auth, 'http://localhost:9099');
     connectFirestoreEmulator(firestore, 'localhost', 8080);
}

export default app; 