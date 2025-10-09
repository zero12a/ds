<!DOCTYPE html>
<html>
<head>
    <title>toastr</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

  <!--css-->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">

  <!--js-->
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
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
    toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-bottom-right';

    toastr.info('My name is Inigo Montoya. You killed my father, prepare to die!',null,{timeOut: 1000})

    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

    // Display a success toast, with a title
    toastr.success('Have fun storming the castle!', 'Miracle Max Says')

    // Display an error toast, with a title
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

}
</script>
</body>
</html>