
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOI-JrIr7I8-LwSDXFb2_U0zrIsSg-3Ks",
  authDomain: "jjgtiendatcc.firebaseapp.com",
  projectId: "jjgtiendatcc",
  storageBucket: "jjgtiendatcc.appspot.com",
  messagingSenderId: "904082245432",
  appId: "1:904082245432:web:577f858b6c5fd7de4063cd",
  measurementId: "G-MP6J83C00G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);