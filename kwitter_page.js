//YOUR FIREBASE LINKS
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
    roomname= localStorage.getItem("roomname");

    function send(){
          message= document.getElementById("message").value;
          firebase.database().ref(roomname).push({
                name:user_name,
                message:message,
                like:0
                      });

    }

    function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         username= message_data['name']; 
         message= message_data['message'];
         like= message_data['like'];
         name_tag= "<h4>" + username + "<img class= 'user_tick' src= 'tick.png'></h4>";
         message_tag= "<h4>" + message + "</h4>";
         like_button= "<button class= 'btn btn-warning' id="+ firebase_message_id+" value= "+like+" onclick= 'updateLikes(this.id)'>";
         span_tag= "<span class= 'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
         row= name_tag + message_tag + like_button + span_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLikes(message_id){
      button_id= message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes) + 1;
      firebase.database().ref(roomname).child(message_id).update({
            like: updated_likes
      });
}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}
