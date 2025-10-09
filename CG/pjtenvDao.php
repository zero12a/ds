<?php
//DAO
 
class pjtenvDao
{
	function __construct(){
		global $log;
		$log->info("PjtenvDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("PjtenvDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("PjtenvDao-__toString");
	}
	//FILE    
	public function fileC($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "fileC";
		$RtnVal["SQLTXT"] = "INSERT INTO CG_PJTFILE (
	MKFILETYPE, MKFILETYPENM, MKFILEFORMAT, MKFILEEXT
	, TEMPLATE, FILEORD, USEYN, ADDDT, ADDID
) VALUES (
	#{MKFILETYPE}, #{MKFILETYPENM}, #{MKFILEFORMAT}, #{MKFILEEXT}
	,#{TEMPLATE}, #{FILEORD}, #{USEYN}, date_format(sysdate(),'%Y%m%d%H%i%s'), #{USER.SEQ}
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssi";
		return $RtnVal;
    }  
	//FILE    
	public function fileR($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "fileR";
		$RtnVal["SQLTXT"] = "SELECT FILESEQ,MKFILETYPE,MKFILETYPENM,MKFILEFORMAT,MKFILEEXT,TEMPLATE,FILEORD,USEYN,ADDDT,MODDT
FROM CG_PJTFILE";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//FILE    
	public function fileU($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "fileU";
		$RtnVal["SQLTXT"] = "UPDATE CG_PJTFILE SET
	MKFILETYPE = #{MKFILETYPE}, MKFILETYPENM = #{MKFILETYPENM}, MKFILEFORMAT = #{MKFILEFORMAT}, MKFILEEXT = #{MKFILEEXT}, TEMPLATE = #{TEMPLATE}
	, FILEORD = #{FILEORD}, USEYN = #{USEYN}
	, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = #{USER.SEQ}
WHERE FILESEQ = #{FILESEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssis";
		return $RtnVal;
    }  
	//CONFIG    
	public function impC($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "impC";
		$RtnVal["SQLTXT"] = "insert into CG_PJTCFG (
 CFGID, CFGNM, MVCGBN, PATH
 , CFGORD, USEYN
 , ADDDT, ADDID
) values (
 #{CFGID}, #{CFGNM}, #{MVCGBN}, #{PATH}
 , #{CFGORD}, #{USEYN}
 , date_format(sysdate(),'%Y%m%d%H%i%s'), #{USER.SEQ}
) 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssisi";
		return $RtnVal;
    }  
	//CONFIG    
	public function impD($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "impD";
		$RtnVal["SQLTXT"] = "delete from CG_PJTCFG
where  CFGSEQ = #{CFGSEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//CONFIG    
	public function impR($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "impR";
		$RtnVal["SQLTXT"] = "select 
 CFGSEQ, USEYN, CFGID, CFGNM, MVCGBN
 , PATH, CFGORD
 , ADDDT, MODDT
from CG_PJTCFG


";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//CONFIG    
	public function impU($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "impU";
		$RtnVal["SQLTXT"] = "update CG_PJTCFG set
	CFGID = #{CFGID}, CFGNM = #{CFGNM}, MVCGBN = #{MVCGBN}, PATH = #{PATH}, USEYN = #{USEYN}
	, CFGORD = #{CFGORD}, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = #{USER.SEQ}
where CFGSEQ = #{CFGSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssiii";
		return $RtnVal;
    }  
}
                                                             
?>