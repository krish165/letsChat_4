
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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push(
        {
            Name:user_name,
            Message:msg,
            Likes:0
        }
    );
    document.getElementById("message").value="";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}