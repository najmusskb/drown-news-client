// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5MNnOiyRpHsZuKBjl-Tz0YfS1APVDnxg",
  authDomain: "dragon-news-project.firebaseapp.com",
  projectId: "dragon-news-project",
  storageBucket: "dragon-news-project.appspot.com",
  messagingSenderId: "771234705005",
  appId: "1:771234705005:web:03e7162263bedff133d964"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app ;