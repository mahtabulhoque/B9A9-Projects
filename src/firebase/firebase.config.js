import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAoaEp_iMSDD6D7T7Eg06QJ8MKtgrg25s0",
  authDomain: "b9a9-assignment.firebaseapp.com",
  projectId: "b9a9-assignment",
  storageBucket: "b9a9-assignment.appspot.com",
  messagingSenderId: "737240399293",
  appId: "1:737240399293:web:94733b19641367868aa6d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service


export default app;
