<?php
//SVC
 
//include_once('Iconmng2Interface.php');
include_once('iconmng2Dao.php');
//class Iconmng2Service implements Iconmng2Interface
class iconmng2Service 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct(){
		global $log,$CFG;
		$log->info("Iconmng2Service-__construct");

		$this->DAO = new iconmng2Dao();
		$this->DB["CGPJT1"] = getDbConn($CFG["CFG_DB"]["CGPJT1"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("Iconmng2Service-__destruct");

		unset($this->DAO);
		if($this->DB["CGPJT1"])closeDb($this->DB["CGPJT1"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("Iconmng2Service-__toString");
	}
	//, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("ICONMNG2Service-goG1Searchall________________________end");
	}
	//, 저장
	public function goG1Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG1Save________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("ICONMNG2Service-goG1Save________________________end");
	}
	//, 조회
	public function goG2Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG2Search________________________start");
		//그리드 서버 조회 
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_DHTMLX";
		$GRID["KEYCOLIDX"] = 0; // KEY 컬럼, ICONSEQ

		//조회
		//V_GRPNM : 
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
		$log->info("ICONMNG2Service-goG2Search________________________end");
	}
	//, 저장
	public function goG2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG2Save________________________start");
		//GRID_SAVE____________________________start
		$GRID["SQL"]["C"] = array();
		$GRID["SQL"]["U"] = array();
		$GRID["SQL"]["D"] = array();
		$grpId="G2";
		$GRID["XML"]=$REQ[$grpId."-XML"];
		$GRID["COLORD"] = "ICONSEQ,IMGNM,IMGSVRNM,IMGSIZE,IMGHASH,IMGTYPE,IMGTYPE2,IMGTYPE3,IMGTYPE4,CODEMIRROR,TXTAREA,TXTVIEW,HTMLVIEW,SIGNPAD,CODESEARCH,ADDDT2,ADDDT"; //그리드 컬럼순서(Hidden컬럼포함)
	//암호화컬럼
		$GRID["COLCRYPT"] = array();	
		$GRID["KEYCOLID"] = "ICONSEQ";  //KEY컬럼 COLID, 0
		$GRID["SEQYN"] = "Y";  //시퀀스 컬럼 유무
		//저장
		//V_GRPNM : 
		array_push($GRID["SQL"]["C"], $this->DAO->insF($REQ)); //SAVE, 저장,insF
		$tmpVal = requireGridSaveArray($GRID["COLORD"],$GRID["XML"],$GRID["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireGrid - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeGridSaveJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G2]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_SAVE____________________________end


		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("ICONMNG2Service-goG2Save________________________end");
	}
	//, 저장
	public function goG3Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG3Save________________________start");
		//FORMVIEW SAVE
		$grpId="G3";
		$FORMVIEW["FNCTYPE"] = $REQ[$grpId . "-CTLCUD"]; 
		$GRID["KEYCOLID"] = "";  //KEY컬럼 COLID, -1
		$GRID["SEQYN"] = "N";  //시퀀스 컬럼 유무
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();	
			//SIGN 파일로 저장
		alog("G3-SIGNPAD strlen=" . strlen($REQ["G3-SIGNPAD"]));
		if( strlen($REQ["G3-SIGNPAD"]) > 22 ){
			
			$REQ["G3-SIGNPAD_SVRNM"] = "SGN_" . date("ymd") . date("His") . getRndVal(4) . ".png";
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["G3-SIGNPAD_SVRNM"];
			alog("###### MYFILE1 : " . $MYFILE1 );

			if(!file_put_contents($MYFILE1,base64_decode(explode(',',$REQ["G3-SIGNPAD"])[1]))){
				//처리 결과 리턴
				$rtnVal->RTN_CD = "500";
				$rtnVal->ERR_CD = "581";
				echo json_encode($rtnVal);
				return;
			}else{
				//성공하면 파일 정보 req 만들기
				$REQ["G3-SIGNPAD_SIZE"] = filesize($MYFILE1);
				$REQ["G3-SIGNPAD_HASH"] = hash_file('sha256', $MYFILE1);
				$REQ["G3-SIGNPAD_IMGTYPE"] = exif_imagetype($MYFILE1);
			}
		}
		//파일저장
		alog("G3-ICONFILE_NM = " . $REQ["G3-ICONFILE_NM"]);
		if(strlen($REQ["G3-ICONFILE_NM"]) > 4  && isAllowExtension($REQ["G3-ICONFILE_NM"],$CFG["CFG_UPLOAD_ALLOW_EXT"])){
			
			$REQ["G3-ICONFILE_SVRNM"] = getFileSvrNm($REQ["G3-ICONFILE_NM"], $t_prefix="PIC_");
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["G3-ICONFILE_SVRNM"];
			alog("###### MYFILE1 : " . $MYFILE1 );

			if(!move_uploaded_file($REQ["G3-ICONFILE_TMPNM"], $MYFILE1)){
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

			$al->GRPID = $grpId;
			array_push($rtnVal->GRP_DATA, $tmpVal);

			//$rtnVal = makeFormviewSaveJson($FORMVIEW,$this->DB);

		}//C,U 일때만 DB처리
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("ICONMNG2Service-goG3Save________________________end");
	}
	//, 삭제
	public function goG3Delete(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG3Delete________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("ICONMNG2Service-goG3Delete________________________end");
	}
	//, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("ICONMNG2Service-goG3Search________________________start");
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
		$log->info("ICONMNG2Service-goG3Search________________________end");
	}
}
                                                             
?>
