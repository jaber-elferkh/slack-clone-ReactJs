import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCX5RuAQQY0TdwFq0_ZpeOiLIy5a24UT6I',
  authDomain: 'slack-clone-ba18a.firebaseapp.com',
  projectId: 'slack-clone-ba18a',
  storageBucket: 'slack-clone-ba18a.appspot.com',
  messagingSenderId: '479505139193',
  appId: '1:479505139193:web:e7c94f6bb2d1f60492a928',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
