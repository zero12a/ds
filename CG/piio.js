var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLNM", "COLNM" : "컬럼명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "HIDDENGET" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDBT"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "IOSEQ", "COLNM" : "IOSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "COLORD", "COLNM" : "COLORD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "COLNM", "COLNM" : "컬럼명", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "DATATYPE", "COLNM" : "데이터타입", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "VALIDSEQ", "COLNM" : "VALIDSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "DATASIZE", "COLNM" : "데이터사이즈", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "OBJTYPE", "COLNM" : "오브젝트타입", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "POPUP", "COLNM" : "POPUP", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "KEYYN", "COLNM" : "KEYYN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "SEQYN", "COLNM" : "SEQYN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LBLHIDDENYN", "COLNM" : "LBLHIDDENYN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LBLWIDTH", "COLNM" : "라벨가로", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LBLALIGN", "COLNM" : "LBLALIGN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "OBJWIDTH", "COLNM" : "오브젝트가로", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "OBJHEIGHT", "COLNM" : "오브젝트세로", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "OBJALIGN", "COLNM" : "가로정렬", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "HIDDENYN", "COLNM" : "HIDDENYN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "EDITYN", "COLNM" : "EDITYN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNINIT", "COLNM" : "FNINIT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "BRYN", "COLNM" : "BRYN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FORMAT", "COLNM" : "FORMAT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FOOTERMATH", "COLNM" : "FOOTERMATH", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FOOTERNM", "COLNM" : "FOOTERNM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ICONNM", "COLNM" : "ICONNM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ICONSTYLE", "COLNM" : "ICONSTYLE", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LBLSTYLE", "COLNM" : "LBLSTYLE", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "OBJSTYLE", "COLNM" : "OBJSTYLE", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "OBJ2STYLE", "COLNM" : "OBJ2STYLE", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADDID", "COLNM" : "ADDID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODID", "COLNM" : "MODID", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "IOSEQ", "COLNM" : "IOSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLORD", "COLNM" : "COLORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLNM", "COLNM" : "컬럼명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DATATYPE", "COLNM" : "데이터타입", "OBJTYPE" : "COMBO" }
,				{ "COLID": "VALIDSEQ", "COLNM" : "VALIDSEQ", "OBJTYPE" : "COMBO" }
,				{ "COLID": "DATASIZE", "COLNM" : "데이터사이즈", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJTYPE", "COLNM" : "오브젝트타입", "OBJTYPE" : "COMBO" }
,				{ "COLID": "POPUP", "COLNM" : "POPUP", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "KEYYN", "COLNM" : "KEYYN", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "SEQYN", "COLNM" : "SEQYN", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "LBLHIDDENYN", "COLNM" : "LBLHIDDENYN", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "LBLWIDTH", "COLNM" : "라벨가로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLALIGN", "COLNM" : "LBLALIGN", "OBJTYPE" : "COMBO" }
,				{ "COLID": "OBJWIDTH", "COLNM" : "오브젝트가로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJHEIGHT", "COLNM" : "오브젝트세로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJALIGN", "COLNM" : "가로정렬", "OBJTYPE" : "COMBO" }
,				{ "COLID": "HIDDENYN", "COLNM" : "HIDDENYN", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "EDITYN", "COLNM" : "EDITYN", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "FNINIT", "COLNM" : "FNINIT", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "BRYN", "COLNM" : "BRYN", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "FORMAT", "COLNM" : "FORMAT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FOOTERMATH", "COLNM" : "FOOTERMATH", "OBJTYPE" : "COMBO" }
,				{ "COLID": "FOOTERNM", "COLNM" : "FOOTERNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ICONNM", "COLNM" : "ICONNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ICONSTYLE", "COLNM" : "ICONSTYLE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLSTYLE", "COLNM" : "LBLSTYLE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJSTYLE", "COLNM" : "OBJSTYLE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJ2STYLE", "COLNM" : "OBJ2STYLE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADDID", "COLNM" : "ADDID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODID", "COLNM" : "MODID", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "piioController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "piioController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "piioController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "piioController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_COLID; // 컬럼ID 변수선언
var obj_G1_COLNM; // 컬럼명 변수선언
var obj_G1_PJTSEQ; // PJTSEQ 변수선언
var obj_G1_PGMSEQ; // PGMSEQ 변수선언
var obj_G1_GRPSEQ; // GRPSEQ 변수선언
var $btG2 = null; //
	//컨트롤러 경로 s
	var url_G2_USERDEF = "piioController?CTLGRP=G2&CTLFNC=USERDEF";
	//컨트롤러 경로 s
	var url_G2_SEARCH = "piioController?CTLGRP=G2&CTLFNC=SEARCH";
	//컨트롤러 경로 s
	var url_G2_RELOAD = "piioController?CTLGRP=G2&CTLFNC=RELOAD";
	//컨트롤러 경로 s
	var url_G2_EXCEL = "piioController?CTLGRP=G2&CTLFNC=EXCEL";
	//컨트롤러 경로 s
	var url_G2_CHKSAVE = "piioController?CTLGRP=G2&CTLFNC=CHKSAVE";
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_USERDEF = "piioController?CTLGRP=G3&CTLFNC=USERDEF";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "piioController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "piioController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "piioController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "piioController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "piioController?CTLGRP=G3&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "piioController?CTLGRP=G3&CTLFNC=DELETE";
var obj_G3_PJTSEQ;   // PJTSEQ 글로벌 변수 선언
var obj_G3_PGMSEQ;   // PGMSEQ 글로벌 변수 선언
var obj_G3_GRPSEQ;   // GRPSEQ 글로벌 변수 선언
var obj_G3_IOSEQ;   // IOSEQ 글로벌 변수 선언
var obj_G3_COLORD;   // COLORD 글로벌 변수 선언
var obj_G3_COLID;   // 컬럼ID 글로벌 변수 선언
var obj_G3_COLNM;   // 컬럼명 글로벌 변수 선언
var obj_G3_DATATYPE;   // 데이터타입 글로벌 변수 선언
var obj_G3_VALIDSEQ;   // VALIDSEQ 글로벌 변수 선언
var obj_G3_DATASIZE;   // 데이터사이즈 글로벌 변수 선언
var obj_G3_OBJTYPE;   // 오브젝트타입 글로벌 변수 선언
var obj_G3_POPUP;   // POPUP 글로벌 변수 선언
var obj_G3_KEYYN;   // KEYYN 글로벌 변수 선언
var obj_G3_SEQYN;   // SEQYN 글로벌 변수 선언
var obj_G3_LBLHIDDENYN;   // LBLHIDDENYN 글로벌 변수 선언
var obj_G3_LBLWIDTH;   // 라벨가로 글로벌 변수 선언
var obj_G3_LBLALIGN;   // LBLALIGN 글로벌 변수 선언
var obj_G3_OBJWIDTH;   // 오브젝트가로 글로벌 변수 선언
var obj_G3_OBJHEIGHT;   // 오브젝트세로 글로벌 변수 선언
var obj_G3_OBJALIGN;   // 가로정렬 글로벌 변수 선언
var obj_G3_HIDDENYN;   // HIDDENYN 글로벌 변수 선언
var obj_G3_EDITYN;   // EDITYN 글로벌 변수 선언
var obj_G3_FNINIT;   // FNINIT 글로벌 변수 선언
var obj_G3_BRYN;   // BRYN 글로벌 변수 선언
var obj_G3_FORMAT;   // FORMAT 글로벌 변수 선언
var obj_G3_FOOTERMATH;   // FOOTERMATH 글로벌 변수 선언
var obj_G3_FOOTERNM;   // FOOTERNM 글로벌 변수 선언
var obj_G3_ICONNM;   // ICONNM 글로벌 변수 선언
var obj_G3_ICONSTYLE;   // ICONSTYLE 글로벌 변수 선언
var obj_G3_LBLSTYLE;   // LBLSTYLE 글로벌 변수 선언
var obj_G3_OBJSTYLE;   // OBJSTYLE 글로벌 변수 선언
var obj_G3_OBJ2STYLE;   // OBJ2STYLE 글로벌 변수 선언
var obj_G3_ADDDT;   // ADDDT 글로벌 변수 선언
var obj_G3_ADDID;   // ADDID 글로벌 변수 선언
var obj_G3_MODDT;   // MODDT 글로벌 변수 선언
var obj_G3_MODID;   // MODID 글로벌 변수 선언
var codeMirrorFontSizeG3Fninit = 11; // FNINIT
//FNINIT
function changeCodemirrorFontSizeG3Fninit(sizeCmd){
	alog("changeCodemirrorFontSizeG3Fninit..........start " + sizeCmd);

	if(sizeCmd == "+"){
		codeMirrorFontSizeG3Fninit  = codeMirrorFontSizeG3Fninit  + 2;
	}else{
		codeMirrorFontSizeG3Fninit  = codeMirrorFontSizeG3Fninit  - 2;
	}

	$(".CodeMirror").css('font-size',codeMirrorFontSizeG3Fninit  + "px");

	obj_G3_FNINIT.refresh();
	alog("changeCodemirrorFontSizeG3Fninit..........end");   
}
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	//null
	alog("G3_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();

	alog("resizeGrpAll()______________end");
}
//화면 초기화	
function initBody(){
     alog("initBody()-----------------------start");

	//dhtmlx 메시지 박스 초기화
	//dhtmlx.message.position="bottom";

	//메시지 박스2
	toastr.options.closeButton = true;
	toastr.options.positionClass = 'toast-bottom-right';
	G1_INIT();
	G2_INIT();
	G3_INIT();
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
}
function goFormPopOpen(tGrpId, tColId, tColId_Nm){
	alog("goFormviewPopOpen()............. tGrpId = " + tGrpId + ", tColId = " + tColId + ", tColId_Nm = " +tColId_Nm );
	
	tColId_Val = $("#" + tColId).val();
	tColId_Nm_Text = $("#" + tColId_Nm).text();
	//PGMGRP ,  	
}// goFormviewPopOpen
//부모창 리턴용//팝업창에서 받을 내용
function popReturn(tGrpId,tRowId,tColId,tBtnNm,tJsonObj){
	//alert("popReturn");
	//, 

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//COLID, 컬럼ID 초기화	
	//COLNM, 컬럼명 초기화	
	//GRPSEQ, GRPSEQ 초기화	
	//PGMSEQ, PGMSEQ 초기화	
	//PJTSEQ, PJTSEQ 초기화	
  alog("G1_INIT()-------------------------end");
}

// 그리드 초기화
function G2_INIT(){
	alog("G2_INIT()-------------------------start");
	$btG2 = $('#btG2').bootstrapTable();

	/*
	$btG2 = $('#btG2').bootstrapTable({
		columns:[
			{
				field: 'ROWID',
				title: 'ROWID',
				checkbox: false,
				visible: false,
				sortable: false,
				align: 'center',
				valign: 'middle',
			}
			,{
			field: 'PJTSEQ',
			title: 'PJTSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'PGMSEQ',
			title: 'PGMSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'GRPSEQ',
			title: 'GRPSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'IOSEQ',
			title: 'IOSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'COLORD',
			title: 'COLORD',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'COLID',
			title: '컬럼ID',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'COLNM',
			title: '컬럼명',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'DATATYPE',
			title: '데이터타입',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'VALIDSEQ',
			title: 'VALIDSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'DATASIZE',
			title: '데이터사이즈',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'OBJTYPE',
			title: '오브젝트타입',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'POPUP',
			title: 'POPUP',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'KEYYN',
			title: 'KEYYN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'SEQYN',
			title: 'SEQYN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'LBLHIDDENYN',
			title: 'LBLHIDDENYN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'LBLWIDTH',
			title: '라벨가로',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'LBLALIGN',
			title: 'LBLALIGN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'OBJWIDTH',
			title: '오브젝트가로',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'OBJHEIGHT',
			title: '오브젝트세로',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'OBJALIGN',
			title: '가로정렬',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'HIDDENYN',
			title: 'HIDDENYN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'EDITYN',
			title: 'EDITYN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNINIT',
			title: 'FNINIT',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'BRYN',
			title: 'BRYN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FORMAT',
			title: 'FORMAT',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FOOTERMATH',
			title: 'FOOTERMATH',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FOOTERNM',
			title: 'FOOTERNM',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'ICONNM',
			title: 'ICONNM',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'ICONSTYLE',
			title: 'ICONSTYLE',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'LBLSTYLE',
			title: 'LBLSTYLE',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'OBJSTYLE',
			title: 'OBJSTYLE',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'OBJ2STYLE',
			title: 'OBJ2STYLE',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'ADDDT',
			title: 'ADDDT',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'ADDID',
			title: 'ADDID',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'MODDT',
			title: 'MODDT',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'MODID',
			title: 'MODID',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
]
	});
*/	$btG2.on('click-row.bs.table', function (e, row, $element) {
		//    alert(row.myid);
		//alert(JSON.stringify(row))

		lastinputG3 = new HashMap(); // 
		lastinputG3.set("G2-PJTSEQ", row.PJTSEQ); // 
		lastinputG3.set("G2-PGMSEQ", row.PGMSEQ); // 
		lastinputG3.set("G2-GRPSEQ", row.GRPSEQ); // 
		lastinputG3.set("G2-IOSEQ", row.IOSEQ); // 
		G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 
		//    //alog(field);
		});
}
//디테일 초기화	
// 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//PJTSEQ, PJTSEQ 초기화	
	$("#G3-PJTSEQ").attr("readonly",true);
	$("#G3-PJTSEQ").attr("disabled",true);
	//PGMSEQ, PGMSEQ 초기화	
	$("#G3-PGMSEQ").attr("readonly",true);
	$("#G3-PGMSEQ").attr("disabled",true);
	//GRPSEQ, GRPSEQ 초기화	
	$("#G3-GRPSEQ").attr("readonly",true);
	$("#G3-GRPSEQ").attr("disabled",true);
	//IOSEQ, IOSEQ 초기화	
	$("#G3-IOSEQ").attr("readonly",true);
	$("#G3-IOSEQ").attr("disabled",true);
	//COLORD, COLORD 초기화	
	//COLID, 컬럼ID 초기화	
	//COLNM, 컬럼명 초기화	
setCodeCombo("FORMVIEW", $("#G3-DATATYPE"), "DATATYPE","");
setCodeCombo("FORMVIEW", $("#G3-VALIDSEQ"), "VALIDSEQ","");
	//DATASIZE, 데이터사이즈 초기화	
setCodeCombo("FORMVIEW", $("#G3-OBJTYPE"), "CTFORMVIEW","");
	//POPUP, POPUP 초기화	
	//KEYYN, KEYYN 초기화	
setCodeRadio("FORMVIEW", "G3-KEYYN", "YN","");

	//SEQYN, SEQYN 초기화	
setCodeRadio("FORMVIEW", "G3-SEQYN", "YN","");

	//LBLHIDDENYN, LBLHIDDENYN 초기화	
setCodeRadio("FORMVIEW", "G3-LBLHIDDENYN", "YN","");

	//LBLWIDTH, 라벨가로 초기화	
setCodeCombo("FORMVIEW", $("#G3-LBLALIGN"), "OBJALIGN","");

	//OBJWIDTH, 오브젝트가로 초기화	
	//OBJHEIGHT, 오브젝트세로 초기화	
setCodeCombo("FORMVIEW", $("#G3-OBJALIGN"), "OBJALIGN","");
	//HIDDENYN, HIDDENYN 초기화	
setCodeRadio("FORMVIEW", "G3-HIDDENYN", "YN","");

	//EDITYN, EDITYN 초기화	
setCodeRadio("FORMVIEW", "G3-EDITYN", "YN","");
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_FNINIT = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-FNINIT'), {
		mode: "text/x-sql",
		styleActiveLine: true,
		indentWithTabs: true,
		smartIndent: true,
		lineWrapping: true,
		lineNumbers: true,
		matchBrackets : true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		hintOptions: {tables: {
			users: {name: null, score: null, birthDate: null},
			countries: {name: null, population: null, size: null}
		}}
	});
	obj_G3_FNINIT.setSize("300","58");
	//BRYN, BRYN 초기화	
setCodeRadio("FORMVIEW", "G3-BRYN", "YN","");
	//FORMAT, FORMAT 초기화	
setCodeCombo("FORMVIEW", $("#G3-FOOTERMATH"), "GRIDFOOTER","");
	//FOOTERNM, FOOTERNM 초기화	
	//ICONNM, ICONNM 초기화	
	//ICONSTYLE, ICONSTYLE 초기화	
	//LBLSTYLE, LBLSTYLE 초기화	
	//OBJSTYLE, OBJSTYLE 초기화	
	//OBJ2STYLE, OBJ2STYLE 초기화	
	//ADDDT, ADDDT 초기화
	//ADDID, ADDID 초기화
	//MODDT, MODDT 초기화
	//MODID, MODID 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//사용자정의함수 : 사용자정의
function G1_USERDEF(token){
	alog("G1_USERDEF-----------------start");

	alog("G1_USERDEF-----------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//, 저장	
function G1_SAVE(token){
 alog("G1_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G1 getparams	
	$.ajax({
		type : "POST",
		url : url_G1_SAVE+"&TOKEN=" + token ,
		data : sendFormData,
		processData: false,
		contentType: false,
		async: false,
		dataType: "json",
		success: function(data){
			alog("   json return----------------------");
			alog(data);
			//data = jQuery.parseJSON(tdata);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			saveToGroup(data);

		},
		error: function(error){
			msgError("[G1] Ajax http 500 error ( " + error + " )");
			alog("[G1] Ajax http 500 error ( " + error + " )");
		}
	});
	alog("G1_SAVE-------------------end");	
}
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//사용자정의함수 : 사용자정의
function G2_USERDEF(token){
	alog("G2_USERDEF-----------------start");

	alog("G2_USERDEF-----------------end");
}
// 엑셀 내려받기
function G2_EXCEL(){
	alog("G2_EXCEL()-------------------------start");

	$btG2.tableExport({type:'excel'});

	alog("G2_EXCEL()------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//그리드 조회()	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");
	$("#spanG2Cnt").text("");
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	if(typeof tinput != "undefined"){
		var tKeys = tinput.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],tinput.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ tinput.get(tKeys[i])); 
		}
	}
	$btG2.bootstrapTable('showLoading');

	//불러오기
	$.ajax({
		type : "POST",
		url : url_G2_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG2 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			$btG2.bootstrapTable('hideLoading');

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG2Cnt").text(row_cnt);
					$btG2.bootstrapTable('removeAll'); //모두 지우기
					$btG2.bootstrapTable('load', data.RTN_DATA.rows);

					}else{
						$("#spanG2Cnt").text("-");
					}
					msgNotice("[] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[] Ajax http 500 error ( " + error + " )",3);
                alog("[] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
		alog("G2_SEARCH()------------end");
}

//
function G2_CHKSAVE(token){
	alog("G2_CHKSAVE()------------start");

	var jsonSelectedRows = $btG2.bootstrapTable('getSelections');
	var strSelectedRowsIds = "";

	for(i=0;i<jsonSelectedRows.length;i++){
		if(i>0) strSelectedRowsIds += ",";


		strSelectedRowsIds += jsonSelectedRows[i].IOSEQ;
	}
        //전송용 post 만들기
		sendFormData = new FormData($("#condition")[0]);

		if(typeof lastinputG2 != "undefined"){
			var tKeys = lastinputG2.keys();
			for(i=0;i<tKeys.length;i++) {
				sendFormData.append(tKeys[i],lastinputG2.get(tKeys[i]));
				//console.log(tKeys[i]+ '='+ lastinputG2.get(tKeys[i])); 
			}
		}
	//CHK 배열 합치기
	sendFormData.append("G2-CHK",strSelectedRowsIds);

	$.ajax({
		type : "POST",
		url : url_G2_CHKSAVE + "&TOKEN=" + token ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: false,
		success: function(data){
			alog("   json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data && data.RTN_CD == "200"){
				msgNotice("[] 정상 처리되었습니다.");
			}else{
				msgError("처리 결과 실패했습니다. ( " + data.ERR_CD + ":" + data.RTN_MSG + " )",3);
			}

		},
		error: function(error){
			msgError("Ajax http 500 error ( " + error + " )");
			alog("Ajax http 500 error ( " + error + " )");
		}
	});
	
	alog("G2_CHKSAVE()------------end");
}
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
}//G3_SAVE
//IO_FILE_YN = V/, G/N	
//IO_FILE_YN = N	
function G3_SAVE(token){	
	alog("G3_SAVE---------------start");

	if( !( $("#G3-CTLCUD").val() == "C" || $("#G3-CTLCUD").val() == "U") ){
		alert("신규 또는 수정 모드 진입 후 저장할 수 있습니다.")
		return;
	}



	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG3 != "undefined"  && lastinputG3 != null){
		var tKeys = lastinputG3.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG3.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG3.get(tKeys[i])); 
		}
	}
	//컨디션 radio, checkbox 만 재지정
	//GRP SVC LOOP
//폼뷰 G3는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G3-CTLCUD",$("#G3-CTLCUD").val());
	sendFormData.append("G3-PJTSEQ",$("#G3-PJTSEQ").val());	//PJTSEQ 전송객체에 넣기
	sendFormData.append("G3-PGMSEQ",$("#G3-PGMSEQ").val());	//PGMSEQ 전송객체에 넣기
	sendFormData.append("G3-GRPSEQ",$("#G3-GRPSEQ").val());	//GRPSEQ 전송객체에 넣기
	sendFormData.append("G3-IOSEQ",$("#G3-IOSEQ").val());	//IOSEQ 전송객체에 넣기
	sendFormData.append("G3-COLORD",$("#G3-COLORD").val());	//COLORD 전송객체에 넣기
	sendFormData.append("G3-COLID",$("#G3-COLID").val());	//컬럼ID 전송객체에 넣기
	sendFormData.append("G3-COLNM",$("#G3-COLNM").val());	//컬럼명 전송객체에 넣기
	sendFormData.append("G3-DATATYPE",$("#G3-DATATYPE").val());	//데이터타입 전송객체에 넣기
	sendFormData.append("G3-VALIDSEQ",$("#G3-VALIDSEQ").val());	//VALIDSEQ 전송객체에 넣기
	sendFormData.append("G3-DATASIZE",$("#G3-DATASIZE").val());	//데이터사이즈 전송객체에 넣기
	sendFormData.append("G3-OBJTYPE",$("#G3-OBJTYPE").val());	//오브젝트타입 전송객체에 넣기
	sendFormData.append("G3-POPUP",$("#G3-POPUP").val());	//POPUP 전송객체에 넣기
	tmpRadioVal = $('input[name="G3-KEYYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-KEYYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-KEYYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	tmpRadioVal = $('input[name="G3-SEQYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-SEQYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-SEQYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	tmpRadioVal = $('input[name="G3-LBLHIDDENYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-LBLHIDDENYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-LBLHIDDENYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	sendFormData.append("G3-LBLWIDTH",$("#G3-LBLWIDTH").val());	//라벨가로 전송객체에 넣기
	sendFormData.append("G3-LBLALIGN",$("#G3-LBLALIGN").val());	//LBLALIGN 전송객체에 넣기
	sendFormData.append("G3-OBJWIDTH",$("#G3-OBJWIDTH").val());	//오브젝트가로 전송객체에 넣기
	sendFormData.append("G3-OBJHEIGHT",$("#G3-OBJHEIGHT").val());	//오브젝트세로 전송객체에 넣기
	sendFormData.append("G3-OBJALIGN",$("#G3-OBJALIGN").val());	//가로정렬 전송객체에 넣기
	tmpRadioVal = $('input[name="G3-HIDDENYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-HIDDENYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-HIDDENYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	tmpRadioVal = $('input[name="G3-EDITYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-EDITYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-EDITYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	sendFormData.append("G3-FNINIT",obj_G3_FNINIT.getValue()); //FNINIT
	tmpRadioVal = $('input[name="G3-BRYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-BRYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-BRYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	sendFormData.append("G3-FORMAT",$("#G3-FORMAT").val());	//FORMAT 전송객체에 넣기
	sendFormData.append("G3-FOOTERMATH",$("#G3-FOOTERMATH").val());	//FOOTERMATH 전송객체에 넣기
	sendFormData.append("G3-FOOTERNM",$("#G3-FOOTERNM").val());	//FOOTERNM 전송객체에 넣기
	sendFormData.append("G3-ICONNM",$("#G3-ICONNM").val());	//ICONNM 전송객체에 넣기
	sendFormData.append("G3-ICONSTYLE",$("#G3-ICONSTYLE").val());	//ICONSTYLE 전송객체에 넣기
	sendFormData.append("G3-LBLSTYLE",$("#G3-LBLSTYLE").val());	//LBLSTYLE 전송객체에 넣기
	sendFormData.append("G3-OBJSTYLE",$("#G3-OBJSTYLE").val());	//OBJSTYLE 전송객체에 넣기
	sendFormData.append("G3-OBJ2STYLE",$("#G3-OBJ2STYLE").val());	//OBJ2STYLE 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G3_SAVE + "&TOKEN=" + token + "&" + conAllData,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			//alog(tdata);
			//data = jQuery.parseJSON(tdata);

			saveToGroup(tdata);
			//alert(data);
			//if(data && data.RTN_CD == "200"){

				//if(typeof(data.GRP_DATA) == "undefined" || data.GRP_DATA[0] == null || typeof(data.GRP_DATA[0].RTN_DATA) == "undefined"){
					//msgNotice("오류를 발생하지 않았으나, 처리 내역이 없습니다.(GRP_DATA is null, SQL미등록)",1);
				//}else{
					//affectedRows = data.GRP_DATA[0].RTN_DATA;
					//msgNotice("정상적으로 저장되었습니다. [영향받은건수:" + affectedRows + "]",1);
				//}

			//}else{
				//msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
			//}
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});
}
//FORMVIEW DELETE
function G3_DELETE(token){
	alog("G3_DELETE---------------start");

	//조회했는지 확인하기
	if( $("#G3-CTLCUD").val() != "R" ){
		alert("조회된 것만 삭제 가능합니다.");
		return;
	}
	//확인
	if(!confirm("정말로 삭제하시겠습니까?")){
		return;
	}
	
	//삭제처리 명령어
	$("#G3-CTLCUD").val("D");
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG3 != "undefined" && lastinputG3 != null ){
		var tKeys = lastinputG3.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG3.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG3.get(tKeys[i])); 
		}
	}

	$.ajax({
		type : "POST",
		url : url_G3_DELETE + "&TOKEN=" + token + "&" + conAllData,
		data : sendFormData,
		processData: false,
		contentType: false,
		success: function(tdata){
			alog(tdata);
			data = jQuery.parseJSON(tdata);
			//alert(data);
			if(data && data.RTN_CD == "200"){
				if(typeof(data.GRP_DATA) == "undefined" || data.GRP_DATA[0] == null || typeof(data.GRP_DATA[0].RTN_DATA) == "undefined"){
					msgNotice("오류를 발생하지 않았으나, 처리 내역이 없습니다.(GRP_DATA is null, SQL미등록)",1);
				}else{
					affectedRows = data.GRP_DATA[0].RTN_DATA;
					msgNotice("정상적으로 삭제되었습니다. [영향받은건수:" + affectedRows + "]",1);
				}
			}else{
				msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
			}
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});
}
//디테일 검색	
function G3_SEARCH(tinput,token){
       alog("(FORMVIEW) G3_SEARCH---------------start");

	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	if(typeof tinput != "undefined" && tinput != null){
		var tKeys = tinput.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],tinput.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ tinput.get(tKeys[i])); 
		}
	}

	$.ajax({
        type : "POST",
        url : url_G3_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
        data : sendFormData,
		processData: false,
		contentType: false,
        dataType: "json",
        success: function(data){
            alog(data);

			if(data && data.RTN_CD == "200"){
				if(data.RTN_DATA){
					msgNotice("정상적으로 조회되었습니다.",1);
				}else{
					msgNotice("정상적으로 조회되었으나 데이터가 없습니다.",2);
					return;
				}
			}else{
				msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
				return;
			}

            //모드 변경하기
            $("#G3-CTLCUD").val("R");
			//SETVAL  가져와서 세팅
			$("#G3-PJTSEQ").val(data.RTN_DATA.PJTSEQ);//PJTSEQ 변수세팅
			$("#G3-PGMSEQ").val(data.RTN_DATA.PGMSEQ);//PGMSEQ 변수세팅
			$("#G3-GRPSEQ").val(data.RTN_DATA.GRPSEQ);//GRPSEQ 변수세팅
			$("#G3-IOSEQ").val(data.RTN_DATA.IOSEQ);//IOSEQ 변수세팅
			$("#G3-COLORD").val(data.RTN_DATA.COLORD);//COLORD 변수세팅
			$("#G3-COLID").val(data.RTN_DATA.COLID);//컬럼ID 변수세팅
			$("#G3-COLNM").val(data.RTN_DATA.COLNM);//컬럼명 변수세팅
			$("#G3-DATATYPE").val(data.RTN_DATA.DATATYPE);//데이터타입 변수세팅
			$("#G3-VALIDSEQ").val(data.RTN_DATA.VALIDSEQ);//VALIDSEQ 변수세팅
			$("#G3-DATASIZE").val(data.RTN_DATA.DATASIZE);//데이터사이즈 변수세팅
			$("#G3-OBJTYPE").val(data.RTN_DATA.OBJTYPE);//오브젝트타입 변수세팅
			$("#G3-POPUP").val(data.RTN_DATA.POPUP);//POPUP 변수세팅
			//KEYYN 값넣기
			$('input:radio[name="G3-KEYYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.KEYYN != ""){
				$('input:radio[name="G3-KEYYN"][value="' + data.RTN_DATA.KEYYN + '"]').prop('checked', true);
			}
			//SEQYN 값넣기
			$('input:radio[name="G3-SEQYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.SEQYN != ""){
				$('input:radio[name="G3-SEQYN"][value="' + data.RTN_DATA.SEQYN + '"]').prop('checked', true);
			}
			//LBLHIDDENYN 값넣기
			$('input:radio[name="G3-LBLHIDDENYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.LBLHIDDENYN != ""){
				$('input:radio[name="G3-LBLHIDDENYN"][value="' + data.RTN_DATA.LBLHIDDENYN + '"]').prop('checked', true);
			}
			$("#G3-LBLWIDTH").val(data.RTN_DATA.LBLWIDTH);//라벨가로 변수세팅
			$("#G3-LBLALIGN").val(data.RTN_DATA.LBLALIGN);//LBLALIGN 변수세팅
			$("#G3-OBJWIDTH").val(data.RTN_DATA.OBJWIDTH);//오브젝트가로 변수세팅
			$("#G3-OBJHEIGHT").val(data.RTN_DATA.OBJHEIGHT);//오브젝트세로 변수세팅
			$("#G3-OBJALIGN").val(data.RTN_DATA.OBJALIGN);//가로정렬 변수세팅
			//HIDDENYN 값넣기
			$('input:radio[name="G3-HIDDENYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.HIDDENYN != ""){
				$('input:radio[name="G3-HIDDENYN"][value="' + data.RTN_DATA.HIDDENYN + '"]').prop('checked', true);
			}
			//EDITYN 값넣기
			$('input:radio[name="G3-EDITYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.EDITYN != ""){
				$('input:radio[name="G3-EDITYN"][value="' + data.RTN_DATA.EDITYN + '"]').prop('checked', true);
			}
		//CodeMirror SetVal
		obj_G3_FNINIT.setValue(data.RTN_DATA.FNINIT); //FNINIT 
			//BRYN 값넣기
			$('input:radio[name="G3-BRYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.BRYN != ""){
				$('input:radio[name="G3-BRYN"][value="' + data.RTN_DATA.BRYN + '"]').prop('checked', true);
			}
			$("#G3-FORMAT").val(data.RTN_DATA.FORMAT);//FORMAT 변수세팅
			$("#G3-FOOTERMATH").val(data.RTN_DATA.FOOTERMATH);//FOOTERMATH 변수세팅
			$("#G3-FOOTERNM").val(data.RTN_DATA.FOOTERNM);//FOOTERNM 변수세팅
			$("#G3-ICONNM").val(data.RTN_DATA.ICONNM);//ICONNM 변수세팅
			$("#G3-ICONSTYLE").val(data.RTN_DATA.ICONSTYLE);//ICONSTYLE 변수세팅
			$("#G3-LBLSTYLE").val(data.RTN_DATA.LBLSTYLE);//LBLSTYLE 변수세팅
			$("#G3-OBJSTYLE").val(data.RTN_DATA.OBJSTYLE);//OBJSTYLE 변수세팅
			$("#G3-OBJ2STYLE").val(data.RTN_DATA.OBJ2STYLE);//OBJ2STYLE 변수세팅
	$("#G3-ADDDT").text(data.RTN_DATA.ADDDT);//ADDDT 변수세팅
	$("#G3-ADDID").text(data.RTN_DATA.ADDID);//ADDID 변수세팅
	$("#G3-MODDT").text(data.RTN_DATA.MODDT);//MODDT 변수세팅
	$("#G3-MODID").text(data.RTN_DATA.MODID);//MODID 변수세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

}
function G3_MODIFY(){
       alog("[FromView] G3_MODIFY---------------start");
	if( $("#G3-CTLCUD").val() == "C" ){
		alert("조회 후 수정 가능합니다. 신규 모드에서는 수정할 수 없습니다.")
		return;
	}
	if( $("#G3-CTLCUD").val() == "D" ){
		alert("조회 후 수정 가능합니다. 삭제 모드에서는 수정할 수 없습니다.")
		return;
	}

	$("#G3-CTLCUD").val("U");
       alog("[FromView] G3_MODIFY---------------end");
}
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-PJTSEQ").val("");//PJTSEQ 신규초기화	
	$("#G3-PGMSEQ").val("");//PGMSEQ 신규초기화	
	$("#G3-GRPSEQ").val("");//GRPSEQ 신규초기화	
	$("#G3-IOSEQ").val("");//IOSEQ 신규초기화	
	$("#G3-COLORD").val("");//COLORD 신규초기화	
	$("#G3-COLID").val("");//컬럼ID 신규초기화	
	$("#G3-COLNM").val("");//컬럼명 신규초기화	
	$("#G3-DATASIZE").val("");//데이터사이즈 신규초기화	
	$("#G3-POPUP").val("");//POPUP 신규초기화	
	$("#G3-KEYYN").val("");//KEYYN 신규초기화	
	$("#G3-SEQYN").val("");//SEQYN 신규초기화	
	$("#G3-LBLHIDDENYN").val("");//LBLHIDDENYN 신규초기화	
	$("#G3-LBLWIDTH").val("");//라벨가로 신규초기화	
	$("#G3-OBJWIDTH").val("");//오브젝트가로 신규초기화	
	$("#G3-OBJHEIGHT").val("");//오브젝트세로 신규초기화	
	$("#G3-HIDDENYN").val("");//HIDDENYN 신규초기화	
	$("#G3-EDITYN").val("");//EDITYN 신규초기화	
	obj_G3_FNINIT.setValue(""); // FNINIT값 비우기
	$("#G3-BRYN").val("");//BRYN 신규초기화	
	$("#G3-FORMAT").val("");//FORMAT 신규초기화	
	$("#G3-FOOTERNM").val("");//FOOTERNM 신규초기화	
	$("#G3-ICONNM").val("");//ICONNM 신규초기화	
	$("#G3-ICONSTYLE").val("");//ICONSTYLE 신규초기화	
	$("#G3-LBLSTYLE").val("");//LBLSTYLE 신규초기화	
	$("#G3-OBJSTYLE").val("");//OBJSTYLE 신규초기화	
	$("#G3-OBJ2STYLE").val("");//OBJ2STYLE 신규초기화	
	$("#G3-ADDDT").text("");//ADDDT 신규초기화
	$("#G3-ADDID").text("");//ADDID 신규초기화
	$("#G3-MODDT").text("");//MODDT 신규초기화
	$("#G3-MODID").text("");//MODID 신규초기화
	alog("DETAILNew30---------------end");
}
//사용자정의함수 : 사용자정의
function G3_USERDEF(token){
	alog("G3_USERDEF-----------------start");

	alog("G3_USERDEF-----------------end");
}
