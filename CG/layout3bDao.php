<?php
//DAO
 
class layout3bDao
{
	function __construct(){
		global $log;
		$log->info("Layout3bDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("Layout3bDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("Layout3bDao-__toString");
	}
	//    
	public function selD($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selD";
		$RtnVal["SQLTXT"] = "select LAYOUTDSEQ, ADDDT
from CG_LAYOUTD
where LAYOUTID = #{G3-LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//    
	public function selM($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selM";
		$RtnVal["SQLTXT"] = "select LAYOUTID, ADDDT
from CG_LAYOUT";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//    
	public function selS($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selS";
		$RtnVal["SQLTXT"] = "select LAYOUTSSEQ, ADDDT
from CG_LAYOUTS
where LAYOUTID = #{G5-LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
}
                                                             
?>