// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

var button = document.getElementById("btn")
button.addEventListener("click", () => {
    var email = document.getElementById("inp1").value
    var password = document.getElementById("inp2").value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(email, password)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

})

const firebaseConfig = {
    apiKey: "AIzaSyCe-gbRxDUu2tjFlvgeziV4GXE51m1JAYo",
    authDomain: "smit-testing-af82d.firebaseapp.com",
    projectId: "smit-testing-af82d",
    storageBucket: "smit-testing-af82d.appspot.com",
    messagingSenderId: "780055886232",
    appId: "1:780055886232:web:171645067a12ea2e1793ed",
    measurementId: "G-J2VD1MC21F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);