import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBK_uNvq9bC2BU1H_6XVusxUxtMIDR_Zf8",
    authDomain: "tendor-8d86f.firebaseapp.com",
    projectId: "tendor-8d86f",
    storageBucket: "tendor-8d86f.appspot.com",
    messagingSenderId: "716960333740",
    appId: "1:716960333740:web:c68781b593760303380409"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };