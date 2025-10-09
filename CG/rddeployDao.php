<?php
//DAO
 
class rddeployDao
{
	function __construct(){
		global $log;
		$log->info("RddeployDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("RddeployDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("RddeployDao-__toString");
	}
	//SVCAUTH    
	public function delAuth($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delAuth";
		$RtnVal["SQLTXT"] = "delete from CMN_AUTH
where AUTH_SEQ = #{AUTH_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//SVCMNU    
	public function delMnu($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "delMnu";
		$RtnVal["SQLTXT"] = "delete from CMN_MNU
where MNU_SEQ = #{MNU_SEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//SVCAUTH    
	public function insSvcAuth($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insSvcAuth";
		$RtnVal["SQLTXT"] = "insert into CMN_AUTH (
	PGMID, AUTH_ID, AUTH_NM, USE_YN
	,ADD_DT
)
select 
	#{PGMID} as PGMID, #{AUTH_ID} as AUTH_ID, #{AUTH_NM} as AUTH_NM, 'Y' as USE_YN
	, date_format(sysdate(),'%Y%m%d%H%i%s') as ADD_DT
from dual
where 
 0 =  ( select count(AUTH_SEQ)  from CMN_AUTH where PGMID = #{PGMID} and AUTH_ID = #{AUTH_ID})
limit 1";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssss";
		return $RtnVal;
    }  
	//SVCMNU    
	public function insSvcPgmG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "insSvcPgmG";
		$RtnVal["SQLTXT"] = "insert into CMN_MNU (
	MNU_NM, PGMID, URL, PGMTYPE, MNU_ORD
	, USE_YN, ADD_DT, ADD_ID
)
select 
	#{PGMNM} as MNU_NM, #{PGMID} as PGMID, #{VIEWURL} as URL, #{PGMTYPE} as PGMTYPE, 10 as MNU_ORD
	, 'Y' as USE_YN, date_format(sysdate(),'%Y%m%d%H%i%s') as ADD_DT, 0 as ADD_ID
from dual
where 
 0 =  ( select count(MNU_SEQ)  from CMN_MNU where PGMID = #{PGMID} )
limit 1";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssss";
		return $RtnVal;
    }  
	//AUTH    
	public function sAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "sAuthG"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sAuthG";
		$RtnVal["SQLTXT"] = "SELECT 
 	0 as CHK
	, concat(p.PGMID,'-',g.GRPID,'_',f.FNCID) as ROWID
	, p.PGMID 
	, concat(g.GRPID,'_',f.FNCID) as AUTH_ID
	, concat(g.GRPNM,'_',f.FNCNM) as AUTH_NM 
	, f.ADDDT
FROM 
      CG_PGMGRP g
      JOIN CG_PGMFNC f on g.GRPSEQ = f.GRPSEQ and g.PGMSEQ = f.PGMSEQ
      JOIN CG_PGMINFO p on p.PGMSEQ = g.PGMSEQ
WHERE p.PJTSEQ = #{G1-PJTSEQ} AND ( f.FNCTYPE != '' && f.FNCTYPE is not null )
	and case when length(#{G1-PGMID}) > 0 then 
			p.PGMID like concat('%',#{G1-PGMID},'%')
		else 1=1 end
	and case when length(#{G1-AUTH_ID}) > 0 then 
			concat(g.GRPID,'_',f.FNCID)  = #{G1-AUTH_ID}
		else 1=1 end
	and case when length(#{G1-AUTH_NM}) > 0 then 
		concat(g.GRPNM,'_',f.FNCNM) like concat('%', #{G1-AUTH_NM}, '%')
	else 1=1 end
order by p.PGMID,g.GRPORD asc,f.FNCORD asc  
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "issssss";
		return $RtnVal;
    }  
	//PGM    
	public function sPgmG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "sPgmG"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sPgmG";
		$RtnVal["SQLTXT"] = "SELECT 
	0 as CHK, PGMSEQ, PGMID, PGMNM, PKGGRP, VIEWURL, PGMTYPE, SECTYPE, ADDDT, MODDT
FROM 
	CG_PGMINFO
WHERE PJTSEQ = #{G1-PJTSEQ}
	and case when length(#{G1-PGMID}) > 0 then 
		PGMID like concat('%', #{G1-PGMID}, '%')
	else 1 = 1 end
	and case when length(#{G1-PGMNM}) > 0 then 
		PGMNM like concat('%',#{G1-PGMNM},'%')
	else 1 = 1 end
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "issss";
		return $RtnVal;
    }  
	//SVCAUTH    
	public function sSvcAuthG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "sSvcAuthG";
		$RtnVal["SQLTXT"] = "SELECT 
	'0' as CHK, AUTH_SEQ, PGMID, AUTH_ID, AUTH_NM, USE_YN
	, ADD_DT, MOD_DT 
FROM CMN_AUTH
WHERE 1 = 1
	and case when length(#{G1-PGMID}) > 0 then 
		PGMID like concat('%',#{G1-PGMID},'%')
		else 1=1 end
	and case when length(#{G1-AUTH_ID}) > 0 then 
		AUTH_ID  like concat('%', #{G1-AUTH_ID}, '%')
		else 1=1 end
	and case when length(#{G1-AUTH_NM}) > 0 then 
		AUTH_NM like concat('%', #{G1-AUTH_NM}, '%')
		else 1=1 end";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssss";
		return $RtnVal;
    }  
	//SVCMNU    
	public function sSvcMenuG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "RDCOMMON";
		$RtnVal["SQLID"] = "sSvcMenuG";
		$RtnVal["SQLTXT"] = "SELECT 
	'0' as CHK, MNU_SEQ, MNU_NM, PGMID, URL, PGMTYPE
	, MNU_ORD, USE_YN, ADD_DT, ADD_ID
	,MOD_DT, MOD_ID  
FROM CMN_MNU
WHERE 1 = 1
	and case when length(#{G1-PGMID}) > 0 then 
		PGMID like concat('%', #{G1-PGMID}, '%')
	else 1 = 1 end
	and case when length(#{G1-PGMNM}) > 0 then 
		MNU_NM like concat('%',#{G1-PGMNM},'%')
	else 1 = 1 end
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssss";
		return $RtnVal;
    }  
}
                                                             
?>