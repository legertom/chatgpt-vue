import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJ0BNZ3MHeXnmVItdtqs-4_z5Cjc5C2PI",
    authDomain: "chatgpt-vue-83cbb.firebaseapp.com",
    projectId: "chatgpt-vue-83cbb",
    storageBucket: "chatgpt-vue-83cbb.appspot.com",
    messagingSenderId: "93808254082",
    appId: "1:93808254082:web:268c750fc730a906b5e89b",
    measurementId: "G-TWZQ9L8ZJS"
  };

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
