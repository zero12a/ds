<?php
//DAO
 
class rdusrmngDao
{
	function __construct(){
		global $log;
		$log->info("RdusrmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RdusrmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RdusrmngDao-__toString");
	}
	//USR    
	public function chgUserPwG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "chgUserPwG";
		$RtnVal["SQLTXT"] = "update CMN_USR set
	USR_PWD = #{USR_PWD}
	, PW_CHG_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
where USR_SEQ = #{USR_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "si";
		return $RtnVal;
    }  
	//USR    
	public function delUserG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delUserG";
		$RtnVal["SQLTXT"] = "delete from CMN_USR where USR_SEQ = #{USR_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//USR    
	public function insUserG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insUserG";
		$RtnVal["SQLTXT"] = "insert into CMN_USR (
	USR_ID, USR_NM, PHONE, USE_YN, USR_PWD
	, PW_ERR_CNT, LAST_STATUS, LOCK_LIMIT_DT, LOCK_LAST_DT, EXPIRE_DT
	, PW_CHG_DT, PW_CHG_ID, LDAP_LOGIN_YN, TEAMCD, TEAMNM
	, ADD_DT,
) values (
	#{USR_ID}, #{USR_NM}, #{PHONE}, #{USE_YN}, #{USR_PWD}
	, #{PW_ERR_CNT}, #{LAST_STATUS}, #{LOCK_LIMIT_DT}, #{LOCK_LAST_DT}, #{EXPIRE_DT}
	, #{PW_CHG_DT}, #{PW_CHG_ID}, #{LDAP_LOGIN_YN}, #{TEAMCD}, #{TEAMNM}
	, date_format(sysdate(),'%Y%m%d%H%i%s')
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssisssssssss";
		return $RtnVal;
    }  
	//GRP    
	public function selGrp($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selGrp";
		$RtnVal["SQLTXT"] = "SELECT 
	a.USR_SEQ, a.GRP_SEQ, b.GRP_NM, b.USE_YN, a.ADD_DT
FROM 
	CMN_GRP_USR a 
	join CMN_GRP b 
		on a.GRP_SEQ = b.GRP_SEQ
WHERE a.USR_SEQ = #{G2-USR_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//TEAM    
	public function selTeam($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selTeam";
		$RtnVal["SQLTXT"] = "SELECT 
	a.USR_SEQ, b.TEAM_SEQ, b.TEAMCD, b.TEAMNM, b.USE_YN, a.ADD_DT
FROM 
	CMN_USR a 
	join CMN_TEAM b 
		on a.TEAMCD = b.TEAMCD
WHERE a.USR_SEQ = #{G2-USR_SEQ}";
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
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "selUserG";
		$RtnVal["SQLTXT"] = "select 
 '0' as CHK, USR_SEQ, USR_ID, USR_NM, PHONE, USE_YN
 , USR_PWD, PW_ERR_CNT, LAST_STATUS, LOCK_LIMIT_DT, LOCK_LAST_DT
 , EXPIRE_DT, PW_CHG_DT, PW_CHG_ID, LDAP_LOGIN_YN, TEAMCD, TEAMNM
 , ADD_DT, MOD_DT
from
 CMN_USR
where 1=1
	and case when length(#{C1-USR_ID}) > 0 then 
		USR_ID like concat('%',#{C1-USR_ID},'%') 
	else 1 = 1
	end
	and case when length(#{C1-USR_NM}) > 0 then 
		USR_NM like concat('%',#{C1-USR_NM},'%') 
	else 1 = 1
	end
	and case when length(#{C1-TEAMNM}) > 0 then 
		TEAMNM like concat('%',#{C1-TEAMNM},'%') 
	else 1 = 1
	end


";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssss";
		return $RtnVal;
    }  
	//USR    
	public function unLockUsr($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "unLockUsr";
		$RtnVal["SQLTXT"] = "update CMN_USR set
	PW_ERR_CNT = 0, LOCK_LIMIT_DT = null, LOCK_LAST_DT = null
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s'), MOD_ID = #{USER.SEQ}
where USR_SEQ = #{USR_SEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
	//USR    
	public function updUserG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "updUserG";
		$RtnVal["SQLTXT"] = "update CMN_USR set
	USR_ID = #{USR_ID}, USR_NM = #{USR_NM}, PHONE = #{PHONE}, USE_YN = #{USE_YN}, PW_ERR_CNT = #{PW_ERR_CNT}
	, LAST_STATUS = #{LAST_STATUS}, LOCK_LIMIT_DT = #{LOCK_LIMIT_DT}, LOCK_LAST_DT = #{LOCK_LAST_DT}, EXPIRE_DT = #{EXPIRE_DT}, PW_CHG_DT = #{PW_CHG_DT}
	, PW_CHG_ID = #{PW_CHG_ID}, LDAP_LOGIN_YN = #{LDAP_LOGIN_YN}, TEAMCD = #{TEAMCD}, TEAMNM = #{TEAMNM}
	, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
where USR_SEQ = #{USR_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssisssssssssi";
		return $RtnVal;
    }  
}
                                                             
?>