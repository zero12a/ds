<!DOCTYPE html>
<html>
<head>
    <title>izitoast</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

  <!--css-->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/css/iziToast.min.css" rel="stylesheet">

  <!--js-->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js"></script>
<style>
.customCss {
    width: 500px;
    background-color: red;
 }
</style>

<body onload="bodyInit()">
111

<script>
function bodyInit(){
    iziToast.show({
        message: 'What would you like to add?12222222222'
        //, backgroundColor: 'silver'
        , theme: 'dark' // dark
        , timeout: 2000
    });

    iziToast.show({
        title: 'Hey'
        , class: 'customCss'
        , theme: 'light' // dark
        , message: 'What would you like to add?2'
        //, backgroundColor: 'silver'
        , timeout: 2000
        , position: 'bottomRight'
        , maxWidth: 300
    });    
}
</script>
</body>
</html>