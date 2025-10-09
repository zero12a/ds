<?php
//DAO
 
class rdbatchlogDao
{
	function __construct(){
		global $log;
		$log->info("RdbatchlogDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdbatchlogDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdbatchlogDao-__toString");
	}
	//BATCH    
	public function selBATCH($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selBATCH";
		$RtnVal["SQLTXT"] = "select 
	BATCH_SEQ, BATCH_NM, CONDITION_SVRID, SOURCE_SVRID, SOURCE_SQL
	, TARGET_SVRID, TARGET_SQL, CRON, START_DT, END_DT
	, USE_YN, STATUS
	, concat( substring(LAST_RUN,3,2),'-',substring(LAST_RUN,5,2),'-',substring(LAST_RUN,7,2), ' ', substring(LAST_RUN,9,2),':',substring(LAST_RUN,11,2), ':' , substring(LAST_RUN,13,2) ) as LAST_RUN
	, ADD_DT, MOD_DT
from CMN_BATCH
order by BATCH_SEQ desc";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//LOG    
	public function selLOG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selLOG";
		$RtnVal["SQLTXT"] = "select
	LOG_SEQ, BATCH_SEQ, MSG, ADD_DT
from
	CMN_BATCH_LOG
where BATCH_SEQ = #{G4-BATCH_SEQ} 
	and ADD_DT >= concat(replace(#{G2-FROM_ADD_DT},'-',''),'000000') 
	and ADD_DT <= concat(replace(#{G2-TO_ADD_DT},'-',''),'235959')
order by LOG_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sss";
		return $RtnVal;
    }  
}
                                                             
?>