<html>
<head>
<title>
    crypto.js
</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" integrity="sha512-nOQuvD9nKirvxDdvQ9OMqe2dgapbPB7vYAMrzJihw5m+aNcf0dX53m6YxM4LgA9u8e9eg9QX+/+mPu8kCNpV2A==" crossorigin="anonymous"></script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" crossorigin="anonymous"></script>


</head>
<body>
client plain<BR>
    <textarea id="plain" style="width:100%;height:150px;"/></textarea>
    client plain<BR>
    <textarea id="enc" style="width:100%;height:150px;"/></textarea>
    res plain<BR>
    <textarea id="res_plain" style="width:100%;height:150px;"/></textarea>
    res enc<BR>
    <textarea id="res_enc" style="width:100%;height:150px;"/></textarea>

</body>
<script>
    var iv = 'I8zyA4lVhMCaJ5Kg';
    var option = { 
        iv: iv
        , mode: CryptoJS.mode.CBC
        , padding: CryptoJS.pad.Pkcs7
        //, format: CryptoJS.format.OpenSSL
    };

    var message = "Led Zeppelin- Stairway to Heaven한글되나요?숍"; 
    alog("plain = " + message);
    var passphrase = "1234";
    var encrypt = CryptoJS.AES.encrypt(message, passphrase, option);
    alog("encrypt = " + encrypt);

    var decrypted = CryptoJS.AES.decrypt(encrypt, passphrase, option );
    alog("decrypted binary = " + decrypted);

    // 암호화 이전의 문자열은 toString 함수를 사용하여 추출할 수 있다.
    var text = decrypted.toString(CryptoJS.enc.Utf8);
    alog("plain tostring = " + text);

    var te = CryptoJSAesEncrypt(passphrase, message);
    var tp = CryptoJSAesDecrypt(passphrase, te);

    $.ajax({
        method: "POST",
        url: "demo_crypto_api.php",
        dataType:"JSON",
        data: { e2p : te, p2e: message }
    })
    .done(function( msg ) {
        alog( "res plain: " + msg.plain );
        alog( "res enc: " + msg.enc );
    });

    alog("CryptoJSAesEncrypt = " + te);
    alog("CryptoJSAesDecrypt = " + tp);

    function CryptoJSAesDecrypt(passphrase,encrypted_json_string){

        var obj_json = JSON.parse(encrypted_json_string);

        var encrypted = obj_json.ciphertext;
        var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
        var iv = CryptoJS.enc.Hex.parse(obj_json.iv);   

        var key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64/8, iterations: 999});


        var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv});

        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    function CryptoJSAesEncrypt(passphrase, plain_text){

        var salt = CryptoJS.lib.WordArray.random(256);
        var iv = CryptoJS.lib.WordArray.random(16);
        //for more random entropy can use : https://github.com/wwwtyro/cryptico/blob/master/random.js instead CryptoJS random() or another js PRNG

        var key = CryptoJS.PBKDF2(passphrase, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64/8, iterations: 999 });

        var encrypted = CryptoJS.AES.encrypt(plain_text, key, {iv: iv});

        var data = {
            ciphertext : CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
            salt : CryptoJS.enc.Hex.stringify(salt),
            iv : CryptoJS.enc.Hex.stringify(iv)    
        }

        return JSON.stringify(data);
    }

    function alog(t){
        if(console)console.log(t);
    }
</script>

</html>