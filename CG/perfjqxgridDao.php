<?php
//DAO
 
class perfjqxgridDao
{
	function __construct(){
		global $log;
		$log->info("PerfjqxgridDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("PerfjqxgridDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("PerfjqxgridDao-__toString");
	}
	//selRst    
	public function selRst($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGPJT1";
		$RtnVal["SQLID"] = "selRst";
		$RtnVal["SQLTXT"] = "select 
	RSTSEQ, PJTSEQ, PGMSEQ, FILETYPE, VERSEQ
	, SRCORD, SRCTXT, ADDDT, MODDT
from
	CG_RST";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>