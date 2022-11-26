import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBq75OUx2HCR6pbqiNIlz6pryoizfBq-jU",
  authDomain: "disneyplus-clone-eb86a.firebaseapp.com",
  projectId: "disneyplus-clone-eb86a",
  storageBucket: "disneyplus-clone-eb86a.appspot.com",
  messagingSenderId: "487765792828",
  appId: "1:487765792828:web:dda711211a64fedea4cb39",
  measurementId: "G-C0C4XB9176",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
