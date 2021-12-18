const firebaseConfig = {
  apiKey: "AIzaSyCgai8-6RxroRXBlTY6nAU94gVhkpZn4wc",
  authDomain: "library-dc7df.firebaseapp.com",
  databaseURL: "https://library-dc7df-default-rtdb.firebaseio.com",
  projectId: "library-dc7df",
  storageBucket: "library-dc7df.appspot.com",
  messagingSenderId: "602432438522",
  appId: "1:602432438522:web:d0132d2c5a5750dff30943",
  measurementId: "G-E6CXKYG34T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var p = ":"
var up = ""
function ot12() {
  window.location = "index2.html";
}


function li() {
  up = document.getElementById("up").value
  if (up == p) {
    window.location = "index3.html";
  }
}

function lo() {
  document.getElementById("n").value = ""
  document.getElementById("book").value = ""

}

function ls() {
  localStorage.setItem("Name", n)
  localStorage.setItem("Book Name", book)
}

function checkout() {
  n = document.getElementById("n").value
  book = document.getElementById("book").value
  ls();
  
  firebase.database().ref("/").child(n).update({
    purpose:"adding name to data"
    ,childKey:book
  })
}