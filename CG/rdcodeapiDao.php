<?php
//DAO
 
class rdcodeapiDao
{
	function __construct(){
		global $log;
		$log->info("RdcodeapiDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdcodeapiDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdcodeapiDao-__toString");
	}
	//sCodeD    
	public function sCodeD($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "sCodeD";
		$RtnVal["SQLTXT"] = "select CD,NM 
from CMN_CODED 
where PCD = #{G1-PCD} and DELYN = 'N' and USEYN='Y' 
order by ORD asc";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//폼    
	public function sCodeF($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "sCodeF";
		$RtnVal["SQLTXT"] = "select 
CODED_SEQ, CD, NM, CDDESC, PCD
, ORD, CDVAL, CDVAL2, CDMIN, CDMAX
, DATATYPE, EDITYN, FORMATYN, USEYN, DELYN
, ADDDT, MODDT 
from CMN_CODED 
where  PCD = #{G1-PCD} and CD = #{G1-CD} and DELYN = 'N' and USEYN='Y' 
order by   ORD asc ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
}
                                                             
?>