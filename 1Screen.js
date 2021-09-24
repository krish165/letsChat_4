function addUser()
{
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username);
    window.location="index3.html";
    window.alert="welcome to Let's chat"+" "+username;
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index2.html";
}