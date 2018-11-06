<script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
  
  var config = {
    apiKey: "AIzaSyC8OK3xGgMhRU1MJmyQWiX8fL9Zat2BzMU",
    authDomain: "employee-tracker-e1e46.firebaseapp.com",
    databaseURL: "https://employee-tracker-e1e46.firebaseio.com",
    projectId: "employee-tracker-e1e46",
    storageBucket: "",
    messagingSenderId: "285572405831"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var role = "";
  var startDate = "";
  var monthsWorked = 0;
  var monthlyRate = 0;
  var totalBilled = 0;

  database.ref().on("value", function(snapshot) {

    if (snapshot.child("name").exists() && snapshot.child("role").exists() && snapshot.child("startdate").exists() && snapshot.child("monthlyrate").exists()) {
        name = snapshot.val().name;
        role = snapshot.val().role;
        startDate = snapshot.val().startDate;
        monthlyRate = parseInt(snapshot.val().monthlyRate)

        console.log(name);
        console.log(role);
        console.log(startDate);
        console.log(monthlyRate);
       
