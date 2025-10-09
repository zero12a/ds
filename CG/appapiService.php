<?php
//SVC
 
//include_once('AppapiInterface.php');
include_once('appapiDao.php');
//class AppapiService implements AppapiInterface
class appapiService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct($REQ){
		global $log,$CFG;
		$log->info("AppapiService-__construct");

		$this->DAO = new appapiDao();
		//DB OPEN
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
		$this->DB["DATING"] = getDbConn($CFG["CFG_DB"]["DATING"]);
	}
	//파괴자
	function __destruct(){
		global $log;
		$log->info("AppapiService-__destruct");

		unset($this->DAO);
		//loop close
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		if($this->DB["DATING"])closeDb($this->DB["DATING"]);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		$log->info("AppapiService-__toString");
	}
	//컨디션1, 저장
	public function goC2Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("APPAPIService-goC2Save________________________start");
		//FORMVIEW SAVE
		$grpId="F4";
		$FORMVIEW["FNCTYPE"] = $REQ[$grpId . "-CTLCUD"]; 
		$FORMVIEW["KEYCOLID"] = "API_SEQ";  //KEY컬럼 COLID, 1
		$FORMVIEW["SEQYN"] = "Y";  //시퀀스 컬럼 유무
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array("REQ_BODY"=>"CRYPT","RES_BODY"=>"CRYPT");	
			//파일저장
		alog("F4-MYFILE_NM = " . $REQ["F4-MYFILE_NM"]);
		if(strlen($REQ["F4-MYFILE_NM"]) > 4  && isAllowExtension($REQ["F4-MYFILE_NM"],$CFG["CFG_UPLOAD_ALLOW_EXT"])){
			
			$REQ["F4-MYFILE_SVRNM"] = getFileSvrNm($REQ["F4-MYFILE_NM"], $t_prefix="PIC_");
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["F4-MYFILE_SVRNM"];
			alog("###### MYFILE1 : " . $MYFILE1 );

			if(!moveFileStore($CFG["CFG_FILESTORE"][""], $REQ["F4-MYFILE_TMPNM"], $REQ["F4-MYFILE_SVRNM"])){
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
					array_push($FORMVIEW["SQL"],$this->DAO->insApi($REQ)); 
					break;
				case "U":
					array_push($FORMVIEW["SQL"],$this->DAO->updApi($REQ));
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
			array_push($_RTIME,array("[TIME 50.DB_TIME F4]",microtime(true)));

			$tmpVal->GRPID = $grpId;
			array_push($rtnVal->GRP_DATA, $tmpVal);

			//$rtnVal = makeFormviewSaveJson($FORMVIEW,$this->DB);

		}//C,U 일때만 DB처리
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("APPAPIService-goC2Save________________________end");
	}
	//그리드1, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("APPAPIService-goG3Search________________________start");
		//GRID_SEARCH____________________________start
		$GRID["SQL"] = array();
		$GRID["GRPTYPE"] = "GRID_BOOTSTRAP";
		$GRID["KEYCOLIDX"] = 1; // KEY 컬럼, API_SEQ

		//조회
		//V_GRPNM : 그리드1
		array_push($GRID["SQL"], $this->DAO->searchApiG($REQ)); //SEARCH, 조회,조회
	//암호화컬럼
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
		$log->info("APPAPIService-goG3Search________________________end");
	}
	//그리드1, 11
	public function goG3Chksave2(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("APPAPIService-goG3Chksave2________________________start");
		//GRID_CHK_SAVE____________________________start
		$GRID["SQL"] = array();
		$grpId="G3";
		$GRID["CHK"]=$REQ[$grpId."-CHK"];
		$GRID["KEYCOLID"] = "API_SEQ";  //KEY컬럼 COLID, 1
		//11	
		array_push($GRID["SQL"], $this->DAO->delApiG($REQ)); // CHKSAVE2, 11, 삭제
		$tmpVal = makeGridChkJsonArray($GRID,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME G3]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//GRID_CHK_SAVE____________________________end
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("APPAPIService-goG3Chksave2________________________end");
	}
	//폼뷰1, 조회
	public function goF4Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("APPAPIService-goF4Search________________________start");
//FORMVIEW SEARCH
		$grpId="F4";
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array("REQ_BODY"=>"CRYPT","RES_BODY"=>"CRYPT");
		$FORMVIEW["SQL"] = array();
	// SQL LOOP
		// 상세
		array_push($FORMVIEW["SQL"], $this->DAO->detailApi($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($FORMVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireFormview - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$rtnVal = makeFormviewSearchJsonArray($FORMVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME F4]",microtime(true)));
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("APPAPIService-goF4Search________________________end");
	}
	//폼뷰1, 저장
	public function goF4Save(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("APPAPIService-goF4Save________________________start");
		//FORMVIEW SAVE
		$grpId="F4";
		$FORMVIEW["FNCTYPE"] = $REQ[$grpId . "-CTLCUD"]; 
		$FORMVIEW["KEYCOLID"] = "API_SEQ";  //KEY컬럼 COLID, 1
		$FORMVIEW["SEQYN"] = "Y";  //시퀀스 컬럼 유무
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array("REQ_BODY"=>"CRYPT","RES_BODY"=>"CRYPT");	
			//파일저장
		alog("F4-MYFILE_NM = " . $REQ["F4-MYFILE_NM"]);
		if(strlen($REQ["F4-MYFILE_NM"]) > 4  && isAllowExtension($REQ["F4-MYFILE_NM"],$CFG["CFG_UPLOAD_ALLOW_EXT"])){
			
			$REQ["F4-MYFILE_SVRNM"] = getFileSvrNm($REQ["F4-MYFILE_NM"], $t_prefix="PIC_");
			$MYFILE1 = $CFG["CFG_UPLOAD_DIR"] . $REQ["F4-MYFILE_SVRNM"];
			alog("###### MYFILE1 : " . $MYFILE1 );

			if(!moveFileStore($CFG["CFG_FILESTORE"][""], $REQ["F4-MYFILE_TMPNM"], $REQ["F4-MYFILE_SVRNM"])){
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
					array_push($FORMVIEW["SQL"],$this->DAO->insApi($REQ)); 
					break;
				case "U":
					array_push($FORMVIEW["SQL"],$this->DAO->updApi($REQ));
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
			array_push($_RTIME,array("[TIME 50.DB_TIME F4]",microtime(true)));

			$tmpVal->GRPID = $grpId;
			array_push($rtnVal->GRP_DATA, $tmpVal);

			//$rtnVal = makeFormviewSaveJson($FORMVIEW,$this->DB);

		}//C,U 일때만 DB처리
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("APPAPIService-goF4Save________________________end");
	}
	//폼뷰1, 삭제
	public function goF4Delete(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = new stdclass();
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		$log->info("APPAPIService-goF4Delete________________________start");
//FORMVIEW DELETE
		$grpId="F4";
		$FORMVIEW["FNCTYPE"] = $REQ[$grpId."-CTLCUD"]; 
		$FORMVIEW["SQL"][$FORMVIEW["FNCTYPE"]] = $this->DAO->delApi($REQ); 

		//필수 여부 검사
		$tmpVal = requireFormviewSave($FORMVIEW["SQL"],$FORMVIEW["FNCTYPE"] );
		if($tmpVal->RTN_CD == "500"){
			$log->info("requireFormviewSave - fail.");
			$tmpVal->GRPID = $grpId;
			echo json_encode($tmpVal);
			exit;
		}
		$tmpVal = makeFormviewSaveJson($FORMVIEW,$this->DB);
		array_push($_RTIME,array("[TIME 50.DB_TIME F4]",microtime(true)));

		$tmpVal->GRPID = $grpId;
		array_push($rtnVal->GRP_DATA, $tmpVal);
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		$log->info("APPAPIService-goF4Delete________________________end");
	}
}
                                                             
?>
