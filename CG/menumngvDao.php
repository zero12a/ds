<?php
//DAO
 
class menumngvDao
{
	function __construct(){
		global $log;
		$log->info("MenumngvDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("MenumngvDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("MenumngvDao-__toString");
	}
	//delM1    
	public function delM1($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "delM1";
		$RtnVal["SQLTXT"] = "delete from CMN_MNU1 where MNU1_SEQ = #{MNU1_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//demM2    
	public function delM2($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "delM2";
		$RtnVal["SQLTXT"] = "delete from CMN_MNU2 where MNU2_SEQ = #{MNU2_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//insM1    
	public function insM1($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "insM1";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU1 (
	FOLDER_YN, FOLDER_NM, PGMID, MNU_ICON, MNU_ORD
	, ADD_DT
) values (
	#{FOLDER_YN},#{FOLDER_NM},#{PGMID},#{MNU_ICON},#{MNU_ORD}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssss";
		return $RtnVal;
    }  
	//insM1Choice    
	public function insM1Choice($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "insM1Choice";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU1 (
	FOLDER_YN, FOLDER_NM, PGMID, MNU_ICON, MNU_ORD
	, ADD_DT
) values (
	'N','',#{PGMID},#{G5-MNU_ICON},#{G5-MNU_ORD}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sss";
		return $RtnVal;
    }  
	//insM2    
	public function insM2($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "insM2";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU2 (
	MNU1_SEQ, PGMID,MNU_ORD
	, ADD_DT
) values (
	#{MNU1_SEQ},#{PGMID}, #{MNU_ORD}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "iss";
		return $RtnVal;
    }  
	//insM2Choice    
	public function insM2Choice($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "insM2Choice";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU2 (
	MNU1_SEQ, PGMID,MNU_ORD
	, ADD_DT
) values (
	#{G6-MNU1_SEQ},#{PGMID},#{G6-MNU_ORD}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "iss";
		return $RtnVal;
    }  
	//selM1    
	public function selM1($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selM1";
		$RtnVal["SQLTXT"] = "select
	MNU1_SEQ, FOLDER_YN, ifnull(FOLDER_NM,'') as FOLDER_NM, PGMID, MNU_ICON
	, MNU_ORD, ADD_DT, MOD_DT
from
	CMN_MNU1
order by MNU_ORD
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//selM2    
	public function selM2($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selM2";
		$RtnVal["SQLTXT"] = "select
	MNU2_SEQ, MNU1_SEQ, PGMID, MNU_ORD, ADD_DT, MOD_DT
from
	CMN_MNU2
where MNU1_SEQ = #{G2-MNU1_SEQ}
order by MNU_ORD
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//selP    
	public function selP($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "selP";
		$RtnVal["SQLTXT"] = "select 
	0 as CHK, MNU_SEQ, MNU_NM, PGMID, URL, PGMTYPE, MNU_ORD, USE_YN, ADD_DT,MOD_DT
from 
	CMN_MNU
where PGMID not in 
(
	select PGMID from CMN_MNU1 where FOLDER_YN = 'N'
	union all
	select PGMID from CMN_MNU2
)
order by MNU_ORD";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//updM1    
	public function updM1($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "updM1";
		$RtnVal["SQLTXT"] = "update CMN_MNU1 set
	FOLDER_YN = #{FOLDER_YN}, FOLDER_NM = #{FOLDER_NM}, PGMID = #{PGMID}, MNU_ICON = #{MNU_ICON}, MNU_ORD = #{MNU_ORD}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
where MNU1_SEQ = #{MNU1_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssi";
		return $RtnVal;
    }  
	//updM2    
	public function updM2($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "OS";
		$RtnVal["SQLID"] = "updM2";
		$RtnVal["SQLTXT"] = "update CMN_MNU2 set
	MNU1_SEQ = #{MNU1_SEQ}, PGMID = #{PGMID}, MNU_ORD = #{MNU_ORD}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
where MNU2_SEQ = #{MNU2_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "issi";
		return $RtnVal;
    }  
}
                                                             
?>