
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAsXF1a4FuxLP25poGBSiupNqPE-rTyz40",
    authDomain: "mern-project-001-fd237.firebaseapp.com",
    databaseURL: "https://mern-project-001-fd237-default-rtdb.firebaseio.com",
    projectId: "mern-project-001-fd237",
    storageBucket: "mern-project-001-fd237.firebasestorage.app",
    messagingSenderId: "399974521290",
    appId: "1:399974521290:web:6d4458f76518c709771733"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log("Auth file is executed Successfully")

  function SignUpUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        console.log(userCredential.user.uid)
    })
  }

  const signUp = document.getElementById('signup')
  signUp.addEventListener('click',SignUpUser)


  function SignInUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        console.log(userCredential.user.uid)
        console.log("LogIn")
    })
  }

  const signIn = document.getElementById('sign_in')
  signIn.addEventListener('click',SignInUser)