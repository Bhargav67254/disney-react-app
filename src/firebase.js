import firebase from "firebase";

// replace it with your firebase api
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
const firebaseApps = firebase.initializeApp(firebaseConfig);
const database = firebaseApps.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, provider };
