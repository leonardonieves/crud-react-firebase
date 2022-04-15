import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAZaWvgi93nVBgNhpJyNAaIdkSYYXW6A9g",
  authDomain: "crudfirebase-bf9d2.firebaseapp.com",
  databaseURL: "https://crudfirebase-bf9d2-default-rtdb.firebaseio.com",
  projectId: "crudfirebase-bf9d2",
  storageBucket: "crudfirebase-bf9d2.appspot.com",
  messagingSenderId: "884064432144",
  appId: "1:884064432144:web:6bad89df4024e136985a95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;