
<!DOCTYPE html> 
<head>
    <title>tinymce</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.4.1/tinymce.min.js"></script>
</head>
<body>
<textarea name="content" id="mce">안녕하슈</textarea>
</body>

<script>
tinymce.init({
	selector:'#mce',
	branding:false,
	menubar:false,
	height:500,
    content_css: '//www.tiny.cloud/css/codepen.min.css',
	plugins:'autolink image lists hr anchor wordcount codesample media table contextmenu code',
	toolbar:'undo redo | styleselect | bold italic underline strikethrough | bullist numlist outdent indent | link image media table code',
    images_upload_url: 'demo_tinymce_upload.php',


});

</script>
</html>
