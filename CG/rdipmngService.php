<?php
//SVC
 
//include_once('RdipmngInterface.php');
include_once('rdipmngDao.php');
//class RdipmngService implements RdipmngInterface
class rdipmngService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("RdipmngService-__construct");

		$this->DAO = new rdipmngDao();
		//DB OPEN
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("RdipmngService-__destruct");

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
		$log->info("RdipmngService-__toString");
	}
	//조건, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDIPMNGService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDIPMNGService-goG1Searchall________________________end");
	}
	//조건, 저장
	public function goG1Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDIPMNGService-goG1Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDIPMNGService-goG1Save________________________end");
	}
	//IP목록, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDIPMNGService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = ""; // KEY 컬럼
		//조회
		//V_GRPNM : IP목록
		array_push($GRID["SQL"], $this->DAO->selIpG($REQ)); //SEARCH, 조회,IP
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
		$log->info("RDIPMNGService-goG2Search________________________end");
	}
	//IP목록, 저장
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDIPMNGService-goG2Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "IP_SEQ,PGMTYPE,ALLOW_IP,IP_DESC,ADD_DT,ADD_ID,MOD_DT,MOD_ID"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : IP목록
		array_push($GRID["SQL"]["D"], $this->DAO->delIpG($REQ)); //SAVE, 저장,IP
		//V_GRPNM : IP목록
		array_push($GRID["SQL"]["C"], $this->DAO->insIpG($REQ)); //SAVE, 저장,IP
		//V_GRPNM : IP목록
		array_push($GRID["SQL"]["U"], $this->DAO->updIpG($REQ)); //SAVE, 저장,IP
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
		$log->info("RDIPMNGService-goG2Save________________________end");
	}
	//IP목록, 엑셀다운로드
	public function goG2Excel(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDIPMNGService-goG2Excel________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDIPMNGService-goG2Excel________________________end");
	}
}
                                                             
?>
