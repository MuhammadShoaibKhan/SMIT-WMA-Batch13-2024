
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, set,ref,get, remove, update } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

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
    const name = document.getElementById('namebox').value;
    const email = document.getElementById('emailbox').value;
    const rollnumber = document.getElementById('rollnumberbox').value;
    const admdate = document.getElementById('admdatebox').value;

    console.log(name,email,rollnumber,admdate)

    set(ref(db,'students/' + rollnumber),{
        name:name,
        email:email,
        rollnumber:rollnumber,
        admdate:admdate
    })

    notification.innerText = "Added Successfully"

     document.getElementById('namebox').value = "";
     document.getElementById('emailbox').value = "";
     document.getElementById('rollnumberbox').value = "";
     document.getElementById('admdatebox').value = "";

    ReadData();
  }

  add_data.addEventListener('click',AddStudents)

  // Read Data

  function ReadData(){
    const userRef = ref(db,'students/')

    get(userRef).then((snapshot)=>{
        // console.log(snapshot.val());
        const data = snapshot.val();
        const table = document.querySelector("table")
        let html = '';

        for (const key in data){
            const {name,email,rollnumber,admdate} = data[key];
            console.log(name)

            html += `
            
            <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${rollnumber}</td>
            <td>${admdate}</td>
            <td class='del' onclick="deleteData('${rollnumber}')"><button>Delete</button</td>
             <td class='up' onclick="updateData('${rollnumber}')"><button>Update</button</td>
            </tr>
            `
        }

        table.innerHTML =html
    })
  }

  ReadData()


  //Delete Data
  window.deleteData = function(rollnumber){
    const userRef = ref(db,`students/${rollnumber}`)
    remove(userRef)
    notification.innerText = "Data deleted successfully"
    ReadData()
  }

  //Update Data
  window.updateData = function(rollnumber){
    const userRef = ref(db,`students/${rollnumber}`)
    get(userRef).then((item)=>{
      // console.log(item.val())
      document.getElementById('namebox').value =item.val().name;
     document.getElementById('emailbox').value = item.val().email;
     document.getElementById('rollnumberbox').value = item.val().rollnumber;
     document.getElementById('admdatebox').value = item.val().admdate;
    })

    document.querySelector('.update_Data').classList.add('show')

    const update_btn = document.querySelector('#update_data')

    update_btn.addEventListener('click',()=>{
      const name = document.getElementById('namebox').value;
      const email = document.getElementById('emailbox').value;
      const rollnumber = document.getElementById('rollnumberbox').value;
      const admdate = document.getElementById('admdatebox').value;

      update(ref(db),{
        [`students/${rollnumber}/name`] : name,
        [`students/${rollnumber}/email`] : email,
        [`students/${rollnumber}/rollnumber`] : rollnumber,
        [`students/${rollnumber}/admdate`] : admdate,
    }).then(()=>{
              notification.innerText = "data Updated";
              
              document.querySelector('.update_Data').classList.remove('show')
              document.getElementById('namebox').value="";
              document.getElementById('emailbox').value="";
               document.getElementById('rollnumberbox').value="";
               document.getElementById('admdatebox').value="";
              ReadData()
      })
    })

  }