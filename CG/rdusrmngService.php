<?php
//SVC
 
//include_once('RdusrmngInterface.php');
include_once('rdusrmngDao.php');
//class RdusrmngService implements RdusrmngInterface
class rdusrmngService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("RdusrmngService-__construct");

		$this->DAO = new rdusrmngDao();
		//DB OPEN
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
		$this->DB["RDCOMMON"] = getDbConn($CFG["CFG_DB"]["RDCOMMON"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("RdusrmngService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		if($this->DB["RDCOMMON"])closeDb($this->DB["RDCOMMON"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("RdusrmngService-__toString");
	}
	//사용자1, 비번변경
	public function goG2Userdef(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG2Userdef________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,USR_SEQ,USR_ID,USR_NM,PHONE,USE_YN,USR_PWD,PW_ERR_CNT,LAST_STATUS,LOCK_LIMIT_DT,LOCK_LAST_DT,EXPIRE_DT,PW_CHG_DT,PW_CHG_ID,LDAP_LOGIN_YN,TEAMCD,TEAMNM,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array("USR_PWD"=>"HASH");	
		$GRID["KEYCOLID"] = "USR_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "N";  //시퀀스 컬럼 유무
		//V_GRPNM : 사용자1
		array_push($GRID["SQL"]["U"], $this->DAO->chgUserPwG($REQ)); //USERDEF, 비번변경,USR
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
		$log->info("RDUSRMNGService-goG2Userdef________________________end");
	}
	//사용자1, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "USR_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 사용자1
		array_push($GRID["SQL"], $this->DAO->selUserG($REQ)); //SEARCH, 조회,USR
		//암호화컬럼
		$GRID["COLCRYPT"] = array("USR_PWD"=>"HASH");
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
		$log->info("RDUSRMNGService-goG2Search________________________end");
	}
	//사용자1, S
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG2Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,USR_SEQ,USR_ID,USR_NM,PHONE,USE_YN,USR_PWD,PW_ERR_CNT,LAST_STATUS,LOCK_LIMIT_DT,LOCK_LAST_DT,EXPIRE_DT,PW_CHG_DT,PW_CHG_ID,LDAP_LOGIN_YN,TEAMCD,TEAMNM,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array("USR_PWD"=>"HASH");	
		$GRID["KEYCOLID"] = "USR_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "N";  //시퀀스 컬럼 유무
		//V_GRPNM : 사용자1
		array_push($GRID["SQL"]["D"], $this->DAO->delUserG($REQ)); //SAVE, S,USR
		//V_GRPNM : 사용자1
		array_push($GRID["SQL"]["U"], $this->DAO->updUserG($REQ)); //SAVE, S,USR
		//V_GRPNM : 사용자1
		array_push($GRID["SQL"]["C"], $this->DAO->insUserG($REQ)); //SAVE, S,USR
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
		$log->info("RDUSRMNGService-goG2Save________________________end");
	}
	//사용자1, E
	public function goG2Excel(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG2Excel________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDUSRMNGService-goG2Excel________________________end");
	}
	//사용자1, 선택 잠금하제
	public function goG2Chksave(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG2Chksave________________________start");
		//GRID_CHKSAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,USR_SEQ,USR_ID,USR_NM,PHONE,USE_YN,USR_PWD,PW_ERR_CNT,LAST_STATUS,LOCK_LIMIT_DT,LOCK_LAST_DT,EXPIRE_DT,PW_CHG_DT,PW_CHG_ID,LDAP_LOGIN_YN,TEAMCD,TEAMNM,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array("USR_PWD"=>"HASH");
		$GRID["KEYCOLID"] = "USR_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "N";  //시퀀스 컬럼 유무
		//V_GRPNM : 사용자1
		array_push($GRID["SQL"]["U"], $this->DAO->unLockUsr($REQ)); //CHKSAVE, 선택 잠금하제,USR
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
		$log->info("RDUSRMNGService-goG2Chksave________________________end");
	}
	//소속 그룹, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG3Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "GRP_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 소속 그룹
		array_push($GRID["SQL"], $this->DAO->selGrp($REQ)); //SEARCH, 조회,GRP
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
		$log->info("RDUSRMNGService-goG3Search________________________end");
	}
	//소속 팀, 조회
	public function goG4Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG4Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "TEAM_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 소속 팀
		array_push($GRID["SQL"], $this->DAO->selTeam($REQ)); //SEARCH, 조회,TEAM
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
		array_push($_RTIME,array("[TIME 50.DB_TIME G4]",microtime(true)));
		//GRID_SEARCH____________________________end
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDUSRMNGService-goG4Search________________________end");
	}
	//소속 팀, 저장
	public function goG4Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("RDUSRMNGService-goG4Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("RDUSRMNGService-goG4Save________________________end");
	}
}
                                                             
?>
