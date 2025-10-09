<?php
//SVC
 
//include_once('FiletestInterface.php');
include_once('filetestDao.php');
//class FiletestService implements FiletestInterface
class filetestService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("FiletestService-__construct");

		$this->DAO = new filetestDao();
		//DB OPEN
		$this->DB["SC"] = getDbConn($CFG["CFG_DB"]["SC"]);
		$this->DB["SC"] = getDbConn($CFG["CFG_DB"]["SC"]);
		$this->DB["SC"] = getDbConn($CFG["CFG_DB"]["SC"]);
		$this->DB["SC"] = getDbConn($CFG["CFG_DB"]["SC"]);
		$this->DB["SC"] = getDbConn($CFG["CFG_DB"]["SC"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("FiletestService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["SC"])closeDb($this->DB["SC"]);
		if($this->DB["SC"])closeDb($this->DB["SC"]);
		if($this->DB["SC"])closeDb($this->DB["SC"]);
		if($this->DB["SC"])closeDb($this->DB["SC"]);
		if($this->DB["SC"])closeDb($this->DB["SC"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("FiletestService-__toString");
	}
	//컨디션, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG1Searchall________________________end");
	}
	//컨디션, 저장
	public function goG1Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG1Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG1Save________________________end");
	}
	//a, 조회
	public function goG4Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG4Search________________________start");
//BIVIEW SEARCH
		$grpId="G4";
	//암호화컬럼
		$BIVIEW["COLCRYPT"] = array();
		$BIVIEW["SQL"] = array();
	// SQL LOOP
		// selBI1
		array_push($BIVIEW["SQL"], $this->DAO->selBI1($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($BIVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireBIview - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeFormviewSearchJsonArray($BIVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G4]",microtime(true)));
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG4Search________________________end");
	}
	//b, 조회
	public function goG5Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG5Search________________________start");
//BIVIEW SEARCH
		$grpId="G5";
	//암호화컬럼
		$BIVIEW["COLCRYPT"] = array();
		$BIVIEW["SQL"] = array();
	// SQL LOOP
		// selBI1
		array_push($BIVIEW["SQL"], $this->DAO->selBI1($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($BIVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireBIview - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeFormviewSearchJsonArray($BIVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G5]",microtime(true)));
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG5Search________________________end");
	}
	//c, 조회
	public function goG6Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG6Search________________________start");
//BIVIEW SEARCH
		$grpId="G6";
	//암호화컬럼
		$BIVIEW["COLCRYPT"] = array();
		$BIVIEW["SQL"] = array();
	// SQL LOOP
		// selBI2
		array_push($BIVIEW["SQL"], $this->DAO->selBI2($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($BIVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireBIview - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeFormviewSearchJsonArray($BIVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G6]",microtime(true)));
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG6Search________________________end");
	}
	//d, 조회
	public function goG7Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG7Search________________________start");
//BIVIEW SEARCH
		$grpId="G7";
	//암호화컬럼
		$BIVIEW["COLCRYPT"] = array();
		$BIVIEW["SQL"] = array();
	// SQL LOOP
		// selBI2
		array_push($BIVIEW["SQL"], $this->DAO->selBI2($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($BIVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireBIview - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeFormviewSearchJsonArray($BIVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G7]",microtime(true)));
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG7Search________________________end");
	}
	//그리드, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG2Search________________________start");
		//그리드 서버 조회 
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_DHTMLX";
		$GRID["KEYCOLIDX"] = 0; // KEY 컬럼, FILESEQ

		//조회
		//V_GRPNM : 그리드
		array_push($GRID["SQL"], $this->DAO->selG($REQ)); //SEARCH, 조회,selQ
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
		$log->info("FILETESTService-goG2Search________________________end");
	}
	//그리드, 저장
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG2Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG2Save________________________end");
	}
	//폼뷰, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG3Search________________________start");
//FORMVIEW SEARCH
		$grpId="G3";
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();
		$FORMVIEW["SQL"] = array();
	// SQL LOOP
		// selF
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
		$log->info("FILETESTService-goG3Search________________________end");
	}
	//폼뷰, 저장
	public function goG3Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILETESTService-goG3Save________________________start");
		//FORMVIEW SAVE
		$grpId="G3";
		$FORMVIEW["FNCTYPE"] = $REQ[$grpId . "-CTLCUD"]; 
		$FORMVIEW["KEYCOLID"] = "";  //KEY컬럼 COLID, -1
		$FORMVIEW["SEQYN"] = "Y";  //시퀀스 컬럼 유무
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();	
			//파일저장
		alog("G3-FILE1_NM = " . $REQ["G3-FILE1_NM"]);
		if(strlen($REQ["G3-FILE1_NM"]) > 4  && isAllowExtension($REQ["G3-FILE1_NM"],$CFG["CFG_UPLOAD_ALLOW_EXT"])){
			
			$REQ["G3-FILE1_SVRNM"] = getFileSvrNm($REQ["G3-FILE1_NM"], $t_prefix="PIC_");
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["G3-FILE1_SVRNM"];
			alog("###### MYFILE1 : " . $MYFILE1 );

			if(!moveFileStore($CFG["CFG_FILESTORE"][""], $REQ["G3-FILE1_TMPNM"], $REQ["G3-FILE1_SVRNM"])){
				//처리 결과 리턴
				$rtnVal->RTN_CD = "500";
				$rtnVal->ERR_CD = "591";
				echo json_encode($rtnVal);
				return;
			}
		}
		//CTLCUD 명령어에 따른 분개 처리
		if( $FORMVIEW["FNCTYPE"] == "C" || $FORMVIEW["FNCTYPE"] == "U"){ 

			$FORMVIEW["SQL"] = array();
			switch($FORMVIEW["FNCTYPE"]){
				case "C":
					array_push($FORMVIEW["SQL"],$this->DAO->insG($REQ)); 
					break;
				case "U":
					break;
				default : 
					$log->info("(SVC) FNCTYPE을 찾을수 없습니다.");
			}
			//필수 여부 검사
			$tmpVal = requireFormviewSaveArray($FORMVIEW["SQL"],$FORMVIEW["FNCTYPE"]);
			if($tmpVal->RTN_CD == "500"){
				$log->info("requireFormview - fail.");
				$tmpVal->GRPID = $grpId;
				echo json_encode($tmpVal);
				exit;
			}
			$tmpVal = makeFormviewSaveJsonArray($FORMVIEW,$this->DB);
			array_push($_RTIME,array("[TIME 50.DB_TIME G3]",microtime(true)));

			$tmpVal->GRPID = $grpId;
			array_push($rtnVal->GRP_DATA, $tmpVal);

			//$rtnVal = makeFormviewSaveJson($FORMVIEW,$this->DB);

		}//C,U 일때만 DB처리
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILETESTService-goG3Save________________________end");
	}
}
                                                             
?>
