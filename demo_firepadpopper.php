<!doctype html>
<!-- See http://www.firepad.io/docs/ for detailed embedding docs. -->
<html>
<head>
  <meta charset="utf-8" />
  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
  <!-- CodeMirror and its JavaScript mode file -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/javascript/javascript.js"></script>
  <link rel="stylesheet" href="./lib/codemirror.css?<?=rand(1000000,9999999);?>" />

  <!-- Firepad -->
  <link rel="stylesheet" href="https://firepad.io/releases/v1.5.10/firepad.css" />
  <script src="./lib/firepadpopper.js?<?=rand(1000000,9999999);?>"></script>

  <script src="https://unpkg.com/@popperjs/core@2"></script>


  <style>
    html { height: 100%; }
    body { margin: 0; height: 100%; position: relative; }
    /* Height / width / positioning can be customized for your use case.
       For demo purposes, we make firepad fill the entire browser. */
    #firepad-container {
      width: 400px;
      height: 300px;
    }

    .tooltip {
        color: white;
        font-weight: bold;
        padding: 4px 8px;
        font-size: 13px;
        border-radius: 4px;
        z-index: 100;
      }
    
    /* popover 표현하기 위함 */
    .CodeMirror pre {
      z-index: 0; 
    }


  </style>
</head>

<body onload="init()">
1<BR>
1<BR>
1<BR>
1<BR>

  <div id="firepad-container"></div>

  <script>
    function init() {
      //// Initialize Firebase.
      alog("init().............................start");
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

      //// Create Firepad.
      var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
        defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
      });




    }

    // Helper to get hash from end of URL or generate a random one.
    function getExampleRef() {
      var ref = firebase.database().ref();
      var hash = window.location.hash.replace(/#/g, '');
      if (hash) {
        ref = ref.child(hash);
      } else {
        ref = ref.push(); // generate unique location.
        window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
      }
      if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
      }
      return ref;
    }
    

    function alog(tmp){
      if(console)console.log(tmp);
    }
  </script>
</body>
</html>