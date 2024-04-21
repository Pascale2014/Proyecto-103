var firebaseConfig = {
    apiKey: "AIzaSyA6paSrhAIWKVO4Fgz7Z4gRF47t1qzqsBw",
    authDomain: "prueba-60a41.firebaseapp.com",
    databaseURL: "https://prueba-60a41-default-rtdb.firebaseio.com",
    projectId: "prueba-60a41",
    storageBucket: "prueba-60a41.appspot.com",
    messagingSenderId: "902694735346",
    appId: "1:902694735346:web:b58ca2b6d8c4061a472f6b"
  };
  
  firebase.initializeApp(firebaseConfig);
  
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }