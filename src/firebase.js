import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1OEB5T8l8Z0i1FVlozVW5DsZyTXrSVrU',
  authDomain: 'metronome-5a32f.firebaseapp.com',
  projectId: 'metronome-5a32f',
  storageBucket: 'metronome-5a32f.appspot.com',
  messagingSenderId: '322085738063',
  appId: '1:322085738063:web:8b983c5750b4010397fc3a',
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
