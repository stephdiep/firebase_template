 // Import firebase
 import firebase from 'firebase'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  let instance

  export default function getFirebase() {
    if (typeof window !== "undefined") {
      if (instance) return instance
      instance = firebase.initializeApp(firebaseConfig);
      return instance
    }
  
    return null
  }