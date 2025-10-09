<?php
//DAO
 
class cfghistoryDao
{
	function __construct(){
		global $log;
		$log->info("CfghistoryDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("CfghistoryDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("CfghistoryDao-__toString");
	}
	//CFG    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select 
	CFG_SEQ, ACT_PGMID, OLD_CFG, NEW_CFG, HOST_NM
	, RESULT_YN, RESULT_MSG, ADD_DT
from CMN_CFG_HISTORY
where CFG_SEQ = #{G2-CFG_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//CFG    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select 
	CFG_SEQ, ACT_PGMID, OLD_CFG, NEW_CFG, HOST_NM
	, RESULT_YN, RESULT_MSG, ADD_DT
from CMN_CFG_HISTORY
order by CFG_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>