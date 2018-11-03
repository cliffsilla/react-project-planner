 import firebase from "firebase/app";
 import 'firebase/firestore';
 import 'firebase/auth';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPGytcFHZ1UHeazESQH0on5U7uknX4s1I",
    authDomain: "project-planner-47c26.firebaseapp.com",
    databaseURL: "https://project-planner-47c26.firebaseio.com",
    projectId: "project-planner-47c26",
    storageBucket: "project-planner-47c26.appspot.com",
    messagingSenderId: "938576190960"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;