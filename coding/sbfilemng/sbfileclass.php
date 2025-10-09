<?php

class sbFileService 
{
	private $DAO;
	private $DB;
	//생성자
	function __construct(){
		global $log,$CFG;
		alog("dbfileService-__construct");

        $db["HOST"] = "172.17.0.1";
        $db["ID"] = "cg";
        $db["PW"] = "cg1234qwer";
        $db["DBNM"] = "CODESCHOOL";
        $db["PORT"] = "4306";
		$db["DRIVER"] = "PDO_MYSQL";

        $this->DB = getDbConnPlain($db);
	}
	//파괴자
	function __destruct(){
		global $log;
		alog("dbfileService-__destruct");


		if($this->DB)closeDb($this->DB);
		unset($this->DB);
	}
	function __toString(){
		global $log;
		alog("dbfileService-__toString");
	}
	//, 조회(전체)
	public function goG1Searchall(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		alog("dbfileService-goG1Searchall________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		alog("dbfileService-goG1Searchall________________________end");
	}



	public function initDeleteOldDb($REQ){
        alog("dbfileService-initDeleteOldDb________________________start");

        //$blob = fopen($filePath, 'rb');
        
		//var_dump($REQ);

        $sql = "
        delete from SANDBOX_FILE
		where SANDBOX_SEQ = :SANDBOX_SEQ and DEGREE_SEQ = :DEGREE_SEQ
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","initDeleteOldDb()에서 execute()실패했습니다."); 

		//$rtnArray = $stmt->fetchAll(PDO::FETCH_CLASS);
		

        //fclose($blob);

        alog("dbfileService-initDeleteOldDb________________________end");
		return $stmt->rowCount();
	}

	public function initCopyDbFromMaster($REQ){
		alog("dbfileService-initCopyDbFromMaster________________________start");

        //$blob = fopen($filePath, 'rb');
        
		//var_dump($REQ);

        $sql = "
		insert into SANDBOX_FILE(
			DEGREE_SEQ, SANDBOX_SEQ, PATH, NM, FOLDER_YN
			, FILE_HASH, FILE_DATA, ADD_DT
		)
		select 
			DEGREE_SEQ, :SANDBOX_SEQ, PATH, NM, FOLDER_YN
			, FILE_HASH, FILE_DATA, date_format(sysdate(),'%Y%m%d%H%i%s')
		from SANDBOX_FILE where SANDBOX_SEQ = (
			select MST_SANDBOX_SEQ from CLASS_DEGREE where DEGREE_SEQ = :DEGREE_SEQ
		)
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
		$stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","initCopyDbFromMaster()에서 execute()실패했습니다."); 

		//$rtnArray = $stmt->fetchAll(PDO::FETCH_CLASS);
		

        //fclose($blob);

        alog("dbfileService-initCopyDbFromMaster________________________end");
		return $stmt->rowCount();
	}


	public function initDeleteOldFile($REQ){
		//$this->rrmdir($REQ["SANDBOX_ROOT"]);//root가 삭제되기 때문에 이렇게하면안됨, 하위경로까지 일괄 삭제

		//루트 폴더가 없으면 생성하기
		if(!is_dir($REQ["SANDBOX_ROOT"])){
			alog("mkdir = " . $REQ["SANDBOX_ROOT"]);
			if(!mkdir($REQ["SANDBOX_ROOT"]))JsonMsg("500","300","initDeleteOldFile()에서 sandbox root폴더 생성에 실패했습니다.(Fail to snadbox root folder)" . $REQ["SANDBOX_ROOT"]); 

			chomod($REQ["SANDBOX_ROOT"],0777);
			chown($REQ["SANDBOX_ROOT"],"www-data");
			chgrp($REQ["SANDBOX_ROOT"],"www-data");
		}

		$src = $REQ["SANDBOX_ROOT"];

		$dir = opendir($src);
		while(false !== ( $file = readdir($dir)) ) {
			if (( $file != '.' ) && ( $file != '..' )) {
				$full = $src . '/' . $file;
				if ( is_dir($full) ) {
					$this->rrmdir($full);
				}
				else {
					unlink($full);
				}
			}
		}
		closedir($dir);
	}

	public function initMakeFile($REQ){
		alog("dbfileService-initMakeFile________________________start");
		//복제된 db의 file목록 정보 조회하기
		$sql = "
			select 
				SFILE_SEQ, PATH, NM, FOLDER_YN, FILE_HASH, FILE_DATA
			from SANDBOX_FILE where SANDBOX_SEQ = :SANDBOX_SEQ and DEGREE_SEQ = :DEGREE_SEQ
			order by FOLDER_YN desc, PATH asc /*foler가 상단에 나와서 폴더 먼저 생성*/
		";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
		$stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","initMakeFile()에서 execute()실패했습니다."); 

		$fileArray = $stmt->fetchAll(PDO::FETCH_CLASS);


		//루프 돌면서 처리하기
		//echo "<pre>";
		//var_dump($fileArray);
		//echo "size=" . sizeof($fileArray);
		//exit;

		for($i=0;$i<sizeof($fileArray);$i++){
			if($fileArray[$i]->FOLDER_YN == "Y"){
				//(분개1) 폴더이면 폴더 생성하기
				$fullPath = $REQ["SANDBOX_ROOT"] . $fileArray[$i]->PATH . $fileArray[$i]->NM;
				alog("make folder = " . $fullPath);
				if(!mkdir($fullPath))JsonMsg("500","700","initMakeFile()에서 mkdir실패했습니다."); 
			}else{
				//(분개2) 파일이면 파일 생성하기
				$fullPath = $REQ["SANDBOX_ROOT"] .  $fileArray[$i]->PATH . $fileArray[$i]->NM;
				alog("make file = " . $fullPath);

				$fileData = $fileArray[$i]->FILE_DATA;


				$fileLength = strlen(bin2hex($fileData))/2;
				alog("	fild data size = " . strlen(bin2hex($fileData))/2 );	

				if(is_writable($fullPath)){
					alog("is_writable1 = YES");
				}else{
					alog("is_writable1 = NO");
				}
				$f = fopen($fullPath, "w");
				if(is_writable($fullPath)){
					alog("is_writable2 = YES");
				}else{
					alog("is_writable2 = NO");
				}				
				if(!$f)JsonMsg("500","800","initMakeFile()에서 파일 생성에 실패했습니다.(Fail to fopen new file)"); 
				//fwrite(stream_get_contents($fileData));
				if($fileLength > 0 && !fwrite($f,$fileData)){
					fclose($f);
					JsonMsg("500","810","initMakeFile()에서 파일 쓰기에 실패했습니다.(Fail to fwrite file-data)"); 
				}
				fclose($f);
				

				//if(!file_put_contents($fullPath,$fileData))JsonMsg("500","800","initMakeFile()에서 file_put_contents실패했습니다."); 
			}

			//권한, 소유자 처리
			chmod($fullPath,0777);
			chown($fullPath,"www-data");
			chgrp($fullPath,"www-data");

		}

		alog("dbfileService-initMakeFile________________________end");
	}

	public function rrmdir($src) {
		//alog($src . "\n");
		$dir = opendir($src);
		while(false !== ( $file = readdir($dir)) ) {
			if (( $file != '.' ) && ( $file != '..' )) {
				$full = $src . '/' . $file;
				if ( is_dir($full) ) {
					$this->rrmdir($full);
				}
				else {
					unlink($full);
				}
			}
		}
		closedir($dir);
		rmdir($src);
	}

	//테이블목록, 조회
	public function list($REQ){
		global $log;
        alog("dbfileService-list________________________start");

        //$blob = fopen($filePath, 'rb');
        
		//var_dump($REQ);

        $sql = "
        select 
			SFILE_SEQ as seq,
			NM as nm, 
			FOLDER_YN as dir
		from SANDBOX_FILE
		where 
			SANDBOX_SEQ = :SANDBOX_SEQ 
			and DEGREE_SEQ = :DEGREE_SEQ 
			and PATH = :PATH
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
		$stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        $stmt->bindParam(':PATH', $REQ["PATH"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","create()에서 execute()실패했습니다."); 

		$rtnArray = $stmt->fetchAll(PDO::FETCH_CLASS);
		

        //fclose($blob);

        alog("dbfileService-list________________________end");
		return $rtnArray;
	}

	//테이블목록, 조회
	public function getcode($REQ){
		global $log;
		alog("dbfileService-getcode________________________start");

		//$blob = fopen($filePath, 'rb');
		
		//var_dump($REQ);

		$sql = "
		select FILE_DATA
		from SANDBOX_FILE
		where SANDBOX_SEQ = :SANDBOX_SEQ and DEGREE_SEQ = :DEGREE_SEQ and SFILE_SEQ = :SFILE_SEQ
		";
		$stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
		$stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
		$stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
		$stmt->bindParam(':SFILE_SEQ', $REQ["SFILE_SEQ"]);

		//$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
		if(!$stmt->execute())JsonMsg("500","600","getcode()에서 execute()실패했습니다."); 

		$rtnArray = $stmt->fetchAll(PDO::FETCH_CLASS);
		

		//fclose($blob);

		alog("dbfileService-getcode________________________end");
		return $rtnArray;
	}


	//테이블목록, 조회
	public function create($REQ){
		global $log;
        alog("dbfileService-create________________________start");

        //$blob = fopen($filePath, 'rb');
        
        $sql = "
        insert into SANDBOX_FILE(
            DEGREE_SEQ, SANDBOX_SEQ, PATH, NM, FOLDER_YN
            , FILE_HASH, FILE_DATA, ADD_DT
        )values(
            :DEGREE_SEQ, :SANDBOX_SEQ, :PATH, :NM, 'N'
            , :FILE_HASH, '', date_format(sysdate(),'%Y%m%d%H%i%s')
        )
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':PATH', $REQ["PATH"]);
        $stmt->bindParam(':NM', $REQ["NM"]);
        $stmt->bindParam(':FILE_HASH', $REQ["FILE_HASH"]);

        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","create()에서 execute()실패했습니다."); 
		$rtnVal = $this->DB->lastInsertId();

        //fclose($blob);

        alog("dbfileService-create________________________end");
		return $rtnVal;
	}
	

	//테이블목록, 조회
	public function multiupload($REQ){
		global $log;
        alog("dbfileService-multiupload________________________start");

        //$blob = fopen($filePath, 'rb');
        
        $sql = "
        insert into SANDBOX_FILE(
            DEGREE_SEQ, SANDBOX_SEQ, PATH, NM, FOLDER_YN
            , FILE_HASH, FILE_DATA, ADD_DT
        )values(
            :DEGREE_SEQ, :SANDBOX_SEQ, :PATH, :NM, 'N'
            , :FILE_HASH, :FILE_DATA, date_format(sysdate(),'%Y%m%d%H%i%s')
        )
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':PATH', $REQ["PATH"]);
        $stmt->bindParam(':NM', $REQ["NM"]);
        $stmt->bindParam(':FILE_HASH', $REQ["FILE_HASH"]);
        
        $stmt->bindParam(':FILE_DATA', $REQ["FILE_DATA"], PDO::PARAM_LOB);

        if(!$stmt->execute())JsonMsg("500","600","multiupload()에서 execute()실패했습니다."); 
		$rtnVal = $this->DB->lastInsertId();

        //fclose($blob);

        alog("dbfileService-multiupload________________________end");
		return $rtnVal;
	}

	//테이블목록, 조회
	public function rename($REQ){
		global $log;
        alog("dbfileService-rename________________________start");

        //$blob = fopen($filePath, 'rb');
        //var_dump($REQ);

		//100 본인 객체 정보 변경하기
        $sql = "
        update
			SANDBOX_FILE
		set 
			NM = :NM,
			MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
		where SFILE_SEQ = :SFILE_SEQ and SANDBOX_SEQ = :SANDBOX_SEQ
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':NM', $REQ["NM"]);
        $stmt->bindParam(':SFILE_SEQ', $REQ["SFILE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);

        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","create()에서 execute()실패했습니다."); 

        //fclose($blob);

        alog("dbfileService-rename________________________end");
		return $rtnVal;
	}


	//테이블목록, 조회
	public function mvdir($REQ){
		global $log;
        alog("dbfileService-mvdir________________________start");

        //$blob = fopen($filePath, 'rb');
        //var_dump($REQ);

		//100 본인 객체 정보 변경하기
        $sql = "
        update
			SANDBOX_FILE
		set 
			NM = :NM,
			MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
		where SFILE_SEQ = :SFILE_SEQ and SANDBOX_SEQ = :SANDBOX_SEQ
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':NM', $REQ["NM"]);
        $stmt->bindParam(':SFILE_SEQ', $REQ["SFILE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);

        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","create()에서 execute()실패했습니다."); 
		$stmt = null;


		//200 하위 폴더 정보 변경하기
        $sql = "
        update
			SANDBOX_FILE
		set 
			PATH = replace(PATH,:OLDPATH, :PATH)
			, MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
		where PATH like concat(:OLDPATH,'%')
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':OLDPATH', $REQ["OLDPATH"]);
        $stmt->bindParam(':PATH', $REQ["PATH"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","create()에서 execute()실패했습니다."); 
		$stmt = null;
	
        //fclose($blob);

        alog("dbfileService-mvdir________________________end");
		return $rtnVal;
	}

	//테이블목록, 조회
	public function update($REQ){
		global $log;
        alog("dbfileService-update________________________start");

        //$blob = fopen($filePath, 'rb');
        //var_dump($REQ);

        $sql = "
        update
			SANDBOX_FILE
		set 
			FILE_DATA = :FILE_DATA,
			MOD_DT = date_format(sysdate(),'%Y%m%d%H%i%s')
		where SFILE_SEQ = :SFILE_SEQ and SANDBOX_SEQ = :SANDBOX_SEQ and DEGREE_SEQ = :DEGREE_SEQ
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':FILE_DATA', $REQ["FILE_DATA"], PDO::PARAM_LOB);
        $stmt->bindParam(':SFILE_SEQ', $REQ["SFILE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","update()에서 execute()실패했습니다."); 
	
        //fclose($blob);

        alog("dbfileService-update________________________end");
		return $rtnVal;
	}


	//테이블목록, 조회
	public function rmdir($REQ){
		global $log;
        alog("dbfileService-rmdir________________________start");

        //$blob = fopen($filePath, 'rb');
        //var_dump($REQ);

        $sql = "
        delete from 
			SANDBOX_FILE
		where 
		( 
			( PATH = :PATH and NM = :NM and FOLDER_YN = 'Y' ) /*자기 자신 폴더 삭제*/
			or
			PATH like concat(:PATH,:NM,'/%') /*하위객체 모두 삭제*/
		)
		and SANDBOX_SEQ = :SANDBOX_SEQ and DEGREE_SEQ = :DEGREE_SEQ
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':PATH', $REQ["PATH"]);
		$stmt->bindParam(':NM', $REQ["NM"]);
		$stmt->bindParam(':PATH', $REQ["PATH"]);
		$stmt->bindParam(':NM', $REQ["NM"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","rmdir()에서 execute()실패했습니다."); 
	
        //fclose($blob);

        alog("dbfileService-rmdir________________________end");
		return true;
	}


	//테이블목록, 조회
	public function delete($REQ){
		global $log;
        alog("dbfileService-delete________________________start");

        //$blob = fopen($filePath, 'rb');
        //var_dump($REQ);

        $sql = "
        delete from 
			SANDBOX_FILE
		where SFILE_SEQ = :SFILE_SEQ and SANDBOX_SEQ = :SANDBOX_SEQ
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':SFILE_SEQ', $REQ["SFILE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);

        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","delete()에서 execute()실패했습니다."); 
	
        //fclose($blob);

        alog("dbfileService-delete________________________end");
		return true;
	}


	//테이블목록, 조회
	public function mkdir($REQ){
		global $log;
        alog("dbfileService-mkdir________________________start");

        //$blob = fopen($filePath, 'rb');
		//var_dump($REQ);
        
        $sql = "
        insert into SANDBOX_FILE(
            DEGREE_SEQ, SANDBOX_SEQ, PATH, NM, FOLDER_YN
            , FILE_HASH, FILE_DATA, ADD_DT
        )values(
            :DEGREE_SEQ, :SANDBOX_SEQ, :PATH, :NM, 'Y'
            , :FILE_HASH, '', date_format(sysdate(),'%Y%m%d%H%i%s')
        )
        ";
        $stmt = $this->DB->prepare($sql);

		//var_dump($REQ);
        $stmt->bindParam(':DEGREE_SEQ', $REQ["DEGREE_SEQ"]);
        $stmt->bindParam(':SANDBOX_SEQ', $REQ["SANDBOX_SEQ"]);
        $stmt->bindParam(':PATH', $REQ["PATH"]);
        $stmt->bindParam(':NM', $REQ["NM"]);
        $stmt->bindParam(':FILE_HASH', $REQ["FILE_HASH"]);

        
        //$stmt->bindParam(':FILE_DATA', $blob, PDO::PARAM_LOB);
        if(!$stmt->execute())JsonMsg("500","600","create()에서 execute()실패했습니다."); 
		$rtnVal = $this->DB->lastInsertId();

        //fclose($blob);

        alog("dbfileService-mkdir________________________end");
		return $rtnVal;
	}

	//테이블목록, 엑셀다운로드
	public function goG2Excel(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		alog("DBDEPLOYService-goG2Excel________________________start");
		//처리 결과 리턴
		$rtnVal->RTN_CD = "200";
		$rtnVal->ERR_CD = "200";
		echo json_encode($rtnVal);
		alog("DBDEPLOYService-goG2Excel________________________end");
	}
	//테이블상세, 조회
	public function goG3Search(){
		global $REQ,$CFG,$_RTIME, $log;
		$rtnVal = null;
		$tmpVal = null;
		$grpId = null;
		$rtnVal->GRP_DATA = array();

		alog("DBDEPLOYService-goG3Search________________________start");
//FORMVIEW SEARCH
		$grpId="G3";
	//암호화컬럼
		$FORMVIEW["COLCRYPT"] = array();
		$FORMVIEW["SQL"] = array();
	// SQL LOOP
		// dtlTable
		array_push($FORMVIEW["SQL"], $this->DAO->dtlTable($REQ)); 
		//필수 여부 검사
		$tmpVal = requireFormviewSearchArray($FORMVIEW["SQL"]);
		if($tmpVal->RTN_CD == "500"){
			alog("requireFormview - fail.");
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
		alog("DBDEPLOYService-goG3Search________________________end");
	}
}
                                                             
?>
