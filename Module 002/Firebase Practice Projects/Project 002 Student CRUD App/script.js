
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, set,ref } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB4kz6MlNQ7bkCVozzCi0DLi8SNwzL9eFg",
    authDomain: "student-crud-app-d5550.firebaseapp.com",
    projectId: "student-crud-app-d5550",
    storageBucket: "student-crud-app-d5550.firebasestorage.app",
    messagingSenderId: "202265538468",
    appId: "1:202265538468:web:609c4d6fdfc1b0d0395b31"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const add_data = document.getElementById("add_data");
  const notification = document.getElementById('notification')
  console.log("Firebase Initiated")

  function AddStudents(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rollnumber = document.getElementById('rollnumber').value;
    const admdate = document.getElementById('admdate').value;

    console.log(name,email,rollnumber,admdate)

    set(ref(db,'students/' + rollnumber),{
        name:name,
        email:email,
        rollnumber:rollnumber,
        admdate:admdate
    })

    notification.innerText = "Added Successfully"


  }

  add_data.addEventListener('click',AddStudents)