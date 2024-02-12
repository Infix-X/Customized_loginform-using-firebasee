import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import
import './media.css'

import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRznpZzitF-xLjk_OaUEShu-M9_9JDYLw",
  authDomain: "react-blog-ee12a.firebaseapp.com",
  projectId: "react-blog-ee12a",
  storageBucket: "react-blog-ee12a.appspot.com",
  messagingSenderId: "445780782310",
  appId: "1:445780782310:web:bbfac56885e93b64ac5f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
