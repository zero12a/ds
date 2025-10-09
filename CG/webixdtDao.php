<?php
//DAO
 
class webixdtDao
{
	function __construct(){
		global $log;
		$log->info("WebixdtDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("WebixdtDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("WebixdtDao-__toString");
	}
	//delG    
	public function delG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "delG";
		$RtnVal["SQLTXT"] = "delete from  CG_PGMINFO where PJTSEQ = #{PJTSEQ} and PGMSEQ = #{PGMSEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
	//insG    
	public function insG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "insG";
		$RtnVal["SQLTXT"] = "insert into CG_PGMINFO (
	PJTSEQ, PGMID, PGMNM, PGMTYPE
	, ADDDT, ADDID
)values (
	#{PJTSEQ}, #{PGMID}, #{PGMNM}, 'NORMAL'
	, date_format(sysdate(),'%Y%m%d%H%i%s'), 0
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "iss";
		return $RtnVal;
    }  
	//sGrpG    
	public function sGrpG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "sGrpG";
		$RtnVal["SQLTXT"] = "select PJTSEQ, PGMSEQ, GRPSEQ, GRPID, GRPNM, GRPTYPE 
from CG_PGMGRP 
where PJTSEQ = #{G2-PJTSEQ} and PGMSEQ = #{G2-PGMSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
	//selF    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select PJTSEQ, PGMSEQ, PGMID, PGMNM, PGMTYPE 
from CG_PGMINFO
where PJTSEQ = #{G2-PJTSEQ} and PGMSEQ = #{G2-PGMSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
	//selG    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select 
	PJTSEQ, PGMSEQ, PGMID, PGMNM, PGMTYPE
	, concat(substr(ADDDT,1,4),'-', substr(ADDDT,5,2), '-', substr(ADDDT,7,2)) as ADDDT
	, if(LOGINYN = 'Y','on','off') as LOGINYN
from CG_PGMINFO
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//updG    
	public function updG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "updG";
		$RtnVal["SQLTXT"] = "update CG_PGMINFO set
	PGMID = #{PGMID}, PGMNM = #{PGMNM}
	,MODDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where PJTSEQ = #{PJTSEQ} and PGMSEQ = #{PGMSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssii";
		return $RtnVal;
    }  
	//updGrp    
	public function updGrp($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "updGrp";
		$RtnVal["SQLTXT"] = "update CG_PGMGRP set
	GRPID = #{GRPID}, GRPNM = #{GRPNM}
	,MODDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where PJTSEQ = #{PJTSEQ} and PGMSEQ = #{PGMSEQ} and GRPSEQ = #{GRPSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssiii";
		return $RtnVal;
    }  
}
                                                             
?>