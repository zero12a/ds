<?php
//DAO
 
class rdcfghistoryDao
{
	function __construct(){
		global $log;
		$log->info("RdcfghistoryDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdcfghistoryDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdcfghistoryDao-__toString");
	}
	//CFG    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select 
	CFG_SEQ, ACT_PGMID, OLD_CFG, NEW_CFG, HOST_NM
	, RESULT_YN, RESULT_MSG, ADD_DT
from CMN_CFG_HISTORY
where CFG_SEQ = #{G2-CFG_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//CFG    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select 
	CFG_SEQ, ACT_PGMID, OLD_CFG, NEW_CFG, HOST_NM
	, RESULT_YN, RESULT_MSG, ADD_DT
from CMN_CFG_HISTORY
where 1 = 1
	and case when length(#{G1-CFG_SEQ}) > 0 then
		CFG_SEQ = #{G1-CFG_SEQ}
	else 1 = 1 end
	and case when length(#{G1-ACT_PGMID}) > 0  then
		ACT_PGMID = #{G1-ACT_PGMID}
	else 1 = 1 end
	and case when length(#{G1-HOST_NM}) > 0  then
		HOST_NM = #{G1-HOST_NM}
	else 1 = 1 end
	and case when length(#{G1-RESULT_YN}) > 0  then
		RESULT_YN = #{G1-RESULT_YN}
	else 1 = 1 end
	and case when length(#{G1-RESULT_MSG}) > 0  then
		RESULT_MSG = #{G1-RESULT_MSG}
	else 1 = 1 end
	and case when length(#{G1-ADD_DT}) > 0  then
		ADD_DT between concat(replace(#{G1-ADD_DT},'-',''),'000000') 
			and concat(replace(#{G1-ADD_DT},'-',''),'235959') 
	else 1 = 1 end
order by CFG_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssssssss";
		return $RtnVal;
    }  
}
                                                             
?>