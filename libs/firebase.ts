// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybVgpG7HXBsVeAILcRzTqfFNkqH1T06I",
  authDomain: "ecommerce-vid.firebaseapp.com",
  projectId: "ecommerce-vid",
  storageBucket: "ecommerce-vid.appspot.com",
  messagingSenderId: "376899255169",
  appId: "1:376899255169:web:0091be61b8eb4121dcc680",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
