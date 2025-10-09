<?php
//DAO
 
class authmngDao
{
	function __construct(){
		global $log;
		$log->info("AuthmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("AuthmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("AuthmngDao-__toString");
	}
	//체크삭제    
	public function delChkAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "delChkAuthG";
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
		$RtnVal["SVRID"] = "RDCOMMON2";
		$RtnVal["SQLID"] = "delMnu";
		$RtnVal["SQLTXT"] = "";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//권한추가    
	public function insAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "OS";
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
		$RtnVal["SVRID"] = "RDCOMMON2";
		$RtnVal["SQLID"] = "insMnu";
		$RtnVal["SQLTXT"] = "";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//selAuthG    
	public function selAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selAuthG";
		$RtnVal["SQLTXT"] = "select 
	0 as CHK, AUTH_SEQ, PGMID, AUTH_ID, AUTH_NM, USE_YN
	, ADD_DT, MOD_DT, concat(PGMID,'^',AUTH_NM,'^','G2') AS PGMID2
from CMN_AUTH
where PGMID like if(#{G1-PGMID} = '','%',#{G1-PGMID})
order by PGMID,AUTH_ID
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
	//MNU    
	public function selMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON2";
		$RtnVal["SQLID"] = "selMnu";
		$RtnVal["SQLTXT"] = "select
	MNU_SEQ, MNU_NM, PGMID, URL, PGMTYPE
	, MNU_ORD, USE_YN
	, ADD_DT, ADD_ID, MOD_DT, MOD_ID 
from 
	CMN_MNU
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//MNU    
	public function updMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON2";
		$RtnVal["SQLID"] = "updMnu";
		$RtnVal["SQLTXT"] = "";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>