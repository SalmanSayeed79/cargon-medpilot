// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdKWfdVDTOeK2jk7AMEDCrfyAUsice5hc",
    authDomain: "cargon-medpilot.firebaseapp.com",
    projectId: "cargon-medpilot",
    storageBucket: "cargon-medpilot.appspot.com",
    messagingSenderId: "747455880616",
    appId: "1:747455880616:web:8ec0891dc19e404019919d",
    measurementId: "G-00B21ESS5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app