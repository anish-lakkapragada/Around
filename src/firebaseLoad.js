// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "my-awesome-project-7e477.firebaseapp.com",
  databaseURL: "https://my-awesome-project-7e477-default-rtdb.firebaseio.com",
  projectId: "my-awesome-project-7e477",
  storageBucket: "my-awesome-project-7e477.appspot.com",
  messagingSenderId: "792665789546",
  appId: "1:792665789546:web:5408d4cbf580c884bea613",
  measurementId: "G-MY94EDEHE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
