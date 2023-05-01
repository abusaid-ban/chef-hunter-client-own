// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-qgyAZ_D6004uKT1PUIStb6fb_EYsOjY",
  authDomain: "chef-hunter-client-phero.firebaseapp.com",
  projectId: "chef-hunter-client-phero",
  storageBucket: "chef-hunter-client-phero.appspot.com",
  messagingSenderId: "420027941968",
  appId: "1:420027941968:web:9ac982e4b296200f973d55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;