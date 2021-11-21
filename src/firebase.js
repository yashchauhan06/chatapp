import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB0aps0dLazq_mqEa2ea6xewNNf0kHPJmA",
    authDomain: "unichat-8adfc.firebaseapp.com",
    projectId: "unichat-8adfc",
    storageBucket: "unichat-8adfc.appspot.com",
    messagingSenderId: "953052655340",
    appId: "1:953052655340:web:b4f2056407d7ec0aa9ffc9",
  })
  .auth();
