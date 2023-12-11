// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHuEhfmUz1AmkNhF2hSCyBvJmVl4qzKN0",
    authDomain: "todo-app-618cf.firebaseapp.com",
    projectId: "todo-app-618cf",
    storageBucket: "todo-app-618cf.appspot.com",
    messagingSenderId: "344817533589",
    appId: "1:344817533589:web:88bae0e1a4ec6fbafcd19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)