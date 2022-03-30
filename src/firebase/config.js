import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  /*apiKey: "AIzaSyBKB4L3qyD-QHCovEvntQS3HRuOJBVSkno",
  authDomain: "udemy-vue-projects.firebaseapp.com",
  databaseURL: "https://udemy-vue-projects.firebaseio.com",
  projectId: "udemy-vue-projects",
  storageBucket: "udemy-vue-projects.appspot.com",
  messagingSenderId: "25092947019",
  appId: "1:25092947019:web:fdd61cabc8d29add63e1ce"*/

  apiKey: "AIzaSyCDMlgynfzrlG4EmG3dw0HNNq3K4uHYu9U",
  authDomain: "soundscape-9e59f.firebaseapp.com",
  databaseURL: "https://soundscape-9e59f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "soundscape-9e59f",
  storageBucket: "soundscape-9e59f.appspot.com",
  messagingSenderId: "362681373195",
  appId: "1:362681373195:web:f9431ffe85a0ac5535ed0e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }
