function login(){
        user_name= document.getElementById("kwittername").value;
        localStorage.setItem("user_name", user_name);
        window.location= "kwitter_room.html";
}