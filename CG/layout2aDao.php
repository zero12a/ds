<?php
//DAO
 
class layout2aDao
{
	function __construct(){
		global $log;
		$log->info("Layout2aDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("Layout2aDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("Layout2aDao-__toString");
	}
	//    
	public function sD($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sD";
		$RtnVal["SQLTXT"] = "select LAYOUTID, ADDDT
from CG_LAYOUTD
where LAYOUTID = {G2-LAYOUTID} ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//    
	public function sM($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sM";
		$RtnVal["SQLTXT"] = "select LAYOUTID, ADDDT
from CG_LAYOUT ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//    
	public function sS($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sS";
		$RtnVal["SQLTXT"] = "";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>