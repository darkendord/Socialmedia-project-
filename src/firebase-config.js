import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASt1q_n4tmFphB49emPB89x7wZBgYIyoE",
  authDomain: "blog-project-ede9a.firebaseapp.com",
  projectId: "blog-project-ede9a",
  storageBucket: "blog-project-ede9a.appspot.com",
  messagingSenderId: "9586005656",
  appId: "1:9586005656:web:766a1d386e76d1754122ed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
