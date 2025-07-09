  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword ,signOut, deleteUser,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBM4LyMa3ofKtRUlcTy5lGXlJnMV0Tax9E",
    authDomain: "atm-machine-a10ef.firebaseapp.com",
    projectId: "atm-machine-a10ef",
    storageBucket: "atm-machine-a10ef.appspot.com", 
    messagingSenderId: "1094243896021",
    appId: "1:1094243896021:web:f286fc36c3ca387801b05c",
    measurementId: "G-SQ942JVJ7L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  export{
    createUserWithEmailAndPassword,auth, signInWithEmailAndPassword,signOut, deleteUser,onAuthStateChanged
  }


