<?php
//SVC
 
//include_once('FilestoretestInterface.php');
include_once('filestoretestDao.php');
//class FilestoretestService implements FilestoretestInterface
class filestoretestService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("FilestoretestService-__construct");

		$this->DAO = new filestoretestDao();
		//DB OPEN
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("FilestoretestService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("FilestoretestService-__toString");
	}
	//, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILESTORETESTService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILESTORETESTService-goG1Searchall________________________end");
	}
	//, 저장
	public function goG1Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILESTORETESTService-goG1Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILESTORETESTService-goG1Save________________________end");
	}
	//G1, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILESTORETESTService-goG2Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_WEBIX";
		$GRID["KEYCOLIDX"] = ""; // KEY 컬럼
		//조회
		//V_GRPNM : G1
		array_push($GRID["SQL"], $this->DAO->selG($REQ)); //SEARCH, 조회,selG
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
		$log->info("FILESTORETESTService-goG2Search________________________end");
	}
	//G2, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILESTORETESTService-goG3Search________________________start");
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
		$log->info("FILESTORETESTService-goG3Search________________________end");
	}
	//G2, 저장
	public function goG3Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILESTORETESTService-goG3Save________________________start");
		//FORMVIEW SAVE
		$grpId="G3";
		$FORMVIEW["FNCTYPE"] = $REQ[$grpId . "-CTLCUD"]; 
		$FORMVIEW["KEYCOLID"] = "API_SEQ";  //KEY컬럼 COLID, 0
		$FORMVIEW["SEQYN"] = "Y";  //시퀀스 컬럼 유무
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();	
			//파일저장
		alog("G3-MYFILE1_NM = " . $REQ["G3-MYFILE1_NM"]);
		if(strlen($REQ["G3-MYFILE1_NM"]) > 4  && isAllowExtension($REQ["G3-MYFILE1_NM"],$CFG["CFG_UPLOAD_ALLOW_EXT"])){
			
			$REQ["G3-MYFILE1_SVRNM"] = getFileSvrNm($REQ["G3-MYFILE1_NM"], $t_prefix="PIC_");
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["G3-MYFILE1_SVRNM"];
			alog("###### MYFILE1 : " . $MYFILE1 );

			if(!moveFileStore($CFG["CFG_FILESTORE"]["S3_1"], $REQ["G3-MYFILE1_TMPNM"], $REQ["G3-MYFILE1_SVRNM"])){
				//처리 결과 리턴
				$rtnVal->RTN_CD = "500";
				$rtnVal->ERR_CD = "591";
				echo json_encode($rtnVal);
				return;
			}
		}
		//SIGN 파일로 저장
		alog("G3-MYSIGN2 strlen=" . strlen($REQ["G3-MYSIGN2"]));
		if( strlen($REQ["G3-MYSIGN2"]) > 22 ){
			
			$REQ["G3-MYSIGN2_SVRNM"] = "SGN_" . date("ymd") . date("His") . getRndVal(4) . ".png";
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["G3-MYSIGN2_SVRNM"];

			$LOCAL_TMP_FULL_PATH = sys_get_temp_dir() . "/" . $REQ["G3-MYSIGN2_SVRNM"];
			alog("###### LOCAL_TMP_FULL_PATH : " . $LOCAL_TMP_FULL_PATH );

			if(!file_put_contents($LOCAL_TMP_FULL_PATH,base64_decode(explode(',',$REQ["G3-MYSIGN2"])[1]))){
				//처리 결과 리턴
				$rtnVal->RTN_CD = "500";
				$rtnVal->ERR_CD = "581";
				echo json_encode($rtnVal);
				return;
			}else{
				//성공하면 파일 정보 req 만들기
				$REQ["G3-MYSIGN2_SIZE"] = filesize($LOCAL_TMP_FULL_PATH);
				$REQ["G3-MYSIGN2_HASH"] = hash_file('sha256', $LOCAL_TMP_FULL_PATH);
				$REQ["G3-MYSIGN2_IMGTYPE"] = exif_imagetype($LOCAL_TMP_FULL_PATH);

				if(!moveFileStore($CFG["CFG_FILESTORE"]["S3_1"],$LOCAL_TMP_FULL_PATH, $REQ["G3-MYSIGN2_SVRNM"])){
					//처리 결과 리턴
					$rtnVal->RTN_CD = "500";
					$rtnVal->ERR_CD = "591";
					echo json_encode($rtnVal);
					return;
				}

			}
		}
		//CTLCUD 명령어에 따른 분개 처리
		if( $FORMVIEW["FNCTYPE"] == "C" || $FORMVIEW["FNCTYPE"] == "U"){ 

			$FORMVIEW["SQL"] = array();
			switch($FORMVIEW["FNCTYPE"]){
				case "C":
					array_push($FORMVIEW["SQL"],$this->DAO->insF($REQ)); 
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
		$log->info("FILESTORETESTService-goG3Save________________________end");
	}
	//G2, 삭제
	public function goG3Delete(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("FILESTORETESTService-goG3Delete________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("FILESTORETESTService-goG3Delete________________________end");
	}
}
                                                             
?>
