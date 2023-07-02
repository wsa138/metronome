import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCW4DqffUchwenN_yHniDxWciMd6Tp9Dck',
  authDomain: 'to-do-app-v2-b549a.firebaseapp.com',
  projectId: 'to-do-app-v2-b549a',
  storageBucket: 'to-do-app-v2-b549a.appspot.com',
  messagingSenderId: '872073924922',
  appId: '1:872073924922:web:226009856a2eda82f20003',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
