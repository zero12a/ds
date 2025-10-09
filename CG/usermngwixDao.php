<?php
//DAO
 
class usermngwixDao
{
	function __construct(){
		global $log;
		$log->info("UsermngwixDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("UsermngwixDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("UsermngwixDao-__toString");
	}
	//USR    
	public function chgUserPwG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "chgUserPwG";
		$RtnVal["SQLTXT"] = "update CG_USERS set
 PASSWD = #{PASSWD}
 , LASTPWCHGDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where USERSEQ = #{USERSEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "si";
		return $RtnVal;
    }  
	//FILE    
	public function delFileG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "delFileG";
		$RtnVal["SQLTXT"] = "update CG_FILESTORE set
	DELYN = 'Y'
	, DELDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where FILESTORESEQ = #{FILESTORESEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//FILE    
	public function insFileG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "insFileG";
		$RtnVal["SQLTXT"] = "insert into CG_FILESTORE (
	USERSEQ, UPLOADDIR, READURL, STORETYPE, STOREID
	, STORENM, CREKEY, CRESECRET, REGION, BUCKET
	, ACL, USEYN
	, ADDDT 
) values (
	#{G2-USERSEQ}, #{UPLOADDIR}, #{READURL}, #{STORETYPE}, #{STOREID}
	, #{STORENM}, #{CREKEY}, #{CRESECRET}, #{REGION}, #{BUCKET}
	, #{ACL}, #{USEYN}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "isssssssssss";
		return $RtnVal;
    }  
	//SvR    
	public function insSvrG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "insSvrG";
		$RtnVal["SQLTXT"] = "INSERT INTO CG_SVR (
	SVRID, SVRNM, PJTSEQ, USERSEQ, DBDRIVER
	, DBHOST, DBPORT, DBNAME, DBUSRID, DBUSRPW
	, USEYN
	, ADDDT
)VALUES(
	#{SVRID},#{SVRNM},#{PJTSEQ}, #{USERSEQ}, #{DBDRIVER}
	, #{DBHOST}, #{DBPORT}, #{DBNAME}, #{DBUSRID}, #{DBUSRPW}
	, #{USEYN}
	,date_format(sysdate(),'%Y%m%d%H%i%s')
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssiisssssss";
		return $RtnVal;
    }  
	//USR    
	public function insUserG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "insUserG";
		$RtnVal["SQLTXT"] = "";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//FILE    
	public function selFileG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selFileG";
		$RtnVal["SQLTXT"] = "select
	FILESTORESEQ, USERSEQ, UPLOADDIR, READURL, STORETYPE
	, STOREID, STORENM, CREKEY, CRESECRET, REGION
	, BUCKET, ACL, USEYN
	, ADDDT, MODDT 
from
	CG_FILESTORE
where USERSEQ = #{G2-USERSEQ} and DELYN = 'N'
";
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
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selPjtG";
		$RtnVal["SQLTXT"] = "select
	USERSEQ, PJTSEQ, ADDDT, MODDT
from 
	CG_PJTUSER
where USERSEQ = #{G2-USERSEQ}
 ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//SVR    
	public function selSvrG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selSvrG";
		$RtnVal["SQLTXT"] = "select
	SVRSEQ,SVRID,SVRNM, PJTSEQ, USERSEQ
	,DBDRIVER, DBHOST, DBPORT, DBNAME, DBUSRID
	, DBUSRPW,USEYN
	,ADDDT, MODDT
from 
	CG_SVR
where USERSEQ = #{G2-USERSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//USR    
	public function selUserG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "selUserG";
		$RtnVal["SQLTXT"] = "select 
 USERSEQ, EMAIL,'--Hashed--' as PASSWD, EMAILVALIDYN,LASTPWCHGDT
 , PWFAILCNT, LOCKYN, FREEZEDT, LOCKDT, SERVERSEQ
 , ADDDT, MODDT
from
 CG_USERS
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//FILE    
	public function updFileG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "updFileG";
		$RtnVal["SQLTXT"] = "update CG_FILESTORE set
	USERSEQ = #{G2-USERSEQ}, STORETYPE = #{STORETYPE}, UPLOADDIR = #{UPLOADDIR}, READURL = #{READURL}, STOREID = #{STOREID}
	, STORENM = #{STORENM}, CREKEY = #{CREKEY}, CRESECRET = #{CRESECRET}, REGION = #{REGION}, BUCKET = #{BUCKET}
	, ACL = #{ACL}, USEYN = #{USEYN}
	, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where FILESTORESEQ = #{FILESTORESEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "isssssssssssi";
		return $RtnVal;
    }  
	//SVR    
	public function updSvrG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "updSvrG";
		$RtnVal["SQLTXT"] = "update CG_SVR
set
	SVRNM = #{SVRNM}, USERSEQ = #{USERSEQ}, DBDRIVER = #{DBDRIVER}, DBHOST = #{DBHOST},DBPORT = #{DBPORT}
	, DBNAME = #{DBNAME}, DBUSRID = #{DBUSRID}, DBUSRPW = #{DBUSRPW}, USEYN = #{USEYN}
	, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where SVRSEQ = #{SVRSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sisssssssi";
		return $RtnVal;
    }  
	//USR    
	public function updUserG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "updUserG";
		$RtnVal["SQLTXT"] = "update CG_USERS set
 EMAIL = #{EMAIL}, PWFAILCNT = #{PWFAILCNT}, LOCKYN = #{LOCKYN},LOCKDT = #{LOCKDT}
 , MODDT = date_format(sysdate(),'%Y%m%d%H%i%s')
where USERSEQ = #{USERSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sissi";
		return $RtnVal;
    }  
}
                                                             
?>