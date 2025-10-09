<?php
//DAO
 
class perfwixdtDao
{
	function __construct(){
		global $log;
		$log->info("PerfwixdtDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("PerfwixdtDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("PerfwixdtDao-__toString");
	}
	//savRst    
	public function savRst($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "savRst";
		$RtnVal["SQLTXT"] = "update CG_RST set
	FILETYPE = #{FILETYPE}, VERSEQ = #{VERSEQ}, SRCTXT = #{SRCTXT}
where
	RSTSEQ = #{RSTSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array("VERSEQ"	);
		$RtnVal["BINDTYPE"] = "sisi";
		return $RtnVal;
    }  
	//selRst    
	public function selRst($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "selRst";
		$RtnVal["SQLTXT"] = "select 
	RSTSEQ, PJTSEQ, concat(PGMSEQ,'^http://www.naver.com/?',PGMSEQ,'^_blank') as PGMSEQ, concat(FILETYPE,'^') as FILETYPE, VERSEQ
	, SRCORD, SRCTXT, ADDDT, MODDT
from
	CG_RST
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>