function addUser()
{
    
    window.location="index2.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index2.html";
}