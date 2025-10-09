<?php
//DAO
 
class rdmsgsendhisDao
{
	function __construct(){
		global $log;
		$log->info("RdmsgsendhisDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdmsgsendhisDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdmsgsendhisDao-__toString");
	}
	//REQ    
	public function insREQ($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insREQ";
		$RtnVal["SQLTXT"] = "insert into CMN_MSG_REQUEST (
	CAMPAIGN_SEQ, USR_SEQ, USR_ID, RETRY_CNT, ADD_DT, ADD_ID
) values (
	#{CAMPAIGN_SEQ}, #{USR_SEQ}, #{USR_ID}, 0, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sss";
		return $RtnVal;
    }  
	//selREQ    
	public function selREQ($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selREQ";
		$RtnVal["SQLTXT"] = "select
	a.REQUEST_SEQ, a.CAMPAIGN_SEQ, b.CAMPAIGN_NM, a.USR_SEQ, a.USR_ID, a.RETRY_CNT, a.ADD_DT
from
	CMN_MSG_REQUEST a
		left outer join CMN_CAMPAIGN b on a.CAMPAIGN_SEQ = b.CAMPAIGN_SEQ
where
	a.ADD_DT >= concat(replace(#{G1-FROM_ADDDT},'-',''),'000000') 
	and a.ADD_DT <= concat(replace(#{G1-TO_ADDDT},'-',''),'235959')
order by 
	a.REQUEST_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
	//selSNDLOG    
	public function selSNDLOG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selSNDLOG";
		$RtnVal["SQLTXT"] = "select
	SENDLOG_SEQ, REQUEST_SEQ, USR_SEQ, USR_ID, REQUEST_DT
	, REQUEST_ID, CAMPAIGN_SEQ, SENDER, EMAIL, USR_NM, TITLE
	, BODY, RES_GBN, RES_MSG, ADD_DT
from
	CMN_MSG_SENDLOG
where ADD_DT >= concat(replace(#{G1-ADD_DT},'-',''),'000000') and ADD_DT <= concat(replace(#{G1-ADD_DT},'-',''),'235959')
order by 
	SENDLOG_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
}
                                                             
?>