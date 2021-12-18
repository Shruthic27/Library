
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