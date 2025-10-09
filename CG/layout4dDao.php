<?php
//DAO
 
class layout4dDao
{
	function __construct(){
		global $log;
		$log->info("Layout4dDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("Layout4dDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("Layout4dDao-__toString");
	}
	//    
	public function sD($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sD";
		$RtnVal["SQLTXT"] = "select LAYOUTDSEQ, ADDDT
from CG_LAYOUTD
where LAYOUTID = #{G3-LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//    
	public function sM($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sM";
		$RtnVal["SQLTXT"] = "select LAYOUTID, ADDDT
from CG_LAYOUT";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//    
	public function sS($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sS";
		$RtnVal["SQLTXT"] = "select LAYOUTSSEQ, ADDDT
from CG_LAYOUTS
where LAYOUTID = #{G3-LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
}
                                                             
?>