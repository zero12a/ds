<?php

?>

<!DOCTYPE html>
<html>
<head>
  <title>FilePond</title>

  <!-- Filepond stylesheet -->
  <link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
    <style>
        .filepond--credits{
            display:none;
        }
        .filepond--root{
            margin-bottom:0;
        }
    </style>
</head>
<body onload="init()">

  <!-- We'll transform this input into a pond -->
  abc
  <input type="file" class="filepond">
def
  <!-- Load FilePond library -->
  <script src="https://unpkg.com/filepond/dist/filepond.js"></script>

  <!-- Turn all file input elements into ponds -->
  <script>
    //FilePond.parse(document.body);

    function init(){

        // Get a reference to the file input element
        const inputElement = document.querySelector('input[type="file"]');

        // Create a FilePond instance
        const pond = FilePond.create(inputElement);

        path = "/";

        pond.setOptions({
            server : {
                url : "demo_upload_filepond_ok.php?PATH=" + path ,
                process:{
                    method: 'POST',
                    withCredentials: false,
                    headers: {},
                    timeout: 7000,
                    onload: function(res){
                        alog("onload");
                        alog(res);
                    },
                    onerror: function(res){
                        alert("onerror");
                    },
                    ondata: function(res){
                        alog("ondata");
                        alog(res);
                        return res;
                    },
                }
            }
        });

    }
    function alog(t){
        if(console)console.log(t);
    }
  </script>

</body>
</html>