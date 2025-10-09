<!doctype html>
<meta charset=utf8>            
<title>CM6 demo</title>        
<link rel="stylesheet" href="https://unpkg.com/@datavis-tech/codemirror-6-prerelease@5.0.0/codemirror.next/legacy-modes/style/codemirror.css">
<script src="https://unpkg.com/@datavis-tech/codemirror-6-prerelease@5.0.0/dist/codemirror.js"></script>
<style>
.codemirror { height: 300px; overflow: auto; border: 1px solid silver} 
.codemirror-matching-bracket { background: red; }
.codemirror-nonmatching-bracket { background: green; }
</style>
    
<body>
  <h1>CM6</h1>
  <div id=editor></div>        
  <script>
    let {                       
      EditorState,                 
      EditorView,
      keymap,                      
      history,                     
      redo,
      redoSelection,               
      undo,
      undoSelection,
      lineNumbers,                 
      baseKeymap,
      indentSelection,             
      legacyMode,
      legacyModes: { javascript },
      matchBrackets,
      specialChars,
      multipleSelections           
    } = CodeMirror;

    let mode = legacyMode({mode: javascript({indentUnit: 2}, {})})

    let isMac = /Mac/.test(navigator.platform)
    let state = EditorState.create({doc: `"use strict";
const {readFile} = require("fs");

readFile("package.json", "utf8", (err, data) => {
  console.log(data);           
});`, extensions: [            
      lineNumbers(),               
      history(),                   
      specialChars(),              
      multipleSelections(),        
      mode,
      matchBrackets(),
      keymap({
        "Mod-z": undo,             
        "Mod-Shift-z": redo,       
        "Mod-u": view => undoSelection(view) || true, 
        [isMac ? "Mod-Shift-u" : "Alt-u"]: redoSelection,
        "Ctrl-y": isMac ? undefined : redo,
        "Shift-Tab": indentSelection    
      }),
      keymap(baseKeymap),
    ]})

    let view = new EditorView({state})
    document.querySelector("#editor").appendChild(view.dom)

  </script>
</body>
