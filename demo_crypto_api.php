<?php

//$CFG["CFG_SEC_IV"] = 'I8zyA4lVhMCaJ5Kg';
$key = "1234";

$rtnVal = array();
$rtnVal["plain"] = CryptoJSAesDecrypt($key,$_POST["e2p"]);
$rtnVal["enc"] = CryptoJSAesEncrypt($key, $_POST["p2e"]);

echo json_encode($rtnVal);

function CryptoJSAesEncrypt($passphrase, $plain_text){

    $salt = openssl_random_pseudo_bytes(256);
    $iv = openssl_random_pseudo_bytes(16);
    //on PHP7 can use random_bytes() istead openssl_random_pseudo_bytes()
    //or PHP5x see : https://github.com/paragonie/random_compat

    $iterations = 999;  
    $key = hash_pbkdf2("sha512", $passphrase, $salt, $iterations, 64);

    $encrypted_data = openssl_encrypt($plain_text, 'aes-256-cbc', hex2bin($key), OPENSSL_RAW_DATA, $iv);

    $data = array("ciphertext" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "salt" => bin2hex($salt));
    return json_encode($data);
}

function CryptoJSAesDecrypt($passphrase, $jsonString){

    $jsondata = json_decode($jsonString, true);
    try {
        $salt = hex2bin($jsondata["salt"]);
        $iv  = hex2bin($jsondata["iv"]);          
    } catch(Exception $e) { return null; }

    $ciphertext = base64_decode($jsondata["ciphertext"]);
    $iterations = 999; //same as js encrypting 

    $key = hash_pbkdf2("sha512", $passphrase, $salt, $iterations, 64);

    $decrypted= openssl_decrypt($ciphertext , 'aes-256-cbc', hex2bin($key), OPENSSL_RAW_DATA, $iv);

    return $decrypted;

}

function aes_encrypt($tencrypt,$tkey) { 
	global $CFG;
	//CFG_SEC_IV;
	$cipher = "aes-256-cbc";
	//$ivlen = openssl_cipher_iv_length($cipher);
	//$iv = openssl_random_pseudo_bytes($ivlen);
	$iv = base64_decode($CFG["CFG_SEC_IV"]);
	//echo "\n<br> aes_decrypt.iv = " . $CFG_SEC_IV;	
	//echo "\n<br> tkey = " . $tkey;	

    return base64_encode(openssl_encrypt(pkcs5_pad($tencrypt), $cipher, $tkey, OPENSSL_RAW_DATA, $iv));
    //store $cipher, $iv, and $tag for decryption later
    //$original_plaintext = openssl_decrypt($ciphertext, $cipher, $key, $options=0, $iv, $tag);
	//echo $original_plaintext."\n";
}


function aes_decrypt($decrypt,$tkey) {
	global $CFG;
	//CFG_SEC_IV;

	$cipher = "aes-256-cbc";
	//$ivlen = openssl_cipher_iv_length($cipher);
	//$iv = openssl_random_pseudo_bytes($ivlen);
	$iv = base64_decode($CFG["CFG_SEC_IV"]);	
	//echo "\n<br> aes_decrypt.iv = " . $CFG_SEC_IV;	
	//$ciphertext = openssl_encrypt($tencrypt, $cipher, $tkey, $options=0, $iv, $tag=null);
	//store $cipher, $iv, and $tag for decryption later
	//echo "\n<br> decrypt = " . $decrypt;	
	//echo "\n<br> tkey = " . $tkey;		
	//echo "\n<br> plaintext = " . pkcs5_unpad(openssl_decrypt(base64_decode($decrypt), $cipher, $tkey, OPENSSL_RAW_DATA, $iv));
	return pkcs5_unpad(openssl_decrypt(base64_decode($decrypt), $cipher, $tkey, OPENSSL_RAW_DATA, $iv));
}

function pkcs5_pad($text, $blocksize = 16) {
	$pad = $blocksize - (strlen($text) % $blocksize);
	return $text . str_repeat(chr($pad), $pad);
}

function pkcs5_unpad($text) {
	//$pad = ord($text{strlen($text)-1}); // php 7.4
	$pad = ord($text[strlen($text)-1]); // php 8
	if ($pad > strlen($text)) {
	  return $text;
	}
	if (!strspn($text, chr($pad), strlen($text) - $pad)) {
	  return $text;
	}
	return substr($text, 0, -1 * $pad);
  }

?>
