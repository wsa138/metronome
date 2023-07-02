import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCW4DqffUchwenN_yHniDxWciMd6Tp9Dck',
  authDomain: 'to-do-app-v2-b549a.firebaseapp.com',
  projectId: 'to-do-app-v2-b549a',
  storageBucket: 'to-do-app-v2-b549a.appspot.com',
  messagingSenderId: '872073924922',
  appId: '1:872073924922:web:226009856a2eda82f20003',
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
