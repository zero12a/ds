<?php
//DAO
 
class jqxgridDao
{
	function __construct(){
		global $log;
		$log->info("JqxgridDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("JqxgridDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("JqxgridDao-__toString");
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
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "iss";
		return $RtnVal;
    }  
	//sGrp    
	public function sGrp($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "sGrp";
		$RtnVal["SQLTXT"] = "select PJTSEQ, PGMSEQ, GRPSEQ, GRPNM 
from CG_PGMGRP
where PJTSEQ = #{G2-PJTSEQ} and PGMSEQ = #{G2-PGMSEQ}";
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
		$RtnVal["SQLTXT"] = "select PJTSEQ, PGMSEQ, PGMID, PGMNM from CG_PGMINFO";
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
		$RtnVal["SQLTXT"] = "update CG_PGMINFO set PGMNM = #{PGMNM}, PGMID = #{PGMID} where PJTSEQ = #{PJTSEQ} and PGMSEQ = #{PGMSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssii";
		return $RtnVal;
    }  
}
                                                             
?>