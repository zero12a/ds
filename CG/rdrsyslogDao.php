<?php
//DAO
 
class rdrsyslogDao
{
	function __construct(){
		global $log;
		$log->info("RdrsyslogDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdrsyslogDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdrsyslogDao-__toString");
	}
	//selG    
	public function selG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RSYSLOG";
		$RtnVal["SQLID"] = "selG";
		$RtnVal["SQLTXT"] = "SELECT ID,ReceivedAt,FromHost,Message,SysLogTag FROM `SystemEvents`  
where syslogtag like '%all%'
ORDER BY `SystemEvents`.`ID`  DESC
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
}
                                                             
?>