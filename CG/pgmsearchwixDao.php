<?php
//DAO
 
class pgmsearchwixDao
{
	function __construct(){
		global $log;
		$log->info("PgmsearchwixDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("PgmsearchwixDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("PgmsearchwixDao-__toString");
	}
	//PGM    
	public function selPgmG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CG";
		$RtnVal["SQLID"] = "selPgmG";
		$RtnVal["SQLTXT"] = "SELECT PGMID,PGMNM,ADDDT,MODDT FROM CG_PGMINFO WHERE PJTSEQ = #{G2-PJTSEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//PJT    
	public function selPjtG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CG";
		$RtnVal["SQLID"] = "selPjtG";
		$RtnVal["SQLTXT"] = "SELECT PJTSEQ,PJTID,PJTNM FROM CG_PJTINFO";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>