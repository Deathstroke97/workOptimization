import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBFuWePEDP72cxPH1YwJnNs--s25Aj7y8",
    authDomain: "workoptimizer-b1f62.firebaseapp.com",
    databaseURL: "https://workoptimizer-b1f62.firebaseio.com",
    projectId: "workoptimizer-b1f62",
    storageBucket: "workoptimizer-b1f62.appspot.com",
    messagingSenderId: "526692315458"
};

firebase.initializeApp(firebaseConfig);

export default firebase;