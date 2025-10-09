<?php
//DAO
 
class iconmng1Dao
{
	function __construct(){
		global $log;
		$log->info("Iconmng1Dao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("Iconmng1Dao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("Iconmng1Dao-__toString");
	}
	//insF    
	public function insF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "insF";
		$RtnVal["SQLTXT"] = "insert into CG_ICONMNG (
	IMGNM ,IMGSVRNM ,IMGSIZE , IMGHASH, IMGTYPE, ADDDT
)values (
	#{G3-ICONFILE_NM}, #{G3-ICONFILE_SVRNM}, #{G3-ICONFILE_SIZE}, #{G3-ICONFILE_HASH}, #{G3-ICONFILE_IMGTYPE}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)

";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssss";
		return $RtnVal;
    }  
	//selF    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select ICONSEQ ,IMGNM ,IMGSVRNM ,IMGSIZE , ifnull(IMGHASH,'') as IMGHASH, ifnull(IMGTYPE,'') as IMGTYPE
, ifnull(IMGTYPE,'') as IMGTYPE2
, '1,2,3,5' as IMGTYPE3
, 'INPUTBOX,TEXTAREA' as IMGTYPE4
, 'INPUTBOX,TEXTAREA' as IMGTYPE5
, 'pppppp' as CODEMIRROR
, 'pppppp' as TXTAREA
, 'ㄴㅇㄹㄴㅇㄹ' as TXTVIEW
, '<font color=blue>11</font>' as HTMLVIEW
, '/up/SGN_200403174352wnL0.png' as SIGNPAD
, 'CD1^NM1' as CODESEARCH
, concat(substr(ADDDT,1,4),'-',substr(ADDDT,5,2),'-',substr(ADDDT,7,2)) as ADDDT2
, ADDDT
from CG_ICONMNG
where ICONSEQ = #{G2-ICONSEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//selG    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select ICONSEQ ,IMGNM ,IMGSVRNM ,IMGSIZE , ifnull(IMGHASH,'') as IMGHASH, ifnull(IMGTYPE,'') as IMGTYPE
, ifnull(IMGTYPE,'') as IMGTYPE2
, '1,2,3,5' as IMGTYPE3
, 'INPUTBOX,TEXTAREA' as IMGTYPE4
, 'pppppp' as CODEMIRROR
, 'pppppp' as TXTAREA
, 'ㄴㅇㄹㄴㅇㄹ' as TXTVIEW
, '<font color=blue>11</font>' as HTMLVIEW
, '/up/SGN_200403174352wnL0.png' as SIGNPAD
, 'CD1^NM1^G2' as CODESEARCH
, concat(substr(ADDDT,1,4),'-',substr(ADDDT,5,2),'-',substr(ADDDT,7,2)) as ADDDT2
, ADDDT
from CG_ICONMNG";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>