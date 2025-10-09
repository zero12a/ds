<?php
//DAO
 
class rdcampaignmngDao
{
	function __construct(){
		global $log;
		$log->info("RdcampaignmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdcampaignmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdcampaignmngDao-__toString");
	}
	//CAMPAIGN    
	public function delG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delG";
		$RtnVal["SQLTXT"] = "delete from  CMN_CAMPAIGN
where CAMPAIGN_SEQ = #{CAMPAIGN_SEQ} ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//CAMPAIGN    
	public function insG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insG";
		$RtnVal["SQLTXT"] = "insert into CMN_CAMPAIGN (
	CAMPAIGN_NM, CONTENT_SVRID, CONTENT_NM, CAHNNEL, TITLE
	, ADD_DT, ADD_ID
) values (
	#{CAMPAIGN_NM}, #{CONTENT_SVRID}, #{CONTENT_NM}, #{CAHNNEL}, #{TITLE}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssss";
		return $RtnVal;
    }  
	//CAMPAIGN    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select
	CAMPAIGN_SEQ, CAMPAIGN_NM, CONTENT_SVRID, CONTENT_NM, ifnull(CONTENT_SQL,'') as CONTENT_SQL
	, ifnull(CONTENT_IN_COLTYPES,'') as CONTENT_IN_COLTYPES
	, CAHNNEL, TITLE, ifnull(BODY,'') as BODY, ADD_DT, MOD_DT 
from 
	CMN_CAMPAIGN
where CAMPAIGN_SEQ  = #{G2-CAMPAIGN_SEQ}
 ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//CAMPAIGN    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select
	CAMPAIGN_SEQ, CAMPAIGN_NM, CONTENT_SVRID, CONTENT_NM, CAHNNEL
	, TITLE, ifnull(BODY,'') as BODY, ADD_DT, MOD_DT 
from 
	CMN_CAMPAIGN
order by CAMPAIGN_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//CAMPAIGN    
	public function updF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updF";
		$RtnVal["SQLTXT"] = "update CMN_CAMPAIGN set
	CAMPAIGN_NM = #{G3-CAMPAIGN_NM}, CONTENT_SVRID = #{G3-CONTENT_SVRID}, CONTENT_NM = #{G3-CONTENT_NM}, CONTENT_SQL = #{G3-CONTENT_SQL}
	, CONTENT_IN_COLTYPES = #{G3-CONTENT_IN_COLTYPES}
	, CAHNNEL = #{G3-CAHNNEL}, TITLE = #{G3-TITLE}, BODY = #{G3-BODY}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where CAMPAIGN_SEQ = #{G3-CAMPAIGN_SEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssssssi";
		return $RtnVal;
    }  
	//CAMPAIGN    
	public function updG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updG";
		$RtnVal["SQLTXT"] = "update CMN_CAMPAIGN set
	CAMPAIGN_NM = #{CAMPAIGN_NM}, CONTENT_SVRID = #{CONTENT_SVRID}, CONTENT_NM = #{CONTENT_NM}, CAHNNEL = #{CAHNNEL}, TITLE = #{TITLE}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where CAMPAIGN_SEQ = #{CAMPAIGN_SEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssi";
		return $RtnVal;
    }  
}
                                                             
?>