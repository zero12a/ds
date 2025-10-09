<?php
//DAO
 
class menumngDao
{
	function __construct(){
		global $log;
		$log->info("MenumngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("MenumngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("MenumngDao-__toString");
	}
	//폴더 이동    
	public function chgFolderG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "chgFolderG";
		$RtnVal["SQLTXT"] = "update CMN_MNU set
	FOLDER_SEQ = #{G5-FOLDER_SEQ}
	,MOD_DT =  date_format(sysdate(),'%Y%m%d%H%i%s')
	,MOD_ID = #{USER.SEQ}
where MNU_SEQ = #{MNU_SEQ}

";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "iis";
		return $RtnVal;
    }  
	//delMenuG    
	public function delMenuG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "delMenuG";
		$RtnVal["SQLTXT"] = "delete from CMN_MNU
where MNU_SEQ = #{MNU_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//insMenuG    
	public function insMenuG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "insMenuG";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU (
	PGMID, MNU_NM, URL, MNU_ORD, FOLDER_SEQ
	,USE_YN, PGMTYPE, ADD_DT, ADD_ID
) values (
	#{PGMID}, #{MNU_NM}, #{URL}, if(#{MNU_ORD}='',10,#{MNU_ORD}), #{FOLDER_SEQ}
	,if(#{USE_YN}='','Y',#{USE_YN}), #{PGMTYPE}, date_format(sysdate(),'%Y%m%d%H%i%s'), #{USER.SEQ}
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssisssi";
		return $RtnVal;
    }  
	//건수의 폴더    
	public function selCntToMnuG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selCntToMnuG";
		$RtnVal["SQLTXT"] = "select 
	0 as CHK, MNU_SEQ, PGMID, MNU_NM, URL
	, PGMTYPE, MNU_ORD, FOLDER_SEQ, USE_YN
	, ADD_DT, ADD_ID, MOD_ID, MOD_DT
from CMN_MNU
where FOLDER_SEQ = #{G4-FOLDER_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//selFoldG    
	public function selFoldG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selFoldG";
		$RtnVal["SQLTXT"] = "select
 FOLDER_SEQ, FOLDER_NM, USE_YN, FOLDER_ORD, ADD_DT, ADD_ID, MOD_DT, MOD_ID
from
	CMN_FOLDER

";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//메뉴폴더별건수    
	public function selMenuFoldSumG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selMenuFoldSumG";
		$RtnVal["SQLTXT"] = "select 
	FOLDER_SEQ, count(MNU_SEQ) AS CNT
from CMN_MNU
group by  FOLDER_SEQ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//selMenuG    
	public function selMenuG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selMenuG";
		$RtnVal["SQLTXT"] = "select 
	0 as CHK, MNU_SEQ, PGMID, MNU_NM, URL
	, PGMTYPE, MNU_ORD, FOLDER_SEQ, USE_YN
	, ADD_DT, ADD_ID, MOD_ID, MOD_DT
from CMN_MNU
where FOLDER_SEQ = #{G2-FOLDER_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//updMenuG    
	public function updMenuG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "updMenuG";
		$RtnVal["SQLTXT"] = "update CMN_MNU set
	PGMID = #{PGMID}, MNU_NM = #{MNU_NM}, MNU_ORD = if(#{MNU_ORD}='',10,#{MNU_ORD}), FOLDER_SEQ = #{FOLDER_SEQ}, USE_YN = #{USE_YN}
	,PGMTYPE = #{PGMTYPE}
	,MOD_DT =  date_format(sysdate(),'%Y%m%d%H%i%s')
	,MOD_ID = #{USER.SEQ}
where MNU_SEQ = #{MNU_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssissis";
		return $RtnVal;
    }  
}
                                                             
?>