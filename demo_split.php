<?php
//PGMID : USERMNGWIX
//PGMNM : 사용자관리WiX
header("Content-Type: text/html; charset=UTF-8"); //HTML

//설정 함수 읽기
//$CFG = require_once '../common/include/incConfig.php';

//default lib Autoload
//require_once($CFG["CFG_LIBS_VENDOR"]);

//LIBS
require_once('../common/include/incUtil.php');//CG UTIL
require_once('../common/include/incRequest.php');//CG REQUEST
require_once('../common/include/incDB.php');//CG DB
require_once('../common/include/incSec.php');//CG SEC
require_once('../common/include/incAuth.php');//CG AUTH
require_once('../common/include/incUser.php');//CG USER

//인증 게이트웨이
require_once('../common/include/incLoginOauthGateway.php');//CG USER
?><!doctype html>
<html>
<head>
<title>demo split</title>

<!--CSS/JS 불러오기-->
<!--JS 불러오기-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.0/split.min.js"></script>

<!--CSS 불러오기-->
<style> 
 html,
 body {
     height: 100%;
     padding: 0;
     margin: 0;
 }
 
 pre {
     font-size: 9pt;
 }
 body {
     background-color: #F6F6F6;
     box-sizing: border-box;
 }
 
 .split {
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
     overflow-y: auto;
     overflow-x: hidden;
 }
 
 .gutter {
     background-color: transparent;
     background-repeat: no-repeat;
     background-position: 50%;
 }
 
 .gutter.gutter-horizontal {
     cursor: col-resize;
     background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
}
 
 .gutter.gutter-vertical {
     cursor: row-resize;
     background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
}
 
 .split.split-horizontal,
 .gutter.gutter-horizontal {
     height: 100%;
     float: left;
 }

</style>

</head>
<body>


	<!--
	#####################################################
	## 컨디션 조건1 - START G.GRPID : C1-
	#####################################################
	-->
    <div id="c" class="split content" style="background-color:yellow;">
<pre>2A - split 1
 - vertical
 - size array

3B - split 1
 - vertical
 - size array

3C - split 2
 split [0]
  - vertical
  - size array
 split [1] - 상위객체1번의 하위
  - horizontal
  - size array
</div>
    <div id="d" class="split content">    
        <div class="split split-horizontal" style="background-color:red;" id="divOne">
<pre>4D - split 1
 - vertical
 - size array

4E - split 2
 split [0]
  - vertical
  - size array
 split [1]
  - horizontal
  - size array

4F - split 2
 split [0]
  - vertical
  - size array
 split [1] - 상위객체1번의 하위
  - horizontal
  - size array 

4G - split 2
 split [0]
  - vertical
  - size array
 split [1] - 상위객체2번의 하위
  - horizontal
  - size array </div>
        <div class="split split-horizontal" style="background-color:green;" id="divTwo">
<pre>4H - split 3
 split [0]
  - vertical
  - size array
 split [1] - 상위객체1번의 하위
  - horizontal
  - size array 
 split [2] - 상위객체0번의 하위
  - vertical
  - size array 

4I - split 3
 split [0]
  - vertical
  - size array
 split [1] - 상위객체1번의 하위
  - horizontal
  - size array 
 split [2] - 상위객체1번의 하위
  - vertical
  - size array 

        </div>
        <div class="split split-horizontal" style="background-color:green;" id="divThree">
        3
        </div>
    </div>

<script>
Split(['#c', '#d'], {
    direction: 'vertical',
    sizes: [37, 63],
    gutterSize: 8,
    cursor: 'row-resize'
});

Split(['#divOne', '#divTwo', '#divThree'],{
        gutterSize: 8,
        cursor: 'col-resize',
        onDragEnd: function(sizes) {
		    alert(JSON.stringify(sizes));
        }
    });
</script>
</body>
</html>
