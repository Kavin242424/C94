var firebaseConfig = {
    apiKey: "AIzaSyDaqJLSGAnxtwDhKskjeNze67QrwQ0b1B0",
    authDomain: "kwitter-ce1a2.firebaseapp.com",
    databaseURL: "https://kwitter-ce1a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-ce1a2",
    storageBucket: "kwitter-ce1a2.appspot.com",
    messagingSenderId: "62828994520",
    appId: "1:62828994520:web:38b9acd8b911cc36955cad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}