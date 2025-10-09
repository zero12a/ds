<?php
//DAO
 
class rdmnuauthmngDao
{
	function __construct(){
		global $log;
		$log->info("RdmnuauthmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdmnuauthmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdmnuauthmngDao-__toString");
	}
	//AUTH    
	public function delAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delAuthG";
		$RtnVal["SQLTXT"] = "delete from 
	CMN_AUTH
where AUTH_SEQ = #{AUTH_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//MNU    
	public function delMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delMnu";
		$RtnVal["SQLTXT"] = "delete from  CMN_MNU
where
	MNU_SEQ = #{MNU_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//AUTH    
	public function insAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insAuthG";
		$RtnVal["SQLTXT"] = "insert into CMN_AUTH (
	PGMID, AUTH_ID, AUTH_NM, USE_YN
	, ADD_DT
) values (
	#{PGMID}, #{AUTH_ID}, #{AUTH_NM}, if(#{USE_YN}='N','N','Y')
	,date_format(sysdate(),'%Y%m%d%H%i%s')
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
		return $RtnVal;
    }  
	//MNU    
	public function insMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insMnu";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU (
	MNU_NM, PGMID, URL, PGMTYPE, MNU_ORD
	, USE_YN
	, ADD_DT, ADD_ID
) values (
	#{MNU_NM}, #{PGMID}, #{URL}, #{PGMTYPE}, #{MNU_ORD}
	, #{USE_YN}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssss";
		return $RtnVal;
    }  
	//AUTH    
	public function selAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selAuthG";
		$RtnVal["SQLTXT"] = "select 
	'0' as CHK, AUTH_SEQ, PGMID, AUTH_ID, AUTH_NM, USE_YN
	, ADD_DT, MOD_DT, concat(PGMID,'^',AUTH_NM,'^','G2') AS PGMID2
from CMN_AUTH
where 
	PGMID like if(#{G1-PGMID} = '','%',#{G1-PGMID})
	and AUTH_ID like if(#{G1-AUTH_ID} = '','%',#{G1-AUTH_ID})
	and AUTH_NM like if(#{G1-AUTH_NM} = '','%',concat('%',#{G1-AUTH_NM},'%'))
order by PGMID asc, AUTH_ID asc
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssss";
		return $RtnVal;
    }  
	//MNU    
	public function selMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selMnu";
		$RtnVal["SQLTXT"] = "select
	'0' as CHK, MNU_SEQ, MNU_NM, PGMID
	, URL, PGMTYPE, MNU_ORD, USE_YN
	, ADD_DT, ADD_ID, MOD_DT, MOD_ID 
from 
	CMN_MNU
where
	PGMID like if(#{G1-PGMID} = '','%',#{G1-PGMID})
	and MNU_NM like if(#{G1-MNU_NM} = '','%',concat('%',#{G1-MNU_NM},'%'))
order by 
	PGMID asc";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
		return $RtnVal;
    }  
	//AUTH    
	public function updAuth($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updAuth";
		$RtnVal["SQLTXT"] = "update CMN_AUTH set
	PGMID = #{PGMID}, AUTH_ID = #{AUTH_ID}, AUTH_NM = #{AUTH_NM}, USE_YN = #{USE_YN}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
where AUTH_SEQ = #{AUTH_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssi";
		return $RtnVal;
    }  
	//MNU    
	public function updMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updMnu";
		$RtnVal["SQLTXT"] = "update CMN_MNU set
	MNU_NM = #{MNU_NM}, PGMID = #{PGMID}, URL = #{URL}, PGMTYPE = #{PGMTYPE}, MNU_ORD = #{MNU_ORD}
	, USE_YN = #{USE_YN}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = 0
where
	MNU_SEQ = #{MNU_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssss";
		return $RtnVal;
    }  
}
                                                             
?>