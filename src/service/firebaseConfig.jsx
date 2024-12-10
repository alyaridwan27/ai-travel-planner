// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjz3Kk-6ffr5mF22qCf9NlQ-4Szmo702o",
  authDomain: "travel-planner-97f8f.firebaseapp.com",
  projectId: "travel-planner-97f8f",
  storageBucket: "travel-planner-97f8f.firebasestorage.app",
  messagingSenderId: "163560805598",
  appId: "1:163560805598:web:c749f7c17f41b07b579e4f",
  measurementId: "G-2XF07S0V99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
