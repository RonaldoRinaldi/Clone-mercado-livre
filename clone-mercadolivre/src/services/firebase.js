import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDM00IhroOkyVND-ma7do9VYO4kIDEy4gE",
    authDomain: "mercadolivre-dio.firebaseapp.com",
    projectId: "mercadolivre-dio",
    storageBucket: "mercadolivre-dio.appspot.com",
    messagingSenderId: "469699464728",
    appId: "1:469699464728:web:33ed359e70e98054bd7d6d",
    measurementId: "G-225TD72MH1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;