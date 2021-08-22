import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhmCZVcDasJOWjpY4VzuouFts-Gf0r8oU",
    authDomain: "docs-c797b.firebaseapp.com",
    projectId: "docs-c797b",
    storageBucket: "docs-c797b.appspot.com",
    messagingSenderId: "923847576734",
    appId: "1:923847576734:web:adcd3fa06c2af0a7477f8f"
};

const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };