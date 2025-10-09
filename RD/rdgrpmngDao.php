<?php
//DAO
 
class rdgrpmngDao
{
	function __construct(){
		global $log;
		$log->info("RdgrpmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdgrpmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdgrpmngDao-__toString");
	}
	//GRP    
	public function delGrpG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delGrpG";
		$RtnVal["SQLTXT"] = "delete from CMN_GRP where GRP_SEQ = #{GRP_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//insGrpG    
	public function insGrpG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insGrpG";
		$RtnVal["SQLTXT"] = "insert into CMN_GRP
(
	GRP_NM, USE_YN, INTRO_PGMID, ADD_DT, ADD_ID
) values (
	#{GRP_NM}, #{USE_YN}, #{INTRO_PGMID}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sss";
		return $RtnVal;
    }  
	//selGrpG    
	public function selGrpG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selGrpG";
		$RtnVal["SQLTXT"] = "select 
 GRP_SEQ, GRP_NM, USE_YN, INTRO_PGMID
 , ADD_DT, ADD_ID, MOD_DT, MOD_ID
from CMN_GRP
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//updGrpG    
	public function updGrpG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updGrpG";
		$RtnVal["SQLTXT"] = "update CMN_GRP set
	GRP_NM = #{GRP_NM}, USE_YN = #{USE_YN}, INTRO_PGMID = #{INTRO_PGMID}
	,MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where GRP_SEQ = #{GRP_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
		return $RtnVal;
    }  
}
                                                             
?>