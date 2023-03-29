import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8h5DNKZ73Uta9P1oKSyD4o4a8G0nQOw0",
  authDomain: "blogzim-bd8ed.firebaseapp.com",
  projectId: "blogzim-bd8ed",
  storageBucket: "blogzim-bd8ed.appspot.com",
  messagingSenderId: "996653227693",
  appId: "1:996653227693:web:994e3fb13ad46b92ef3024"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };