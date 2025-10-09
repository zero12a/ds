

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

            seq =  $(selectDiv).attr("seq");

            //기존 이름
            nm = $(selectDiv).text();

            //기존 타입
            type = $(selectDiv).attr("type");

            //li태그를 편지모드로 변경
            liObj = $(selectDiv).parent()[0];

            if(type == "folder"){
                $(selectDiv).replaceWith("<div class='optionsecoptions'><i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:3px;'></i><input type='text' onkeyup='renameFolderEnd(event,this,\"" + path + "\", " + seq + ");' oldvalue='" + nm + "' value='" + nm + "' style='width: calc(100% - 40px);'></div>");

                //liObj.innerHTML = ;
            }else{
                liObj.innerHTML = "<i class='fa-solid fa-file' style='margin-left:14px;margin-right:5px;'></i><input type='text' onkeyup='renameFileEnd(event,this,\"" + path + "\"," + seq + ");' oldvalue='" + nm + "' value='" + nm + "' style='width: calc(100% - 40px);'>";
            }

        }

        function renameFileEnd(e, t,path, seq){
            alog("renameFileEnd().....................start");

            if(e.keyCode != 13)return;

            //alert("enter");
            $.ajax({
                url: svrUrl + "?CMD=rename&PATH=" + path,
                dataType: "json",
                type: "POST",
                data: { "FILENM" : $(t).val() , "OLDFILENM" : $(t).attr("oldvalue"), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq , "SFILE_SEQ" : seq},
                privatePath: path,
                privateNm: $(t).val(),
                privateSeq: seq,
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

                    $(this.privateInput).parent()[0].innerHTML = mkFileTag(false, this.privatePath, this.privateNm, this.privateSeq);

                    msgNotice(data.RTN_MSG,3);
                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

        }

        function renameFolderEnd(e, t,path, seq){
            alog("renameFolderEnd().....................start");

            if(e.keyCode != 13)return;

            //alert("enter");
            $.ajax({
                url: svrUrl + "?CMD=mvdir&PATH=" + path,
                dataType: "json",
                type: "POST",
                data: { "FILENM" : $(t).val() , "OLDFILENM" : $(t).attr("oldvalue"), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq , "SFILE_SEQ" : seq},
                privatePath: path,
                privateNm: $(t).val(),
                privateSeq: seq,
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
                    $(divObj).replaceWith(mkFoldTag(false, this.privatePath, this.privateNm, this.privateSeq));

                    msgNotice(data.RTN_MSG, 3);
                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
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
            seq = $(selectDiv).attr("seq"); //쌍따움표 붙어서 넘어옴
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

            //경로에서 \\를 \로변경
            path = path.replace(/\\\\/g,"\\");
            nm = nm.replace(/\\\\/g,"\\");

            //alert("enter");
            $.ajax({
                url: svrUrl + "?CMD=" + CMD ,
                dataType: "json",
                type: "POST",
                data: { "PATH" : path, "FILENM" : nm, "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq , "SFILE_SEQ" : seq },
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

                    msgNotice(this.privateFileNm + "파일을 삭제완료하였습니다.(Success to remove " + this.privateFileNm + ")", 3);
                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
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
                    //폴더를 선택하고 폴더를 추가하고자 하는 경우, 선택된 폴더 하위에 폴더를 추가
                    path = $(selectDiv).attr("path") + $(selectDiv).text(); //쌍따움표 붙어서 넘어옴

                    alog($(selectDiv).parent().children("ul"));
                    ul = $($(selectDiv).parent().children("ul")[0]);

                    //ul 보이게 처리
                    ul.show();
                }else{
                    //파일 선택하고 폴더를 추가하고자 하는 경우, 현재 열린 폴더에다가 폴더를 추가
                    path = $(selectDiv).attr("path") + $(selectDiv).text(); //쌍따움표 붙어서 넘어옴

                    alog($(selectDiv).parent().parent());
                    ul = $($(selectDiv).parent().parent()[0]);
                    
                    //alert("폴더가 아닌데 폴더를 추가 가능해?");
                    //return;
                }


            }else{
                ul = $("#fileRoot");
                path = "/";
            }
            alog(path);


            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            //nm2 = nm.replace(/\\/g,"\\\\");
            
            //선택한 폴더가 없으면 root ul맨하단에 li를 추가
            ul.append("<li> <i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:3px;'></i><input type=\"text\" onkeyup=\"addFolderEnd(event,this,'" + path2 + "');\" id='addFileNm' value='' style='width:calc(100% - 40px);'></li>");        
            //ul.append("<li> <i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:3px;'></i><input type='text' onkeyup='addFolderEnd(event,this,\"" + path + "\");' id='addFileNm' value='' style='width:calc(100% - 40px);'></li>");        
            alog(22);
        }

        function addFolderEnd(e, t, path){
            alog("addFolderEnd()______________________start");
            if(e.keyCode == 13){
                //alert("enter");
                $.ajax({
                    url: svrUrl + "?CMD=mkdir&PATH=" + path,
                    dataType: "json",
                    type: "POST",
                    data: { "FILENM" : $(t).val(), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq  },
                    privatePath: path,
                    privateFileNm: $(t).val() 
                })
                .done(function( data ) {
                    if(data.RTN_CD == "200"){
                        //input오브젝트를 text를 변경하기
                        alog($(t).parent()[0]);
                        $(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm, data.RTN_MSG);
                    }else{
                        alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                    }
                    //alert(data);
                    msgNotice("폴더 생성을 성공했습니다.(Success to make folder)", 3);
                    //성공하면 해당 오브젝트 div로 변경하기
                })
                .fail(function(xhr, status, errorThrown) { 
                    msgError(errorThrown, 5);
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

                    var liObj = $(selectDiv).parent()[0];
                    
                    alog($(selectDiv).parent().children("ul"));
                    ul = $($(selectDiv).parent().children("ul")[0]);

                    //선택된 폴더가 펼쳐지지 않은 경우 펼쳐지게 처리 하기
                    var children = selectDiv.childNodes;
                    if(children.length >= 1){
                        //첫 객체는 div
                        if (children[0].nodeName == "I" && $(children[0]).hasClass("fa-caret-right")) {
                            //폴더가 닫혀 있으면 open으로 변경 
                            if ($(children[0]).hasClass("fa-rotate-90")) {
                                $(children[0]).removeClass("fa-rotate-90");
                            } else {
                                $(children[0]).addClass("fa-rotate-90");
                            }
                        }
                    }

                }else{
                    path = $(selectDiv).attr("path");

                    alog($(selectDiv).parent().parent());
                    ul = $($(selectDiv).parent().parent()[0]);
                }

                //ul 보이게 하기
                ul.show();
            }else{
                ul = $("#fileRoot");
                path = "/";
            }
            alog(path);

            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            //nm2 = nm.replace(/\\/g,"\\\\");
            
            //선택한 폴더가 없으면 root ul맨하단에 li를 추가
            ul.append("<li> <i class='fa-solid fa-file' style='margin-left:14px;margin-right:5px;'></i><input type=\"text\" onkeyup=\"addFileEnd(event,this,'" + path2 + "');\" id=\"addFileNm\" value=\"\" style=\"width: calc(100% - 40px);\"></li>");        
            alog(22);

        }

        function addFileEnd(e, t, path){
            alog("addFileEnd()______________________start");
            if(e.keyCode == 13){
                //alert("enter");
                $.ajax({
                    url: svrUrl + "?CMD=create&PATH=" + path,
                    dataType: "json",
                    type: "POST",
                    data: { "FILENM" : $(t).val(), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq },
                    privatePath: path,
                    privateFileNm: $(t).val() 
                })
                .done(function( data ) {
                    alog("addFileEnd()______________________done");
                    alog(data);
                    if(data.RTN_CD == "200"){
                        //input오브젝트를 text를 변경하기
                        alog($(t).parent()[0]);
                        $(t).parent()[0].innerHTML = mkFileTag(false, this.privatePath, this.privateFileNm, data.RTN_MSG);
                        
                        msgNotice("파일 생성에 성공했습니다.(Success to add new file)", 3);
                    }else{
                        msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
                    }


                    //성공하면 해당 오브젝트 div로 변경하기
                })
                .fail(function(xhr, status, errorThrown) { 
                    msgError(errorThrown,5);
                });
            }
        }

        function reload(e,t){
            $.ajax({
                url: svrUrl + "?CMD=list&PATH=/",
                type: "POST",
                dataType: "json",
                data: { "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq },
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
                        ul.append(mkFoldTag(true, this.privitePath, data[i].nm, data[i].seq)); //ul_list안쪽에 li추가
                        //li.innerHtml = mkFoldTag(this.privitePath, data[i].nm);
                    }else{
                        ul.append(mkFileTag(true, this.privitePath, data[i].nm, data[i].seq));
                        //li.innerHtml = mkFileTag(this.privitePath, data[i].nm);
                    }
                    //ul.appendChild(li);

                    //선택 이벤트 생성하기
                    //makeSelectEvent();
                }

                msgNotice("작업목록(파일/폴더) 가져오기를 성공했습니다.(Success to relaod)",3);
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });
        }

        function mkFoldTag(isLiTag, path, nm, seq){
            alog("mkFoldTag()__________________________________start");
            alog("  seq = " + seq);
            //alog("  끝이 뭐냐 : = " + path.slice(-1));
            if(path.slice(-1,1) != "/")path = path + "/";
            //alog("  변환함 = " + path);

            if(seq == "" || seq == null)seq = "";
            var sTag = "";
            var eTag = "";
            if(isLiTag){
                sTag = "<li>";
                eTag = "</li>";
            }

            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            nm2 = nm.replace(/\\/g,"\\\\");

            return sTag + "<div seq=\"" + seq + "\" onclick=\"viewChildList(event, '" + path2 + nm2 + "' ,this);\" type=\"folder\" path=\"" + path2 + "\" class=\"optionsecoptions\" ><i class='fa-solid fa-caret-right'></i><i class='fa-solid fa-folder' style='color:#D7C908;margin:0px 10px 0px 4px;'></i>" + nm + "</div>" + eTag;                    
            //return sTag + "<div seq='" + seq + "' onclick='viewChildList(event, \"" + path + nm + "\" ,this);' type='folder' path='" + path + "' class='optionsecoptions' ><i class='fa-solid fa-caret-right'></i><i class='fa-solid fa-folder' style='color:#D7C908;margin:0px 10px 0px 4px;'></i>" + nm + "</div>" + eTag;                    

        }
        function mkFileTag(isLiTag, path, nm, seq){
            alog("mkFileTag()__________________________________start");
            alog("  seq = " + seq);

            if(path.slice(-1,1) != "/")path = path + "/";
            
            if(seq == "" || seq == null)seq = "";
            var sTag = "";
            var eTag = "";
            if(isLiTag){
                sTag = "<li>";
                eTag = "</li>";
            }

            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            nm2 = nm.replace(/\\/g,"\\\\");

            return sTag + "<div seq=\"" + seq + "\" onclick=\"viewFile(event, this, '" + path2 + "', '" + nm2 + "');\" type=\"file\" path=\"" + path2 + "\" class=\"optionsecoptions\"><i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i>" + nm + "</div>" + eTag;
            //return sTag + "<div seq='" + seq + "' onclick='viewFile(event, this, \"" + path + "\", \"" + nm + "\");' type='file' path='" + path + "' class='optionsecoptions'><i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i>" + nm + "</div>" + eTag;
        }

        function chkFileExt(fileNm){
            var textFiles = ["html", "txt", "json", "php", "css", "js", "xml", "jsp", "asp", "java"];
            alog("viewFile() " + path + file);

            fileExt = file.substring(file.lastIndexOf(".") + 1, file.length).toLowerCase();
            //alert("[" + fileExt + "]");
            if (fileExt.length > 0 && textFiles.indexOf(fileExt) > 0) {

            } else {
                msgError("텍스트문서만 편집가능합니다.", 5);
                //return;
            }
        }
        function viewFile(e, divObj, path, file){
            //중북 클릭 이벤트방지
            var evt = e ? e:window.event;
            if (evt.stopPropagation)    evt.stopPropagation();
            if (evt.cancelBubble!=null) evt.cancelBubble = true;

            seq = $(divObj).attr("seq");

            //리던 올때까지는 저장버튼/에디터 비활성화
            isBtnSave = false;
            codeMirror.setOption("readOnly", true);

            $.ajax({
                url: svrUrl + "?CMD=getcode&PATH=" + path + "&FILENM=" + file,
                dataType: "json",
                type: "POST",
                data: {"DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq, "SFILE_SEQ" : seq},
                privatePath: path,
                privateFileNm: file,
                privateSeq: seq,
                privateDivObj: divObj
            })
            .done(function( data ) {
                alog(data);
                if(data.RTN_CD == "200"){
                    if(data.ERR_CD == "220"){
                        msgNotice(data.RTN_MSG + "(" + data.RTN_CD + "," + data.ERR_CD + ")", 2);
                        if (codeMirror) codeMirror.setValue("");
                    }else{
                        //저장 버튼 활성화 처리
                        isBtnSave = true;
                        msgNotice("File-Load success.(" + this.privateFileNm + ")", 2);
                        if (codeMirror) {
                            codeMirror.setValue(data.RTN_MSG);
                            codeMirror.setOption("readOnly", false);
                        }
                    }

                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + "," + data.ERR_CD + ")", 5);
                }


                $("#selectPath").text(this.privatePath);
                $("#selectFileNm").text(this.privateFileNm);

                $("#selectFileNm").attr("seq",this.privateSeq);
                alog("isBtnSave = " + isBtnSave);

            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
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

                //글로별 변수에 현재 선택된 folder, path 정보 저장하기
                if($(divObj).attr("type") == "folder"){
                    selectFolder =  $(divObj).attr("path") +  $(divObj).text();
                }else{
                    selectFolder =  $(divObj).attr("path");
                }
                
                multiChangePath(selectFolder);

                //alert(selectFolder);

            }
        }

        function viewChildList(e, path, divObj){
            alog("viewChildList()................start");
            //중북 클릭 이벤트방지
            var evt = e ? e:window.event;
            if (evt.stopPropagation)    evt.stopPropagation();
            if (evt.cancelBubble!=null) evt.cancelBubble = true;
        

            var liObj = $(divObj).parent()[0];
            var isFoldOpen = false;

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
                            isFoldOpen = false;
                        }else{
                            $(children[i]).addClass("fa-rotate-90");
                            //alert(99);
                            isFoldOpen = true;
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

                        //children[i].remove();//삭제 시킴
                        //alert(isFoldOpen);
                        if(isFoldOpen){
                            children[i].style.display = "";
                        }else{
                            children[i].style.display = "none"; 
                        }

                        //document.getElementById("myDIV").style.display = "none";
                        //alert(1);
                        return;
                        //alert(2);
                    }

                    if(children[i].nodeName == "DIV") {
                        alog("차일드 DIV가 있음");
                        selectControl(children[i]);
                    }

                }
            }




            $.ajax({
                url: svrUrl + "?CMD=list&PATH=" + path,
                dataType: "json",
                type: "POST",
                data: {"DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq},
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
                        ul.append( mkFoldTag(true, this.privitePath, data[i].nm, data[i].seq) );
                    }else{
                        //li.innerHTML = mkFileTag(this.privitePath, data[i].nm);
                        ul.append( mkFileTag(true, this.privitePath, data[i].nm, data[i].seq) );
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