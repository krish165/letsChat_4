function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index2.html";
}
document.getElementById("user_name").innerHTML="Welcome to Let's chat"+" "+localStorage.getItem("user_name")+" !";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBNSPJiWGNnnaa-OK720vcKbeUHWTwFEI0",
    authDomain: "let-s-chat-ae669.firebaseapp.com",
    databaseURL: "https://let-s-chat-ae669-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ae669",
    storageBucket: "let-s-chat-ae669.appspot.com",
    messagingSenderId: "986288149046",
    appId: "1:986288149046:web:5a3e645365a94334c0be97"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name",room_name);
    window.location="index4.html";
  }


  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Name of room : "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#" +Room_names +"</div><hr>";
  document.getElementById("output").innerHTML=row;
  //End code
  });});}
  getData();

  function redirectToRoomname(name)
  {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="index4.html"; 
  }

