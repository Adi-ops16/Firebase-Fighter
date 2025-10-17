// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJiNk2y9C-Om91AUynztn3zD1UpNA43sY",
    authDomain: "fir-fighter-2daf5.firebaseapp.com",
    projectId: "fir-fighter-2daf5",
    storageBucket: "fir-fighter-2daf5.firebasestorage.app",
    messagingSenderId: "401909759909",
    appId: "1:401909759909:web:66dad0328af4e45f8ab24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);