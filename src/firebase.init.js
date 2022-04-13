// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhvtbyjiUxAV52qr1pKe5cJhGNlz1zxxI",
    authDomain: "ema-jogh-simple.firebaseapp.com",
    projectId: "ema-jogh-simple",
    storageBucket: "ema-jogh-simple.appspot.com",
    messagingSenderId: "872645465353",
    appId: "1:872645465353:web:86356db8f5f2d0b59d6fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth