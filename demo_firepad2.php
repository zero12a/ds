

<html>

<head>
  <meta charset="utf-8" />
  <!-- Firebase -->
  <title>Firefad</title>
  <script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
  <!-- CodeMirror and its JavaScript mode file -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css" />

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

      //// Get Firebase Database reference.
      var firepadRef = getExampleRef();

      //// Create CodeMirror (with line numbers and the JavaScript mode).
      var codeMirror = CodeMirror(document.getElementById('firepad-container'), {
        lineNumbers: true,
        mode: 'javascript'
      });

      //codeMirror.foldCode(CodeMirror.Pos(11, 0));

      //// Create Firepad.
      var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
        defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
        ,userId: 'zero12a' //default: random
        ,userColoe: 'red' //default: generated from userId
      });

      firepad.on('ready',function(){
        alog("firepad ready");
      });
      firepad.on('synced',function(){
        alog("firepad synced"); //when successfully written to Firebase.
      });


      //firepad.getText()
      //firepad.setText(text)
      //firepad.getHtml()
      //firepad.setHtml(text)
    }

    // Helper to get hash from end of URL or generate a random one.
    function getExampleRef() {
      var ref = firebase.database().ref();
      var hash = window.location.hash.replace(/#/g, '');
      alog("hash = " + hash);
      if (hash) {
        ref = ref.child(hash);
      } else {
        ref = ref.push(); // generate unique location.
        window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
      }

      alog('Firebase data: ' + ref.toString());

      return ref;
    }

    function alog(tlog){
      if(console) console.log(tlog);
    }
  </script>
</body>
</html>