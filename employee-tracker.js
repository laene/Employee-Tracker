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
  
  // At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
  database.ref().on("value", function(snapshot) {

    if (snapshot.child("name").exists() && snapshot.child("role").exists() && snapshot.child("startDate").exists() && snapshot.child("monthlyRate").exists()) {
        name = snapshot.val().name;
        role = snapshot.val().role;
        startDate = snapshot.val().startDate;
        monthlyRate = parseInt(snapshot.val().monthlyRate);
    }

    // If Firebase does not have name, role, etc. values stored, they remain the same as the
    // values we set when we initialized the variables.
    // In either case, we want to log the values to console and display them on the page.
        console.log(name);
        console.log(role);
        console.log(startDate);
        console.log(monthlyRate);

        $("#inputName").text(name);
        $("#inputRole").text(role);
        $("#inputStartDate").text(startDate);
        $("#monthlyRate").text(monthlyRate);

    // If any errors are experienced, log them to console.    
    }, function(errorObject) {
        console.log(errorObject.code);
      });
    
    // Whenever a user clicks the submit button

    $("#submit").on("click", function(event) {
        event.preventDefault();
        // Get the input values
        var name = $("#inputnName").val().trim();
        var role = $("#inputRole").val().trim();
        var startDate = $("#inputStartDate").val().trim();
        var monthlyRate = parseInt($("#monthlyRate").val().trim());
        
        console.log(name);
        console.log(role);
        console.log(startDate);
        console.log(monthlyRate);
//tiny change
    });
    


