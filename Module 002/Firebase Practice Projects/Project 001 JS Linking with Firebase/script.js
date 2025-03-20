
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, set,get, ref } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

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


      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        console.log("Good")

        
        // Initialize Realtime Database and get a reference to the service
        const db = getDatabase(app);
        console.log(db)
        

        function writeUserData(userID,name,email){
          set(ref(db,'users/'+userID),{
            name:name,
            email:email
          })

        }

        writeUserData(2,'Ahmed','ahmed@gmail.com')
        console.log("Data Written Successfully")

        function readData(){
          const userRef = ref(db,'users');

          get(userRef).then((snapshot) => {
            snapshot.forEach((childsnapShot) =>{
                    console.log(childsnapShot.val())
            })
          })
        }

        readData();