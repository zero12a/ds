<?php
//SVC
 
//include_once('AuthmngInterface.php');
include_once('authmngDao.php');
//class AuthmngService implements AuthmngInterface
class authmngService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("AuthmngService-__construct");

		$this->DAO = new authmngDao();
		//DB OPEN
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["RDCOMMON2"] = getDbConn($CFG["CFG_DB"]["RDCOMMON2"]);
		$this->DB["RDCOMMON2"] = getDbConn($CFG["CFG_DB"]["RDCOMMON2"]);
		$this->DB["RDCOMMON2"] = getDbConn($CFG["CFG_DB"]["RDCOMMON2"]);
		$this->DB["RDCOMMON2"] = getDbConn($CFG["CFG_DB"]["RDCOMMON2"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("AuthmngService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["RDCOMMON2"])closeDb($this->DB["RDCOMMON2"]);
		if($this->DB["RDCOMMON2"])closeDb($this->DB["RDCOMMON2"]);
		if($this->DB["RDCOMMON2"])closeDb($this->DB["RDCOMMON2"]);
		if($this->DB["RDCOMMON2"])closeDb($this->DB["RDCOMMON2"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("AuthmngService-__toString");
	}
	//조회조건, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG1Searchall________________________end");
	}
	//조회조건, 저장
	public function goG1Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG1Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG1Save________________________end");
	}
	//권한목록, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "AUTH_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 권한목록
		array_push($GRID["SQL"], $this->DAO->selAuthG($REQ)); //SEARCH, 조회,selAuthG
		//암호화컬럼
		$GRID["COLCRYPT"] = array();
		//필수 여부 검사
		$tmpVal = requireGridSearchArray($GRID["COLORD"],$GRID["XML"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeGridSearchJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G2]",microtime(true)));
		//GRID_SEARCH____________________________end
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG2Search________________________end");
	}
	//권한목록, S
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG2Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,AUTH_SEQ,PGMID,AUTH_ID,AUTH_NM,USE_YN,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "AUTH_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : 권한목록
		array_push($GRID["SQL"]["C"], $this->DAO->insAuthG($REQ)); //SAVE, S,권한추가
		$tmpVal = requireGridwixSaveArray($GRID["COLORD"],$GRID["JSON"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeGridwixSaveJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G2]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_SAVE____________________________end


		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG2Save________________________end");
	}
	//권한목록, E
	public function goG2Excel(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG2Excel________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG2Excel________________________end");
	}
	//권한목록, 선택 삭제
	public function goG2Chksave(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG2Chksave________________________start");
		//GRID_CHKSAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,AUTH_SEQ,PGMID,AUTH_ID,AUTH_NM,USE_YN,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();
		$GRID["KEYCOLID"] = "AUTH_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "N";  //시퀀스 컬럼 유무
		//V_GRPNM : 권한목록
		array_push($GRID["SQL"]["D"], $this->DAO->delChkAuthG($REQ)); //CHKSAVE, 선택 삭제,체크삭제
		$tmpVal = requireGridwixSaveArray($GRID["COLORD"],$GRID["JSON"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeGridwixSaveJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G2]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_CHKSAVE____________________________end
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG2Chksave________________________end");
	}
	//메뉴목록, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG3Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "MNU_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 메뉴목록
		array_push($GRID["SQL"], $this->DAO->selMnu($REQ)); //SEARCH, 조회,MNU
		//암호화컬럼
		$GRID["COLCRYPT"] = array();
		//필수 여부 검사
		$tmpVal = requireGridSearchArray($GRID["COLORD"],$GRID["XML"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeGridSearchJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G3]",microtime(true)));
		//GRID_SEARCH____________________________end
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG3Search________________________end");
	}
	//메뉴목록, 저장
	public function goG3Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("AUTHMNGService-goG3Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G3";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "MNU_SEQ,MNU_NM,PGMID,URL,PGMTYPE,MNU_ORD,USE_YN,ADD_DT,ADD_ID,MOD_DT,MOD_ID"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "MNU_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : 메뉴목록
		array_push($GRID["SQL"]["D"], $this->DAO->delMnu($REQ)); //SAVE, 저장,MNU
		//V_GRPNM : 메뉴목록
		array_push($GRID["SQL"]["U"], $this->DAO->updMnu($REQ)); //SAVE, 저장,MNU
		//V_GRPNM : 메뉴목록
		array_push($GRID["SQL"]["C"], $this->DAO->insMnu($REQ)); //SAVE, 저장,MNU
		$tmpVal = requireGridwixSaveArray($GRID["COLORD"],$GRID["JSON"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeGridwixSaveJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G3]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_SAVE____________________________end


		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("AUTHMNGService-goG3Save________________________end");
	}
}
                                                             
?>
