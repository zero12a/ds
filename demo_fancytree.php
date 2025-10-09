<html>
<head>

<title>fancytree</title>

<style>
    li {}
    ul.fancytree-container {
		height: 200px;
		overflow: auto;
		position: relative;
	}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.fancytree/2.38.0/skin-lion/ui.fancytree.min.css" integrity="sha512-Al3uTXXxjt/LyBlLuiAt/YgHPxuRbTiTBZ57DC8vMtUE+Wkf8qLlEmEbJXNsgCPMDC4OqmvA4/stle1kEEimTA==" crossorigin="anonymous" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/jquery.fancytree@2.38.0/dist/jquery.fancytree.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.fancytree@2.38.0/dist/jquery.fancytree-all-deps.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.fancytree@2.38.0/dist/modules/jquery.fancytree.edit.js"></script>


<script type="text/javascript">
function alog(t){
    if(console)console.log(t);
}

    var objTree = null; //이거로는 접근 안됨.
    var selectedNode = null;

    function getSelectedNodes(){
        //alog(objTree);
        t = $('#tree2').fancytree('getTree').getSelectedNodes();
        alog(t);
        keys = "";
        titles = "";
        for(i=0;i<t.length;i++){
            if(keys.length > 0)keys = keys + ", "
            keys = keys + t[i].key;

            if(titles.length > 0)titles = titles + ", "
            titles = titles + t[i].title;
        }
        alog(keys);
        alog(titles);
        $("#selectedNodes2").text(keys);
        $("#selectedNodes3").text(titles);
    }

    
  $(function(){
    $("#btnAdd").click(function(){
      var node = $('#tree2').fancytree('getTree').getActiveNode();


      $('#tree2').fancytree('getTree').applyCommand("addchild",node);
    });

    $("#btnGetselectedNodes").click(function(){
        getSelectedNodes()
    });

    $("#btnGetCount").click(function(){
        //t = $('#tree2').fancytree('getTree').count();
        t = $.ui.fancytree.getTree("#tree2").count();

        alert(t);
    });

    // Load tree from Ajax JSON
    objTree = $("#tree2").fancytree({
      extensions: ["edit"],
      selectMode: 3, // 1:single, 2:multi, 3:multi-hier
      icon: true,
      checkbox: false,
      source: {
        url: "demo_fancytree.json"
      },
      lazyLoad: function(event, data){
        data.result = $.ajax({
          url: "demo_fancytree.json",
          dataType: "json"
        });
      },
      select: function(event, data) {
        alog("current state=" + data.node.isSelected());
        var s = data.tree.getSelectedNodes().join(", ");
        $("#selectedNodes").text(s);
      },
      activate: function(event, data) {
            alog("activate()................................start()");
            var node = data.node;
            selectedNode = node;
            // acces node attributes
            $("#activeNode").text("key = " + node.key + ", title = " + node.title);
      },
      edit: {
        triggerStart: ["clickActive", "dblclick", "f2", "mac+enter", "shift+click"],
        beforeEdit: function(event, data){
            // Return false to prevent edit mode
        },
        edit: function(event, data){
            // Editor was opened (available as data.input)
        },
        beforeClose: function(event, data){
            // Return false to prevent cancel/save (data.input is available)
            console.log(event.type, event, data);
            if( data.originalEvent.type === "mousedown" ) {
            // We could prevent the mouse click from generating a blur event
            // (which would then again close the editor) and return `false` to keep
            // the editor open:
    //                  data.originalEvent.preventDefault();
    //                  return false;
            // Or go on with closing the editor, but discard any changes:
    //                  data.save = false;
            }
        },
        save: function(event, data){
            // Save data.input.val() or return false to keep editor open
            console.log("save...", this, data);
            // Simulate to start a slow ajax request...
            setTimeout(function(){
            $(data.node.span).removeClass("pending");
            // Let's pretend the server returned a slightly modified
            // title:
            data.node.setTitle(data.node.title + "!");
            }, 2000);
            // We return true, so ext-edit will set the current user input
            // as title
            return true;
        },
        close: function(event, data){
            // Editor was removed
            if( data.save ) {
            // Since we started an async request, mark the node as preliminary
            $(data.node.span).addClass("pending");
            }
        }
     }
     
    });


  });
  </script>


</head>
<body>
    1
<div id="tree2" data-source="ajax" class="sampletree" ></div><BR>
activeNode=<div id="activeNode"></div><BR>
selectedNodes=<div id="selectedNodes"></div><BR>
selectedNodes2(keys)=<div id="selectedNodes2"></div><BR>
selectedNodes3(titles)=<div id="selectedNodes3"></div><BR>
<input type=button id="btnGetselectedNodes" value="Get selected nodes">
<input type=button id="btnGetCount" value="Get count nodes">
<input type=button id="btnAdd" value="Add child">
2

</body>
</html>