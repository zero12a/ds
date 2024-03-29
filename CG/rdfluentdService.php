<?php
//SVC
 
//include_once('RdfluentdInterface.php');
include_once('rdfluentdDao.php');
//class RdfluentdService implements RdfluentdInterface
class rdfluentdService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("RdfluentdService-__construct");

		$this->DAO = new rdfluentdDao();
		//DB OPEN
		$this->DB["RSYSLOG"] = getDbConn($CFG["CFG_DB"]["RSYSLOG"]);
		$this->DB["RSYSLOG"] = getDbConn($CFG["CFG_DB"]["RSYSLOG"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("RdfluentdService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["RSYSLOG"])closeDb($this->DB["RSYSLOG"]);
		if($this->DB["RSYSLOG"])closeDb($this->DB["RSYSLOG"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("RdfluentdService-__toString");
	}
	//, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDFLUENTDService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDFLUENTDService-goG1Searchall________________________end");
	}
	//, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDFLUENTDService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 
		array_push($GRID["SQL"], $this->DAO->selG($REQ)); //SEARCH, 조회,FLUENTD
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
		$log->info("RDFLUENTDService-goG2Search________________________end");
	}
	//, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDFLUENTDService-goG3Search________________________start");
//FORMVIEW SEARCH
		$grpId="G3";
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();
		$FORMVIEW["SQL"] = array();
	// SQL LOOP
		// FLUENTD
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
		$log->info("RDFLUENTDService-goG3Search________________________end");
	}
}
                                                             
?>
