import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCU9VoWwC5vKndCXcTvLqa8ztqhtYX3yi0",
    authDomain: "clone-32aa4.firebaseapp.com",
    databaseURL: "https://clone-32aa4.firebaseio.com",
    projectId: "clone-32aa4",
    storageBucket: "clone-32aa4.appspot.com",
    messagingSenderId: "398886279558",
    appId: "1:398886279558:web:c40b7226cc2d49cec4f407",
    measurementId: "G-X0ZF6YKRK3"

})

/*const db = firebaseApp.firestore();*/
const auth = firebase.auth();

export {  auth }