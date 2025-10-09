<html>
<head>

<title>simplebar.js</title>



<script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.0/simplebar.min.js" integrity="sha512-AS9rZZDdb+y4W2lcmkNGwf4swm6607XJYpNST1mkNBUfBBka8btA6mgRmhoFQ9Umy8Nj/fg5444+SglLHbowuA==" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.0/simplebar.css" integrity="sha512-0EGld845fSKUDzrxFGdF//lic4e8si6FTrlLpOlts8P0ryaV8XkWy/AnwH9yk0G1wHcOvhY9L14W5LCMWa7W+Q==" crossorigin="anonymous" />


<style>
#simple-bar {
	border: 1px solid grey;
	width: 50%;
	max-height: 200px;
	min-height: 100px;
	margin: 50px auto;
}
</style>
</head>
<body>

<div id="simple-bar">
<h3 class="sticky">Sticky header</h3>

	<h2>Scroll me!</h2>
	<p>Some more content</p>
	<p class="odd">Some content1</p>
	<p>Some more content</p>
	<p class="even">Some content2</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Scroll me!</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Scroll me!</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	<p class="odd">Some content</p>
	<p>Some more content</p>
	hey!
</div>

</body>
<script>
var myElement = document.getElementById('simple-bar');
new SimpleBar(myElement, { autoHide: true });
</script>
</html>