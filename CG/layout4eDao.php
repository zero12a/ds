<?php
//DAO
 
class layout4eDao
{
	function __construct(){
		global $log;
		$log->info("Layout4eDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("Layout4eDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("Layout4eDao-__toString");
	}
	//    
	public function D($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "D";
		$RtnVal["SQLTXT"] = "select LAYOUTDSEQ, ADDDT
from CG_LAYOUTD
where LAYOUTID = #{G4-LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//    
	public function M($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "M";
		$RtnVal["SQLTXT"] = "select LAYOUTID, ADDDT
from CG_LAYOUT";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//    
	public function S($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "S";
		$RtnVal["SQLTXT"] = "select LAYOUTSSEQ, ADDDT
from CG_LAYOUTS
where LAYOUTID = #{G4-LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
}
                                                             
?>