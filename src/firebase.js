import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsi5WPsjBYsZj5fcYtyDNkKyHjnwdPsAg",
  authDomain: "chatapplication-1dec9.firebaseapp.com",
  projectId: "chatapplication-1dec9",
  storageBucket: "gs://chatapplication-1dec9.appspot.com",
  messagingSenderId: "10958275753",
  appId: "1:10958275753:web:69cc979285b395a8d815b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
