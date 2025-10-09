

<html>

<head>
  <meta charset="utf-8" />
  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase.js"></script>
  <!-- CodeMirror and its JavaScript mode file -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.10.0/codemirror.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.10.0/mode/javascript/javascript.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.css" />

  <!-- Firepad -->
  <link rel="stylesheet" href="https://firepad.io/releases/v1.5.10/firepad.css" />
  <script src="./lib/firepad.js"></script>

  <style>
    html { height: 100%; }
    body { margin: 0; height: 100%; position: relative; }
    /* Height / width / positioning can be customized for your use case.
       For demo purposes, we make firepad fill the entire browser. */
    #firepad-container {
      width: 100%;
      height: 100%;
    }
    .powered-by-firepad{
      display: none;
    }
  </style>
</head>

<body onload="init()">
  <div id="firepad-container"></div>
    <input type="button" onclick="" value="get">
  <script>
    function init() {
      //// Initialize Firebase.
      //// TODO: replace with your Firebase project configuration.
        var config = {
                apiKey: "AIzaSyASCqU2V2DN_wdYYMXw0CGuNOGafIFZCPc",
                authDomain: "firepad-54e91.firebaseapp.com",
                databaseURL: "https://firepad-54e91-default-rtdb.firebaseio.com"
            };

        firebase.initializeApp(config);

        var refUsers = firebase.database().ref("-Mz3Q1vYGULPzmu8-DvN/users");
        var refCheckpoint = firebase.database().ref("-Mz3Q1vYGULPzmu8-DvN/checkpoint");
        var refHistory = firebase.database().ref("-Mz3Q1vYGULPzmu8-DvN/history");

        refUsers.on('value', (snapshot) => {
            console.log("users : ");
            //console.log(snapshot.val());

            tmpkeys = Object.keys(snapshot.val());
            for(i=0;i<tmpkeys.length;i++){
                console.log( "\t [" + i + "] " + tmpkeys[i] + " = " + snapshot.val()[tmpkeys[i]].color );
            }

        });
        refCheckpoint.on('value', (snapshot) => {
            console.log("checkpoint : ");
            console.log("\t 작성자 = " + snapshot.val().a);
            console.log("\t id = " + snapshot.val().id);
            console.log("\t 최종글 = " + snapshot.val().o[0]);
        });
        refHistory.on('value', (snapshot) => {
            console.log("History : ");
            console.log(snapshot.val());
        });
     
        
    }

  </script>
</body>
</html>