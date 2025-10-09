<?php
$tkey = "aaaabbbbcccc";
$txt = "cg1234qwer";

//CFG_SEC_IV;
$cipher = "aes-256-cbc";
$ivlen = openssl_cipher_iv_length($cipher); 
echo "iv lenth = " . $ivlen  ."<BR>\n";
$iv = base64_encode(openssl_random_pseudo_bytes($ivlen));
echo "iv = " . $iv  ."<BR>\n";
//$iv = base64_decode($CFG["CFG_SEC_IV"]);
//echo "\n<br> aes_decrypt.iv = " . $CFG_SEC_IV;	
//echo "\n<br> tkey = " . $tkey;	
$ciphertext1 = base64_encode(openssl_encrypt($txt, $cipher, $tkey, OPENSSL_RAW_DATA, base64_decode($iv)));
//$ciphertext2 = base64_encode(openssl_encrypt(pkcs5_pad($txt), $cipher, $tkey, OPENSSL_RAW_DATA, $iv));

echo  "encrypt = [" . $ciphertext1 ."]<BR>\n";
//echo  "encrypt2(pkcs5_pad) = " . $ciphertext2 ."<BR>\n";
//store $cipher, $iv, and $tag for decryption later

$original_plaintext1 = openssl_decrypt(base64_decode($ciphertext1), $cipher, $tkey, OPENSSL_RAW_DATA, base64_decode($iv));
//$original_plaintext2 = pkcs5_unpad(openssl_decrypt(base64_decode($ciphertext2), $cipher, $tkey, OPENSSL_RAW_DATA, $iv));
//echo "plain1 = " . $original_plaintext1 ."<BR>\n";
echo "plain(base64_decode) = [" . $original_plaintext1 ."]<BR>\n";


require_once "../common/include/incSec.php";

$t =  aesEncrypt($txt,$tkey,$iv);
echo "aesEncrypt = [" . $t ."]<BR>\n";

echo "aesDecrypt = [" . aesDecrypt($t,$tkey,$iv)."]<BR>\n";
?>
