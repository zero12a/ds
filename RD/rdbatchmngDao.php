<?php
//DAO
 
class rdbatchmngDao
{
	function __construct(){
		global $log;
		$log->info("RdbatchmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdbatchmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdbatchmngDao-__toString");
	}
	//BATCH    
	public function insG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insG";
		$RtnVal["SQLTXT"] = "insert into CMN_BATCH (
	BATCH_NM, SOURCE_SVRID, SOURCE_SQL, FETCH_CNT, TARGET_SVRID
	, TARGET_SQL, CRON, START_DT, END_DT, USE_YN
	, ADD_DT, ADD_ID
) values (
	#{BATCH_NM}, #{SOURCE_SVRID}, #{SOURCE_SQL}, #{FETCH_CNT}, #{TARGET_SVRID}
	, #{TARGET_SQL}, #{CRON}, #{START_DT}, #{END_DT}, #{USE_YN}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssssssss";
		return $RtnVal;
    }  
	//BATCH    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select 
	BATCH_SEQ, BATCH_NM, ifnull(CONDITION_SVRID,'') as CONDITION_SVRID, ifnull(CONDITION_SQL,'') as CONDITION_SQL
	, SOURCE_SVRID, ifnull(SOURCE_IN_COLTYPES,'') as SOURCE_IN_COLTYPES, ifnull(SOURCE_SQL,'') as SOURCE_SQL
	, ifnull(TARGET_IN_COLTYPES,'') as TARGET_IN_COLTYPES, TARGET_SVRID, ifnull(TARGET_SQL,'') as TARGET_SQL
	, ADD_DT, MOD_DT 
from CMN_BATCH
where BATCH_SEQ = #{G2-BATCH_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//BATCH    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select 
	BATCH_SEQ, BATCH_NM, CONDITION_SVRID, SOURCE_SVRID, SOURCE_SQL
	, TARGET_SVRID, TARGET_SQL, CRON, START_DT, END_DT
	, USE_YN, STATUS
	, concat( substring(LAST_RUN,3,2),'-',substring(LAST_RUN,5,2),'-',substring(LAST_RUN,7,2), ' ', substring(LAST_RUN,9,2),':',substring(LAST_RUN,11,2), ':' , substring(LAST_RUN,13,2) ) as LAST_RUN
	, ADD_DT, MOD_DT
from CMN_BATCH
order by BATCH_SEQ desc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//BATCH    
	public function updF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updF";
		$RtnVal["SQLTXT"] = "update CMN_BATCH set
	CONDITION_SVRID = #{G3-CONDITION_SVRID}, CONDITION_SQL = #{G3-CONDITION_SQL}
	, SOURCE_SVRID = #{G3-SOURCE_SVRID}, SOURCE_SQL = #{G3-SOURCE_SQL}, SOURCE_IN_COLTYPES = #{G3-SOURCE_IN_COLTYPES}
	, TARGET_SVRID = #{G3-TARGET_SVRID}, TARGET_SQL = #{G3-TARGET_SQL}, TARGET_IN_COLTYPES = #{G3-TARGET_IN_COLTYPES}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where BATCH_SEQ = #{G3-BATCH_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssss";
		return $RtnVal;
    }  
	//BATCH    
	public function updG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updG";
		$RtnVal["SQLTXT"] = "update CMN_BATCH set
	BATCH_NM = #{BATCH_NM}, CONDITION_SVRID = #{CONDITION_SVRID}, SOURCE_SVRID = #{SOURCE_SVRID}, TARGET_SVRID = #{TARGET_SVRID}
	, CRON = #{CRON}, START_DT = #{START_DT}, END_DT = #{END_DT}, USE_YN = #{USE_YN}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where BATCH_SEQ = #{BATCH_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssss";
		return $RtnVal;
    }  
}
                                                             
?>