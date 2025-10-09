<?php
//SVC
 
//include_once('MenumngvInterface.php');
include_once('menumngvDao.php');
//class MenumngvService implements MenumngvInterface
class menumngvService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("MenumngvService-__construct");

		$this->DAO = new menumngvDao();
		//DB OPEN
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
		$this->DB["OS"] = getDbConn($CFG["CFG_DB"]["OS"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("MenumngvService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		if($this->DB["OS"])closeDb($this->DB["OS"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("MenumngvService-__toString");
	}
	//, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("MENUMNGVService-goG1Searchall________________________end");
	}
	//MNU1, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "MNU1_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : MNU1
		array_push($GRID["SQL"], $this->DAO->selM1($REQ)); //SEARCH, 조회,selM1
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
		$log->info("MENUMNGVService-goG2Search________________________end");
	}
	//MNU1, 저장
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG2Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "MNU1_SEQ,FOLDER_YN,FOLDER_NM,PGMID,MNU_ICON,MNU_ORD,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "MNU1_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : MNU1
		array_push($GRID["SQL"]["D"], $this->DAO->delM1($REQ)); //SAVE, 저장,delM1
		//V_GRPNM : MNU1
		array_push($GRID["SQL"]["C"], $this->DAO->insM1($REQ)); //SAVE, 저장,insM1
		//V_GRPNM : MNU1
		array_push($GRID["SQL"]["U"], $this->DAO->updM1($REQ)); //SAVE, 저장,updM1
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
		$log->info("MENUMNGVService-goG2Save________________________end");
	}
	//MNU1, 선택저장
	public function goG2Chksave(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG2Chksave________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("MENUMNGVService-goG2Chksave________________________end");
	}
	//MNU2, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG3Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "MNU2_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : MNU2
		array_push($GRID["SQL"], $this->DAO->selM2($REQ)); //SEARCH, 조회,selM2
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
		$log->info("MENUMNGVService-goG3Search________________________end");
	}
	//MNU2, 저장
	public function goG3Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG3Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G3";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "MNU2_SEQ,MNU1_SEQ,PGMID,MNU_ORD,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "MNU2_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : MNU2
		array_push($GRID["SQL"]["D"], $this->DAO->delM2($REQ)); //SAVE, 저장,demM2
		//V_GRPNM : MNU2
		array_push($GRID["SQL"]["U"], $this->DAO->updM2($REQ)); //SAVE, 저장,updM2
		//V_GRPNM : MNU2
		array_push($GRID["SQL"]["C"], $this->DAO->insM2($REQ)); //SAVE, 저장,insM2
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
		$log->info("MENUMNGVService-goG3Save________________________end");
	}
	//MNU2, 선택저장
	public function goG3Chksave(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG3Chksave________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("MENUMNGVService-goG3Chksave________________________end");
	}
	//미지정PGM, 조회
	public function goG4Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG4Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = "MNU_SEQ"; // KEY 컬럼
		//조회
		//V_GRPNM : 미지정PGM
		array_push($GRID["SQL"], $this->DAO->selP($REQ)); //SEARCH, 조회,selP
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
		$log->info("MENUMNGVService-goG4Search________________________end");
	}
	//미지정PGM, 선택 MNU1에 저장
	public function goG4Chksave1(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG4Chksave1________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G4";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,MNU_SEQ,MNU_NM,PGMID,URL,PGMTYPE,MNU_ORD,USE_YN,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "MNU_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : 미지정PGM
		array_push($GRID["SQL"]["U"], $this->DAO->insM1Choice($REQ)); //CHKSAVE1, 선택 MNU1에 저장,insM1Choice
		$tmpVal = requireGridwixSaveArray($GRID["COLORD"],$GRID["JSON"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeGridwixSaveJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G4]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_SAVE____________________________end


		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("MENUMNGVService-goG4Chksave1________________________end");
	}
	//미지정PGM, 선택 MNU2에 저장
	public function goG4Chksave2(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("MENUMNGVService-goG4Chksave2________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G4";
		$GRID["JSON"]=$REQ[$grpId."-JSON"];
		$GRID["COLORD"] = "CHK,MNU_SEQ,MNU_NM,PGMID,URL,PGMTYPE,MNU_ORD,USE_YN,ADD_DT,MOD_DT"; //그리드 컬럼순서(Hidden컬럼포함)
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "MNU_SEQ";  //KEY컬럼
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//V_GRPNM : 미지정PGM
		array_push($GRID["SQL"]["U"], $this->DAO->insM2Choice($REQ)); //CHKSAVE2, 선택 MNU2에 저장,insM2Choice
		$tmpVal = requireGridwixSaveArray($GRID["COLORD"],$GRID["JSON"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeGridwixSaveJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G4]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_SAVE____________________________end


		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("MENUMNGVService-goG4Chksave2________________________end");
	}
}
                                                             
?>
