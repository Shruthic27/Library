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

  function btms(){
    window.location="index.html";
    }
    function ls(){
    localStorage.setItem(n,"n")
    }

  // Retrieve Data from Databases

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       bn = childKey;
      document.getElementById("output").innerHTML
      });});}
getData();
  // Allow to Check out books
function checkout(){
  getData();
  ls();
}