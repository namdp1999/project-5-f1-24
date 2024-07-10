import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA834Lhq9Y4-QCDKAPIHQtcFsK6IIujaac",
  authDomain: "project-5---f1-24.firebaseapp.com",
  databaseURL: "https://project-5---f1-24-default-rtdb.firebaseio.com",
  projectId: "project-5---f1-24",
  storageBucket: "project-5---f1-24.appspot.com",
  messagingSenderId: "511447173272",
  appId: "1:511447173272:web:5b5b7fc363b85eb6cce8ed"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbFirebase, authFirebase };