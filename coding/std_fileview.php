<html>
    <head>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

    <style>
    ul {
        list-style-type: none;
        margin-left: 0px ;
        padding: 0px;
    }

    ul > li > ul, ul > li > ul > li > ul {
        padding: 0px 0px 0px 24px; 
    }

    ul .ui-selecting { background: #FECA40; }
    ul .ui-selected { background: #F39814; color: white; }

    
    /* mouse over */
    .optionsecoptions {
        background: #eceded;
        cursor: pointer;
    }
    .optionsecoptions:hover { background-color: #bfe5ff; }  
    .optionsecoptions:active { background-color: #2d546f; color: #ffffff; }

    .selected { background-color: #226fa3; color: #ffffff; }
    .selected:hover { background-color: #4d99cc; }
    </style>
    <script>
        function init(){
            reload();

            //$("#fileRoot").selectable();//선택가능하게 처리
        }


        function rename(){
            alog("rename().....................start");


            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            var type; //folder, file
            var CMD;
            var nm;
            alog(11);
            if(selectDiv == null){
                alert("이름을 변결할 파일이나 폴더를 선택해 주세요.");
                return;
            }

            //기존 경로
            path = $(selectDiv).attr("path");

            //기존 이름
            nm = $(selectDiv).text();

            //기존 타입
            type = $(selectDiv).attr("type");

            //li태그를 편지모드로 변경
            liObj = $(selectDiv).parent()[0];

            if(type == "folder"){
                $(selectDiv).replaceWith("<div class='optionsecoptions'><i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:11px;'></i><input type='text' onkeyup='renameFolderEnd(event,this,\"" + path + "\");' oldvalue='" + nm + "' value='" + nm + "' style='width: calc(100% - 40px);'></div>");

                //liObj.innerHTML = ;
            }else{
                liObj.innerHTML = "<i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i><input type='text' onkeyup='renameFileEnd(event,this,\"" + path + "\");' oldvalue='" + nm + "' value='" + nm + "' style='width: calc(100% - 40px);'>";
            }

        }

        function renameFileEnd(e,t,path){
            alog("renameFileEnd().....................start");

            if(e.keyCode != 13)return;

            //alert("enter");
            $.ajax({
                url: "sbfilemng/sbfilemng.php?CMD=rename&PATH=" + path,
                dataType: "json",
                data: { "FILENM" : $(t).val() , "OLDFILENM" : $(t).attr("oldvalue")},
                privatePath: path,
                privateNm: $(t).val(),
                privateInput: t
            })
            .done(function( data ) {
                if(data.RTN_CD == "200"){
                    //input오브젝트를 text를 변경하기
                    //alog($(t).parent()[0]);
                    alog(data.RTN_MSG);
                    //$(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);

                    //LI 오브젝트를 삭제해야 함.
                    alog($(this.privateInput).parent());
                    //$(this.privateSelectDiv).parent()[0].remove();

                    $(this.privateInput).parent()[0].innerHTML = mkFileTag(false, this.privatePath, this.privateNm);

                }else{
                    alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

        }

        function renameFolderEnd(e,t,path){
            alog("renameFolderEnd().....................start");

            if(e.keyCode != 13)return;

            //alert("enter");
            $.ajax({
                url: "sbfilemng/sbfilemng.php?CMD=mvdir&PATH=" + path,
                dataType: "json",
                data: { "FILENM" : $(t).val() , "OLDFILENM" : $(t).attr("oldvalue")},
                privatePath: path,
                privateNm: $(t).val(),
                privateInput: t
            })
            .done(function( data ) {
                if(data.RTN_CD == "200"){
                    //input오브젝트를 text를 변경하기
                    //alog($(t).parent()[0]);
                    alog(data.RTN_MSG);
                    //$(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);

                    //LI 오브젝트를 삭제해야 함.
                    alog($(this.privateInput).parent());
                    //$(this.privateSelectDiv).parent()[0].remove();

                    //하위 객체가 영향을 받기 때문에 div객체만 교체 필요
                    divObj = $(this.privateInput).parent()[0];
                    $(divObj).replaceWith(mkFoldTag(false, this.privatePath, this.privateNm));

                }else{
                    alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

        }

        function remove(){
            alog("remove().....................start");
            //선택한 폴더가 있으면 그 하위 디렉토리에 addInput 추가
            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            var type; //folder, file
            var CMD;
            var nm;
            alog(11);
            if(selectDiv == null){
                alert("삭제할 파일이나 폴더를 선택해 주세요.");
                return;
            }else if(!confirm("정말로 삭제하시겠습니까?")){
                return;
            }

            path = $(selectDiv).attr("path"); //쌍따움표 붙어서 넘어옴
            //path = path.substring(1,path.length-1);
            //alert(path);
            
            type = $(selectDiv).attr("type"); //쌍따움표 붙어서 넘어옴
            nm = $(selectDiv).text();
            //alert(nm);
            //return;
            if(type == "folder"){
                CMD = "rmdir";
            }else{
                CMD = "delete";
            }

            //alert("enter");
            $.ajax({
                url: "sbfilemng/sbfilemng.php?CMD=" + CMD + "&PATH=" + path,
                dataType: "json",
                data: { "FILENM" : nm },
                privatePath: path,
                privateFileNm: nm,
                privateSelectDiv: selectDiv
            })
            .done(function( data ) {
                if(data.RTN_CD == "200"){
                    //input오브젝트를 text를 변경하기
                    //alog($(t).parent()[0]);
                    alog(data.RTN_MSG);
                    //$(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);

                    //LI 오브젝트를 삭제해야 함.
                    alog($(this.privateSelectDiv).parent());
                    $(this.privateSelectDiv).parent()[0].remove();
                }else{
                    alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });


        }
        function addFolder(){
            alog("addFolder().....................start");
            //선택한 폴더가 있으면 그 하위 디렉토리에 addInput 추가
            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            alog(11);
            if(selectDiv != null){
                if($(selectDiv).attr("type") == "folder"){
                    path = $(selectDiv).attr("path") + $(selectDiv).text(); //쌍따움표 붙어서 넘어옴

                    alog($(selectDiv).parent().children("ul"));
                    ul = $($(selectDiv).parent().children("ul")[0]);

                }else{
                    path = $(selectDiv).attr("path") + $(selectDiv).text(); //쌍따움표 붙어서 넘어옴

                    alog($(selectDiv).parent().parent());
                    ul = $($(selectDiv).parent().parent()[0]);
                }
            }else{
                ul = $("#fileRoot");
                path = "/";
            }
            alog(path);

            //선택한 폴더가 없으면 root ul맨하단에 li를 추가
            ul.append("<li> <i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:11px;'></i><input type='text' onkeyup='addFolderEnd(event,this,\"" + path + "\");' id='addFileNm' value='' style='width:calc(100% - 40px);'></li>");        
            alog(22);
        }

        function addFolderEnd(e, t, path){
            alog("addFolderEnd()______________________start");
            if(e.keyCode == 13){
                //alert("enter");
                $.ajax({
                    url: "sbfilemng/sbfilemng.php?CMD=mkdir&PATH=" + path,
                    dataType: "json",
                    data: { "FILENM" : $(t).val() },
                    privatePath: path,
                    privateFileNm: $(t).val() 
                })
                .done(function( data ) {
                    if(data.RTN_CD == "200"){
                        //input오브젝트를 text를 변경하기
                        alog($(t).parent()[0]);
                        $(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);
                    }else{
                        alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                    }
                    //alert(data);

                    //성공하면 해당 오브젝트 div로 변경하기
                })
                .fail(function(xhr, status, errorThrown) { 
                    alert(errorThrown);
                });
            }
        }


        function addFile(){
            alog("addFile().....................start");
            //선택한 폴더가 있으면 그 하위 디렉토리에 addInput 추가
            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            alog(11);
            if(selectDiv != null){
                if($(selectDiv).attr("type") == "folder"){
                    path = $(selectDiv).attr("path") + $(selectDiv).text();
                    
                    alog($(selectDiv).parent().children("ul"));
                    ul = $($(selectDiv).parent().children("ul")[0]);

                }else{
                    path = $(selectDiv).attr("path");

                    alog($(selectDiv).parent().parent());
                    ul = $($(selectDiv).parent().parent()[0]);
                }

            }else{
                ul = $("#fileRoot");
                path = "/";
            }
            alog(path);

            //선택한 폴더가 없으면 root ul맨하단에 li를 추가
            ul.append("<li> <i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i><input type='text' onkeyup='addFileEnd(event,this,\"" + path + "\");' id='addFileNm' value='' style='width: calc(100% - 40px);'></li>");        
            alog(22);

        }

        function addFileEnd(e, t, path){
            alog("addFileEnd()______________________start");
            if(e.keyCode == 13){
                //alert("enter");
                $.ajax({
                    url: "sbfilemng/sbfilemng.php?CMD=create&PATH=" + path,
                    dataType: "json",
                    data: { "FILENM" : $(t).val() },
                    privatePath: path,
                    privateFileNm: $(t).val() 
                })
                .done(function( data ) {
                    alog("addFileEnd()______________________done");
                    if(data.RTN_CD == "200"){
                        //input오브젝트를 text를 변경하기
                        alog($(t).parent()[0]);
                        $(t).parent()[0].innerHTML = mkFileTag(false, this.privatePath, this.privateFileNm);

                    }else{
                        alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                    }


                    //성공하면 해당 오브젝트 div로 변경하기
                })
                .fail(function(xhr, status, errorThrown) { 
                    alert(errorThrown);
                });
            }
        }

        function reload(e,t){
            $.ajax({
                url: "sbfilemng/sbfilemng.php?CMD=list&PATH=/",
                dataType: "json",
                privitePath: "/"
            })
            .done(function( data ) {
                alog(data);
                //alert(data);
                ul = $("#fileRoot");
                ul.empty();//비우기
                for(i=0;i<data.length;i++){
                    //var li=document.createElement('li');
                    if(data[i].dir == "Y"){
                        ul.append(mkFoldTag(true, this.privitePath, data[i].nm)); //ul_list안쪽에 li추가
                        //li.innerHtml = mkFoldTag(this.privitePath, data[i].nm);
                    }else{
                        ul.append(mkFileTag(true, this.privitePath, data[i].nm));
                        //li.innerHtml = mkFileTag(this.privitePath, data[i].nm);
                    }
                    //ul.appendChild(li);

                    //선택 이벤트 생성하기
                    //makeSelectEvent();
                }

            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });
        }

        function mkFoldTag(isLiTag, path,nm){
            //alog("mkFoldTag()__________________________________start");
            //alog("  끝이 뭐냐 : = " + path.slice(-1));
            if(path.slice(-1,1) != "/")path = path + "/";
            //alog("  변환함 = " + path);

            var sTag = "";
            var eTag = "";
            if(isLiTag){
                sTag = "<li>";
                eTag = "</li>";
            }

            return sTag + "<div onclick='viewChildList(event, \"" + path + nm + "\" ,this);' type='folder' path='" + path + "' class='optionsecoptions' ><i class='fa-solid fa-caret-right'></i><i class='fa-solid fa-folder' style='color:#D7C908;margin:0px 10px 0px 4px;'></i>" + nm + "</div>" + eTag;                    
        }
        function mkFileTag(isLiTag,path,nm){
            if(path.slice(-1,1) != "/")path = path + "/";
            
            var sTag = "";
            var eTag = "";
            if(isLiTag){
                sTag = "<li>";
                eTag = "</li>";
            }

            return sTag + "<div onclick='viewFile(event, this, \"" + path + "\", \"" + nm + "\");' type='file' path='" + path + "' class='optionsecoptions'><i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i>" + nm + "</div>" + eTag;
        }

        function viewFile(e, divObj, path, file){
            //중북 클릭 이벤트방지
            var evt = e ? e:window.event;
            if (evt.stopPropagation)    evt.stopPropagation();
            if (evt.cancelBubble!=null) evt.cancelBubble = true;

            alog("viewFile() " + path + file);
            
            $.ajax({
                url: "sbfilemng/sbfilemng.php?CMD=getcode&PATH=" + path + "&FILENM=" + file,
                dataType: "json",
                privitePath: path,
                privateDivObj: divObj
            })
            .done(function( data ) {
                alog(data);
            });

            liObj  = $(divObj).parent()[0];

            if (liObj.hasChildNodes()){
                //alog(111);
                // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
                var isHaveChild = false;
                var children = liObj.childNodes;
                for (var i = 0; i < children.length; i++){
                    // children[i]로 각 자식에 무언가를 함
                    // 주의: 목록은 유효해(live), 자식 추가나 제거는 목록을 바꿈
                    alog(i + "---------------");
                    alog(children[i])
                    if(children[i].nodeName == "DIV") {
                        selectControl(children[i]);
                    }
                }
            }

        }





        function selectControl(divObj){
            //기존에 선택된거 있으면 선택해제 하기
            var oldSelectDiv = document.querySelector(".selected");

            if(oldSelectDiv && oldSelectDiv !== divObj){
                $(oldSelectDiv).removeClass("selected");
            }

            //caret-right 아이콘 회전
            if(!$(divObj).hasClass("selected")){
                $(divObj).addClass("selected");
            }
        }

        function viewChildList(e, path, divObj){
            alog("viewChildList()................start");
            //중북 클릭 이벤트방지
            var evt = e ? e:window.event;
            if (evt.stopPropagation)    evt.stopPropagation();
            if (evt.cancelBubble!=null) evt.cancelBubble = true;
        

            var liObj = $(divObj).parent()[0];

            //liObj.children().remove();
            alog(liObj);

            //caret-right 아이콘 회전
            //if($(iObj).hasClass("fa-rotate-90")){
            //    $(iObj).removeClass("fa-rotate-90");
            //} 

            if (divObj.hasChildNodes()){
                // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
                var isHaveChild = false;
                var children = divObj.childNodes;
                for (var i = 0; i < children.length; i++){
                    // node가 i이고 "fa-caret-right" "fa-rotate-90" class가 있으면 "fa-rotate-90"을 제거
                    if(children[i].nodeName == "I"  && $(children[i]).hasClass("fa-caret-right")){
                        if( $(children[i]).hasClass("fa-rotate-90") ){
                            $(children[i]).removeClass("fa-rotate-90");
                        }else{
                            $(children[i]).addClass("fa-rotate-90");
                        }
                    }
                }
            }


            if (liObj.hasChildNodes()){
                // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
                var isHaveChild = false;
                var children = liObj.childNodes;
                for (var i = 0; i < children.length; i++){

                    // children[i]로 각 자식에 무언가를 함
                    // 주의: 목록은 유효해(live), 자식 추가나 제거는 목록을 바꿈
                    alog(i + "---------------");
                    alog(children[i])
                    if(children[i].nodeName == "UL") {
                        alog("차일드 UL이 있음");
                        children[i].remove();
                        return;
                    }

                    if(children[i].nodeName == "DIV") {
                        alog("차일드 DIV가 있음");
                        selectControl(children[i]);
                    }

                }
            }




            $.ajax({
                url: "sbfilemng/sbfilemng.php?CMD=list&PATH=" + path,
                dataType: "json",
                privitePath: path,
                privateLiObj: liObj
            })
            .done(function( data ) {
                alog(data);
                //alert(data);
                //ul을 먼저 추가
                //var ul=document.createElement('ul');
                var ul = $("<ul></ul>");
                for(i=0;i<data.length;i++){
                    //var li=document.createElement('li');

                    if(data[i].dir == "Y"){
                        //li.innerHTML = mkFoldTag(this.privitePath, data[i].nm);
                        ul.append(mkFoldTag(true, this.privitePath, data[i].nm));
                    }else{
                        //li.innerHTML = mkFileTag(this.privitePath, data[i].nm);
                        ul.append( mkFileTag(true, this.privitePath, data[i].nm));
                    }
                    //ul.appendChild(li);
                }
                //this.privateLiObj.appendChild(ul);
                alog(ul);
                //this.privateLiObj.append(ul[0].innerHTML);
                $(this.privateLiObj).append(ul);

            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });
        }
        
        function alog(t){
            if(console)console.log(t);
        }
    </script>
    </head>
<body onload="init();">
file viewer
<i class='fa-solid fa-arrow-rotate-right' onclick='reload(event,this);'></i>
<i class='fa-solid fa-file-circle-plus' onclick='addFile(event,this);'></i> 
<i class='fa-solid fa-folder-plus' onclick='addFolder(event,this);'></i> 
<i class='fa-solid fa-trash-can' onclick='remove(event,this);'></i> 
<i class='fa-solid fa-file-pen' onclick='rename(event,this);'></i> 

<ul id="fileRoot"></ul>
</body>
</html>