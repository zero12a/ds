<?php
//DAO
 
class rdteammngDao
{
	function __construct(){
		global $log;
		$log->info("RdteammngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdteammngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdteammngDao-__toString");
	}
	//TEAM    
	public function chkSave($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "chkSave";
		$RtnVal["SQLTXT"] = "insert into CMN_TEAM
(
	TEAMCD, TEAMNM, USE_YN, INTRO_PGMID
	, ADD_DT, ADD_ID
)
select
	#{TEAMCD}, #{TEAMNM}, 'Y', #{INTRO_PGMID}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
from dual
where 0 = ( select count(*) as CNT from CMN_TEAM where TEAMCD = #{TEAMCD} )
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
		return $RtnVal;
    }  
	//GRP    
	public function delGrpG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delGrpG";
		$RtnVal["SQLTXT"] = "delete from CMN_TEAM where TEAM_SEQ = #{TEAM_SEQ}
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
		$RtnVal["SQLTXT"] = "insert into CMN_TEAM
(
	TEAMCD, TEAMNM, USE_YN, INTRO_PGMID
	, ADD_DT, ADD_ID
) values (
	#{TEAMCD}, #{TEAMNM}, #{USE_YN}, #{INTRO_PGMID}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
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
 TEAM_SEQ, TEAMCD, TEAMNM, USE_YN, INTRO_PGMID
 , ADD_DT, ADD_ID, MOD_DT, MOD_ID
from CMN_TEAM
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//TEAM    
	public function selNo($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selNo";
		$RtnVal["SQLTXT"] = "select
	'0' as CHK, TEAMCD, TEAMNM
from CMN_USR
where 
TEAMCD is not null and TEAMCD <> ''
and TEAMCD not in 
	(
	select TEAMCD from CMN_TEAM
	)
group by TEAMCD,TEAMNM";
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
		$RtnVal["SQLTXT"] = "update CMN_TEAM set
	TEAM_NM = #{TEAM_NM}, USE_YN = #{USE_YN}, INTRO_PGMID = #{INTRO_PGMID}
	,MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where TEAM_SEQ = #{TEAM_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
		return $RtnVal;
    }  
}
                                                             
?>