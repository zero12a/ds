<?php
//DAO
 
class rdmymsgboxDao
{
	function __construct(){
		global $log;
		$log->info("RdmymsgboxDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdmymsgboxDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdmymsgboxDao-__toString");
	}
	//BOX    
	public function delG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delG";
		$RtnVal["SQLTXT"] = "update CMN_MSG_BOX set 
	DEL_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), DEL_ID = #{USER.SEQ}
where MSG_BOX_SEQ = #{MSG_BOX_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
	//BOX    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select
	MSG_BOX_SEQ, USR_SEQ, TITLE, BODY, SEND_DT, READ_DT, ADD_DT
from
	CMN_MSG_BOX
where MSG_BOX_SEQ = #{G2-MSG_BOX_SEQ} and USR_SEQ = #{USER.SEQ} and DEL_DT is null
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
	//BOX    
	public function selFRead($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selFRead";
		$RtnVal["SQLTXT"] = "update CMN_MSG_BOX set
	READ_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
where MSG_BOX_SEQ = #{G2-MSG_BOX_SEQ} and USR_SEQ = #{USER.SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = "R"; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
	//BOX    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select
	0 as CHK, MSG_BOX_SEQ, USR_SEQ, TITLE, SEND_DT, READ_DT, ADD_DT
from
	CMN_MSG_BOX
where USR_SEQ = #{USER.SEQ} and DEL_DT is null
	and ADD_DT >= concat(replace(#{G1-FROM_ADD_DT},'-',''),'000000')
	and ADD_DT <= concat(replace(#{G1-TO_ADD_DT},'-',''),'235959') 
order by MSG_BOX_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sss";
		return $RtnVal;
    }  
}
                                                             
?>