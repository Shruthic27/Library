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

function btms() {
  window.location = "index.html";
}

// Retrieve Data from Databases

function getData() {
  console.log(firebase.database().ref("/"))
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    console.log(snapshot) 
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      console.log(childKey)
      bn = childKey;
      row= "<div id="+bn+" onclick=checkout(this.id)>"+bn+"</div> <hr>"
      document.getElementById("output").innerHTML+=row
    });
  });
}
getData();
// Allow to Check out books
function send(){
  firebase.database().ref("/"+room_name).push({
        name:user_name,
        message:book,n
  })
}