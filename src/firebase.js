import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBq75OUx2HCR6pbqiNIlz6pryoizfBq-jU",
  authDomain: "disneyplus-clone-eb86a.firebaseapp.com",
  projectId: "disneyplus-clone-eb86a",
  storageBucket: "disneyplus-clone-eb86a.appspot.com",
  messagingSenderId: "487765792828",
  appId: "1:487765792828:web:dda711211a64fedea4cb39",
  measurementId: "G-C0C4XB9176",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
