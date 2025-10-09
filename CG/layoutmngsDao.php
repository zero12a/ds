<?php
//DAO
 
class layoutmngsDao
{
	function __construct(){
		global $log;
		$log->info("LayoutmngsDao-__construct");
	}
	function __destruct(){
		global $log;
		$log->info("LayoutmngsDao-__destruct");
	}
	function __toString(){
		global $log;
		$log->info("LayoutmngsDao-__toString");
	}
	//LAYOUTD    
	public function dLayoutDG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "dLayoutDG";
		$RtnVal["SQLTXT"] = "DELETE FROM CG_LAYOUTD WHERE PJTSEQ = #{PJTSEQ} AND LAYOUTDSEQ = #{LAYOUTDSEQ}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "is";
		return $RtnVal;
    }  
	//LAYOUTD    
	public function dLayoutG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "dLayoutG";
		$RtnVal["SQLTXT"] = "DELETE FROM CG_LAYOUT WHERE LAYOUTID = #{LAYOUTID}";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//LAYOUTS    
	public function dLayoutSG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "D";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "dLayoutSG";
		$RtnVal["SQLTXT"] = "DELETE FROM CG_LAYOUTS WHERE LAYOUTSSEQ = #{LAYOUTSSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "i";
		return $RtnVal;
    }  
	//LAYOUTD    
	public function iLayoutDG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "iLayoutDG";
		$RtnVal["SQLTXT"] = "INSERT INTO CG_LAYOUTD (
	PJTSEQ, LAYOUTID, GRPID, REFGRPID, ORD
	, GRPTYPE, GRPWIDTH, GRPHEIGHT, VBOX
	, ADDDT, ADDID
) VALUES (
	#{PJTSEQ}, #{LAYOUTID}, #{GRPID}, #{REFGRPID}, #{ORD}
	, #{GRPTYPE}, #{GRPWIDTH}, #{GRPHEIGHT}, #{VBOX}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), #{USER.SEQ}
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "isssissssi";
		return $RtnVal;
    }  
	//LAYOUT    
	public function iLayoutG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "iLayoutG";
		$RtnVal["SQLTXT"] = "INSERT INTO CG_LAYOUT (
	PJTSEQ, LAYOUTID, GRPCNT
	, ADDDT, ADDID
) VALUES (
	#{PJTSEQ}, #{LAYOUTID}, #{GRPCNT}
	, date_format(sysdate(),'%Y%m%d%H%i%s'), #{USER.SEQ}
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "isii";
		return $RtnVal;
    }  
	//LAYOUTS    
	public function iLayoutSG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "C";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "iLayoutSG";
		$RtnVal["SQLTXT"] = "insert into CG_LAYOUTS (
	LAYOUTID,GRPID,REFGRPID,ORD,GRPTYPE
	,GRPWIDTH,GRPHEIGHT,PGRPID,SPLITGUTTERSIZE,SPLITDIRECTION
	,SPLITMINSIZE
	,ADDDT,ADDID
) values (
	#{LAYOUTID}, #{GRPID}, #{REFGRPID}, #{ORD}, #{GRPTYPE} 
	,#{GRPWIDTH}, #{GRPHEIGHT}, #{PGRPID}, #{SPLITGUTTERSIZE}, #{SPLITDIRECTION}
	,#{SPLITMINSIZE}
	,date_format(sysdate(),'%Y%m%d%H%i%s'),0
)";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssisssssss";
		return $RtnVal;
    }  
	//LAYOUTD    
	public function sLayoutDG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sLayoutDG";
		$RtnVal["SQLTXT"] = "SELECT 
	LAYOUTDSEQ, PJTSEQ, LAYOUTID, GRPID, REFGRPID
	, ORD, GRPTYPE, GRPWIDTH, GRPHEIGHT, VBOX
	, ADDDT, MODDT
FROM CG_LAYOUTD
WHERE LAYOUTID = #{G2-LAYOUTID}
ORDER BY ORD ASC
 ";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//LAYOUT    
	public function sLayoutG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sLayoutG";
		$RtnVal["SQLTXT"] = "SELECT 
	PJTSEQ, LAYOUTID, GRPCNT, USEYN, ADDDT, ADDID, MODDT, MODID
FROM CG_LAYOUT
WHERE LAYOUTID like if(#{G1-LAYOUTID}='','%',#{G1-LAYOUTID})";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "ss";
		return $RtnVal;
    }  
	//LAYOUTS    
	public function sLayoutS($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "R";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "sLayoutS";
		$RtnVal["SQLTXT"] = "SELECT 
	LAYOUTSSEQ,LAYOUTID,GRPID,REFGRPID,ORD
	,GRPTYPE,GRPWIDTH,GRPHEIGHT,PGRPID,SPLITGUTTERSIZE
	,SPLITDIRECTION,SPLITMINSIZE
	,ADDDT,ADDID,MODDT,MODID 
FROM CG_LAYOUTS
WHERE LAYOUTID = #{G2-LAYOUTID}
ORDER BY ORD ASC";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "s";
		return $RtnVal;
    }  
	//LAYOUTD    
	public function uLayoutDG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "uLayoutDG";
		$RtnVal["SQLTXT"] = "UPDATE  CG_LAYOUTD SET 
	LAYOUTID = #{LAYOUTID}, GRPID = #{GRPID}, REFGRPID = #{REFGRPID}
	, ORD = #{ORD}, GRPTYPE = #{GRPTYPE}, GRPWIDTH = #{GRPWIDTH}, GRPHEIGHT = #{GRPHEIGHT}, VBOX = #{VBOX}
	, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), ADDID = #{USER.SEQ}
WHERE LAYOUTDSEQ = #{LAYOUTDSEQ} AND PJTSEQ = #{PJTSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssissssisi";
		return $RtnVal;
    }  
	//LAYOUT    
	public function uLayoutG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "uLayoutG";
		$RtnVal["SQLTXT"] = "UPDATE CG_LAYOUT SET
	GRPCNT = #{GRPCNT}, USEYN = #{USEYN}
	, MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = #{USER.SEQ}
WHERE LAYOUTID = #{LAYOUTID} AND PJTSEQ = #{PJTSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "isisi";
		return $RtnVal;
    }  
	//LAYOUTS    
	public function uLayoutSG($req){
		//조회
		$RtnVal = null;
		$RtnVal["FNCTYPE"] = "U";//CRUD 
		$RtnVal["SVRID"] = "CGCORE";
		$RtnVal["SQLID"] = "uLayoutSG";
		$RtnVal["SQLTXT"] = "update CG_LAYOUTS set 
	LAYOUTID = #{LAYOUTID}, GRPID = #{GRPID}, REFGRPID = #{REFGRPID}, ORD = #{ORD}, GRPTYPE = #{GRPTYPE} 
	, GRPWIDTH = #{GRPWIDTH}, GRPHEIGHT = #{GRPHEIGHT}, PGRPID = #{PGRPID}, SPLITGUTTERSIZE = #{SPLITGUTTERSIZE}, SPLITDIRECTION = #{SPLITDIRECTION}
	, SPLITMINSIZE = #{SPLITMINSIZE}
	,MODDT = date_format(sysdate(),'%Y%m%d%H%i%s'), MODID = 0
where LAYOUTSSEQ = #{LAYOUTSSEQ}
";
		$RtnVal["PARENT_FNCTYPE"] = ""; // PSQLSEQ가 있으면 상위 SQL이 존재	
		$RtnVal["REQUIRE"] = array(	);
		$RtnVal["BINDTYPE"] = "sssisssssssi";
		return $RtnVal;
    }  
}
                                                             
?>