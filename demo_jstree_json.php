<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jstree basic demos</title>
	<style>

	</style>
	<link rel="stylesheet" href="<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.12/themes/default/style.min.css" />
</head>
<body>

	<h1>AJAX demo</h1>
	<div id="ajax" class="demo"></div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.12/jstree.min.js"></script>
	
	<script>
	// ajax demo
	$('#ajax').jstree({
		'core' : {
			'data' : {
				"url" : "./demo_jstree.json",
				"dataType" : "json" // needed only if you do not supply JSON headers
			}
		}
	});

	</script>
</body>
</html>