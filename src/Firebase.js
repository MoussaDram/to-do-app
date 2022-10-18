// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvDkFj_YvPY_bMOx3ZyxIUu0kJXC7UYD4",
  authDomain: "todo-app-884a6.firebaseapp.com",
  projectId: "todo-app-884a6",
  storageBucket: "todo-app-884a6.appspot.com",
  messagingSenderId: "1042283892039",
  appId: "1:1042283892039:web:3d99b0f238d57c3f441062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
