<?php
//SVC
 
//include_once('RdmsgboxmngInterface.php');
include_once('rdmsgboxmngDao.php');
//class RdmsgboxmngService implements RdmsgboxmngInterface
class rdmsgboxmngService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("RdmsgboxmngService-__construct");

		$this->DAO = new rdmsgboxmngDao();
		//DB OPEN
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("RdmsgboxmngService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("RdmsgboxmngService-__toString");
	}
	//, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDMSGBOXMNGService-goG1Searchall________________________end");
	}
	//, 저장
	public function goG1Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG1Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDMSGBOXMNGService-goG1Save________________________end");
	}
	//수신목록1, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = ""; // KEY 컬럼
		//조회
		//V_GRPNM : 수신목록1
		array_push($GRID["SQL"], $this->DAO->selG($REQ)); //SEARCH, 조회,BOX
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
		$log->info("RDMSGBOXMNGService-goG2Search________________________end");
	}
	//수신목록1, 저장
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG2Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,MSG_BOX_SEQ,USR_SEQ,TITLE,BODY,SEND_DT,READ_DT,REQUEST_SEQ,ADD_DT,DEL_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "";  //KEY컬럼
		$GRID["SEQYN"] = "N";  //시퀀스 컬럼 유무
		//V_GRPNM : 수신목록1
		array_push($GRID["SQL"]["U"], $this->DAO->updG($REQ)); //SAVE, 저장,BOX
		//V_GRPNM : 수신목록1
		array_push($GRID["SQL"]["D"], $this->DAO->delG($REQ)); //SAVE, 저장,BOX
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
		$log->info("RDMSGBOXMNGService-goG2Save________________________end");
	}
	//수신목록1, 선택삭제
	public function goG2Chkupd(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG2Chkupd________________________start");
		//GRID_CHKSAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,MSG_BOX_SEQ,USR_SEQ,TITLE,BODY,SEND_DT,READ_DT,REQUEST_SEQ,ADD_DT,DEL_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();
		$GRID["KEYCOLID"] = "";  //KEY컬럼
		$GRID["SEQYN"] = "";  //시퀀스 컬럼 유무
		//V_GRPNM : 수신목록1
		array_push($GRID["SQL"]["D"], $this->DAO->delG($REQ)); //CHKUPD, 선택삭제,BOX
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
		$log->info("RDMSGBOXMNGService-goG2Chkupd________________________end");
	}
	//수신상세, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG3Search________________________start");
//FORMVIEW SEARCH
		$grpId="G3";
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();
		$FORMVIEW["SQL"] = array();
	// SQL LOOP
		// BOX
		array_push($FORMVIEW["SQL"], $this->DAO->selF($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($FORMVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireFormview - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeFormviewSearchJsonArray($FORMVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G3]",microtime(true)));
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDMSGBOXMNGService-goG3Search________________________end");
	}
	//수신상세, 저장
	public function goG3Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG3Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDMSGBOXMNGService-goG3Save________________________end");
	}
	//수신상세, 삭제
	public function goG3Delete(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDMSGBOXMNGService-goG3Delete________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDMSGBOXMNGService-goG3Delete________________________end");
	}
}
                                                             
?>
