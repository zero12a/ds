<?php
//DAO
 
class seqtestDao
{
	function __construct(){
		global $log;
		$log->info("SeqtestDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("SeqtestDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("SeqtestDao-__toString");
	}
	//insF    
	public function insF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "maCGPJT1";
		$RtnVal["SQLID"] = "insF";
		$RtnVal["SQLTXT"] = "insert into TEST( MYSEQ, MSG ) values 
(
	nextval(seqtest), #{G3-MSG}
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//insG    
	public function insG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "maCGPJT1";
		$RtnVal["SQLID"] = "insG";
		$RtnVal["SQLTXT"] = "insert into TEST( MYSEQ, MSG ) values 
(
	nextval(seqtest), #{MSG}
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//selF    
	public function selF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "maCGPJT1";
		$RtnVal["SQLID"] = "selF";
		$RtnVal["SQLTXT"] = "select MYSEQ, MSG 
from TEST
where MYSEQ = #{G2-MYSEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//selG    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "maCGPJT1";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "select MYSEQ, MSG from TEST
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>