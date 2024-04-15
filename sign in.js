import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD9BosjbTEgJRj5YURRMwc8BjUadZlQ19Y",
    authDomain: "ragefittness-gym.firebaseapp.com",
    projectId: "ragefittness-gym",
    storageBucket: "ragefittness-gym.appspot.com",
    messagingSenderId: "316662769825",
    appId: "1:316662769825:web:e89ec82e2918d9d8b168e0",
    measurementId: "G-VQWG1WFGJC"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.languageCode = 'en';

const provider = new GoogleAuthProvider();



const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../index.html";


    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });




})
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContext = userName;
    document.getElementById("userEmail").textContext = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

updateUserProfile()