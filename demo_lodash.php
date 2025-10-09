<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?><html>
<head>
<title>lodash</title>
<script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>
<script>
    $(document).ready(function () {
        var array = ['a', 'b', 'c', 'd'];
        var evens = array.splice(2,1);
        console.log(array);
    });
</script>
<body>
</body>
</html>
