
//ADD YOUR FIREBASE LINKS HERE//
var firebaseConfig = {
      apiKey: "AIzaSyCvCLLC-NHtWN0HWOzuiCT1Vqjh8qtjHO0",
      authDomain: "vscchat-42ce3.firebaseapp.com",
      databaseURL: "https://vscchat-42ce3-default-rtdb.firebaseio.com",
      projectId: "vscchat-42ce3",
      storageBucket: "vscchat-42ce3.appspot.com",
      messagingSenderId: "472558086633",
      appId: "1:472558086633:web:a73b5d917586140bf2c378",
      measurementId: "G-8HZQY5RFKK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");

    document.getElementById("Welcome").innerHTML= "Welcome " + user_name + "!";

    function addRoom(){
          roomname= document.getElementById("roomname").value;
          firebase.database().ref("/").child(roomname).update({
                purpose: "creating room name"
          });
      localStorage.setItem("roomname", roomname);
      window.location= "kwitter_page.html";
      
      
      }
function getData() {    
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row= "<div class= 'room_name' id= "+Room_names+" onclick= 'Gotoroomname(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });
});

}
getData();

function Gotoroomname(name){
      localStorage.setItem("roomname", name);
      window.location= "kwitter_page.html";

}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}