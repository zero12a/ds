<script>
  var te_json = document.getElementById("G3-LOG");


  window.editor_json = CodeMirror.fromTextArea(te_json, {
    //mode: {name: "javascript", json: true},
	mode: "application/ld+json",
	lineNumbers: true,
    lineWrapping: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    foldOptions: {
      widget: (from, to) => {
        var count = undefined;

        // Get open / close token
        var startToken = '{', endToken = '}';        
        var prevLine = window.editor_json.getLine(from.line);
        if (prevLine.lastIndexOf('[') > prevLine.lastIndexOf('{')) {
          startToken = '[', endToken = ']';
        }

        // Get json content
        var internal = window.editor_json.getRange(from, to);
        var toParse = startToken + internal + endToken;

        // Get key count
        try {
          var parsed = JSON.parse(toParse);
          count = Object.keys(parsed).length;
        } catch(e) { }        

        return count ? `\u21A4${count}\u21A6` : '\u2194';
      }
    }
  });

//editor_json.foldCode(CodeMirror.Pos(0, 0));
 // editor_json.foldCode(CodeMirror.Pos(5, 0));

  
  alog(111);
  </script>