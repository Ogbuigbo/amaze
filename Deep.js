import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



  const firebaseConfig = {
    apiKey: "AIzaSyAfdtqa6QCtE1__TKhvaFlCaymMIsbQBus",
    authDomain: "challenge-8546e.firebaseapp.com",
    projectId: "challenge-8546e",
    storageBucket: "challenge-8546e.appspot.com",
    messagingSenderId: "790786726366",
    appId: "1:790786726366:web:ac427c6bce31d19c37254f",
    measurementId: "G-70W6T557FM"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
