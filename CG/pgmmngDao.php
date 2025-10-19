<?php
//DAO
 
class pgmmngDao
{
	function __construct(){
		global $log;
		$log->info("PgmmngDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("PgmmngDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("PgmmngDao-__toString");
	}
	//PJT    
	public function sql1($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sql1";
		$RtnVal["SQLTXT"] = "select
	PJTSEQ, PJTID, PJTNM, FILECHARSET, UITOOL
	, SVRLANG, DEPLOYKEY, PKGROOT, STARTDT, ENDDT
	, PJTORD, DSNM, DELYN, ADDDT, MODDT 
from
 CG_PJTINFO
where DELYN = 'N'
order by PJTORD asc


";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "";
		return $RtnVal;
    }  
	//DD    
	public function sql10($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "sql10"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql10";
		$RtnVal["SQLTXT"] = "select 
 a.PJTSEQ, a.DDSEQ, a.COLID, a.COLNM, a.COLSNM
 ,a.DATATYPE, a.DATASIZE, a.OBJTYPE, b.OBJTYPE as OBJTYPE_FORMVIEW, c.OBJTYPE as OBJTYPE_GRID
 ,a.LBLWIDTH, a.LBLHEIGHT, a.LBLALIGN, a.OBJWIDTH, a.OBJHEIGHT, a.OBJALIGN
 ,a.CRYPTCD, a.VALIDSEQ, a.PIYN, a.STOREID, #{G3-DSNM} as DSNM
 ,a.ADDDT, a.MODDT
from CG_DD a
	left outer join CG_DDOBJ b on a.DDSEQ = b.DDSEQ and b.GRPTYPE = 'FORMVIEW'
	left outer join CG_DDOBJ c on a.DDSEQ = c.DDSEQ and c.GRPTYPE = 'GRID'
where PJTSEQ = #{G3-PJTSEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "si";
		return $RtnVal;
    }  
	//DD    
	public function sql11($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "sql11"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql11";
		$RtnVal["SQLTXT"] = "insert into CG_DD (
	PJTSEQ, COLID, COLNM, COLSNM, DATATYPE
	, DATASIZE, OBJTYPE, LBLWIDTH, LBLHEIGHT, LBLALIGN
	, OBJWIDTH, OBJHEIGHT, OBJALIGN, CRYPTCD, VALIDSEQ
	, PIYN
	, ADDDT, ADDID
) values (
	#{PJTSEQ}, #{COLID}, #{COLNM}, #{COLSNM}, #{DATATYPE}
	, #{DATASIZE}, #{OBJTYPE}, #{LBLWIDTH}, #{LBLHEIGHT}, #{LBLALIGN}
	, #{OBJWIDTH}, #{OBJHEIGHT}, #{OBJALIGN}, #{CRYPTCD}, #{VALIDSEQ}, if(#{PIYN}='','N',#{PIYN})
	,date_format(sysdate(),'%Y%m%d%H%i%s'), #{USER.SEQ}
) 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "issssissssssssissi";
		return $RtnVal;
    }  
	//DD    
	public function sql12($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "sql12"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql12";
		$RtnVal["SQLTXT"] = "update CG_DD
set
	COLID = #{COLID}, COLNM = #{COLNM}, COLSNM = #{COLSNM}, DATATYPE = #{DATATYPE}, DATASIZE = #{DATASIZE}
	, OBJTYPE = #{OBJTYPE}, LBLWIDTH = #{LBLWIDTH}, LBLHEIGHT = #{LBLHEIGHT}, LBLALIGN = #{LBLALIGN}
	, OBJWIDTH = #{OBJWIDTH}, OBJHEIGHT = #{OBJHEIGHT}, OBJALIGN = #{OBJALIGN}, CRYPTCD = #{CRYPTCD}, VALIDSEQ = #{VALIDSEQ}
	, PIYN = #{PIYN}
	, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = #{USER.SEQ}
where PJTSEQ = #{PJTSEQ} and DDSEQ = #{DDSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssissssssssisiii";
		return $RtnVal;
    }  
	//DD    
	public function sql13($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "sql13"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql13";
		$RtnVal["SQLTXT"] = "delete from CG_DD 
where PJTSEQ = #{PJTSEQ} and DDSEQ = #{DDSEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
	//DDOBJ    
	public function sql14($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "sql14"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql14";
		$RtnVal["SQLTXT"] = "select
	DDSEQ, DDOBJSEQ, GRPTYPE, OBJTYPE, LBLALIGN
	, LBLWIDTH, OBJALIGN, OBJHEIGHT, OBJWIDTH, FNINIT
	, ADDDT, MODDT
from 
	CG_DDOBJ
where DDSEQ = #{G5-DDSEQ}
order by DDOBJSEQ desc";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//DDOBJ    
	public function sql15($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "sql15"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql15";
		$RtnVal["SQLTXT"] = "delete from CG_DDOBJ where DDSEQ = #{DDSEQ} and DDOBJSEQ = #{DDOBJSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
	//PJT    
	public function sql2($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sql2";
		$RtnVal["SQLTXT"] = "update CG_PJTINFO set DELYN = 'Y' where PJTSEQ = #{PJTSEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array("PJTSEQ"	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//PJT    
	public function sql3($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sql3";
		$RtnVal["SQLTXT"] = "update CG_PJTINFO set 
PJTID = #{PJTID}, PJTNM = #{PJTNM},FILECHARSET = #{FILECHARSET}, UITOOL = #{UITOOL}
, SVRLANG = #{SVRLANG}, STARTDT = #{STARTDT}, ENDDT = #{ENDDT}
, DEPLOYKEY = #{DEPLOYKEY}, PKGROOT = #{PKGROOT}, PJTORD = #{PJTORD}, DSNM = #{DSNM}
, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = #{USER.SEQ}
where PJTSEQ = #{PJTSEQ} 

";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssssisii";
		return $RtnVal;
    }  
	//PJT    
	public function sql4($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sql4";
		$RtnVal["SQLTXT"] = "insert into CG_PJTINFO (
	PJTID,PJTNM,FILECHARSET,UITOOL,SVRLANG
	, DEPLOYKEY, PKGROOT, STARTDT, ENDDT, PJTORD
	, DSNM
	,ADDDT,ADDID
) values (
	#{PJTID},#{PJTNM},#{FILECHARSET},#{UITOOL},#{SVRLANG}
	, #{DEPLOYKEY},#{PKGROOT},#{STARTDT},#{ENDDT},#{PJTORD}
	, #{DSNM}
	,date_format(sysdate(),'%Y%m%d%H%i%s'),#{USER.SEQ}
	)
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssssssssisi";
		return $RtnVal;
    }  
	//PGM    
	public function sql6($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "sql6"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql6";
		$RtnVal["SQLTXT"] = "select 
	PJTSEQ, PGMSEQ, PGMID, PGMNM, VIEWURL
	, PGMTYPE, POPWIDTH, POPHEIGHT, SECTYPE, PKGGRP
	, LOGINYN, DFTCTLGRPID, DFTCTLFNCID, PGMORD
	, ADDDT, MODDT 
from
 CG_PGMINFO	
where PJTSEQ = #{G3-PJTSEQ} 
 ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//PGM    
	public function sql7($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "sql7"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql7";
		$RtnVal["SQLTXT"] = "insert into CG_PGMINFO(
	 PJTSEQ, PGMID, PGMNM, PKGGRP, PGMTYPE
	, POPWIDTH, POPHEIGHT, SECTYPE, LOGINYN, DFTCTLGRPID
	, DFTCTLFNCID, PGMORD
	, ADDDT, ADDID
) values (
	 #{PJTSEQ},#{PGMID},#{PGMNM}, #{PKGGRP}, #{PGMTYPE}
	, #{POPWIDTH}, #{POPHEIGHT}, #{SECTYPE}, #{LOGINYN}, #{DFTCTLGRPID}
	, #{DFTCTLFNCID}, ${PGMORD}
	 ,date_format(sysdate(),'%Y%m%d%H%i%s'),#{USER.SEQ}
) 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "issssssssssi";
		return $RtnVal;
    }  
	//PGM    
	public function sql8($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "sql8"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql8";
		$RtnVal["SQLTXT"] = "update
 CG_PGMINFO
set 
 PGMNM = #{PGMNM}, PGMID = #{PGMID}, PKGGRP = #{PKGGRP}, PGMTYPE = #{PGMTYPE}
 , POPWIDTH = #{POPWIDTH}, POPHEIGHT = #{POPHEIGHT}, SECTYPE = #{SECTYPE}, LOGINYN = #{LOGINYN}, DFTCTLGRPID = #{DFTCTLGRPID}
 , DFTCTLFNCID = #{DFTCTLFNCID}, PGMORD = #{PGMORD}
 , MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = #{USER.SEQ}
where PJTSEQ = #{PJTSEQ} and PGMSEQ = #{PGMSEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ssssssssssiiii";
		return $RtnVal;
    }  
	//PGM    
	public function sql9($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "sql9"; //파라미터에서 서버ID를 받아 오는 경우
		$RtnVal["SQLID"] = "sql9";
		$RtnVal["SQLTXT"] = "delete from CG_PGMINFO
where PJTSEQ = #{PJTSEQ} and PGMSEQ = #{PGMSEQ} 
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ii";
		return $RtnVal;
    }  
}
                                                             
?>