<?php
echo "11";

require_once "/data/www/lib/php/vendor/autoload.php";

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;

echo "22";

//exit;

// Create a client with a base URI
$client = new GuzzleHttp\Client();
// Send a request to https://foo.com/api/test
//     'body' => 'grant_type=password&client_id=demoapp&client_secret=demopass&username=demouser&password=testpass'

$url = "https://new.land.naver.com/api/articles?cortarNo=1130510300&order=rank&realEstateType=SGJT:DDDGG&tradeType=A1&tag=:FOURROOM:FOURBATH::::::&rentPriceMin=0&rentPriceMax=900000000&priceMin=60000&priceMax=100000&areaMin=0&areaMax=900000000&oldBuildYears=20&recentlyBuildYears=&minHouseHoldCount=&maxHouseHoldCount=&showArticle=false&sameAddressGroup=false&minMaintenanceCost=&maxMaintenanceCost=&priceType=RETAIL&directions=&page=1&articleState=";
/*
npic=1YsUMZo0MvYvXnnHNrgyDf0RzskoiQQJd1WywRQgHPGb2fyGCvunghPVJDI61AzfCA==; 
NNB=SRFJMZHIN74FS; 
ASID=74279854000001633a99e7da00000055; 
_ga=GA1.2.1153448189.1531954831; 
_ga_7VKFYR6RV1=GS1.1.1639611369.37.1.1639612099.27; 
NDARK=N; 
wcs_bt=4f99b5681ce60:1682290682; 
MM_NEW=1; 
landHomeFlashUseYn=Y; 
__utma=163452323.1153448189.1531954831.1675124514.1676807810.3; 
__utmz=163452323.1676807810.3.3.utmcsr=land.naver.com|utmccn=(referral)|utmcmd=referral|utmcct=/auction/; 
nhn.realestate.article.trade_type_cd=A1; 
_ga_4BKHBFKFK0=GS1.1.1668606540.1.1.1668606542.58.0.0; 
_tt_enable_cookie=1;
_ttp=4b0274d8-d243-4688-be51-f5831af07629; 
nhn.realestate.article.rlet_type_cd=A01; 
nhn.realestate.article.ipaddress_city=1100000000; 
REALESTATE=Mon%20Apr%2024%202023%2007%3A57%3A57%20GMT%2B0900%20(KST); 
page_uid=iZLqNdprvmsssBngooRssssssEK-394532; 
nx_ssl=2
*/


$jar = \GuzzleHttp\Cookie\CookieJar::fromArray(
    [
        'npic' => '1YsUMZo0MvYvXnnHNrgyDf0RzskoiQQJd1WywRQgHPGb2fyGCvunghPVJDI61AzfCA=='
        ,'NNB' => 'SRFJMZHIN74FS'
        ,'ASID' => '74279854000001633a99e7da00000055'
        ,'_ga' => 'GA1.2.1153448189.1531954831'
        ,'_ga_7VKFYR6RV1' => 'GS1.1.1639611369.37.1.1639612099.27'
        ,'NDARK' => 'N'
        ,'wcs_bt' => '4f99b5681ce60:1682290682'
        ,'MM_NEW' => '1'
        ,'landHomeFlashUseYn' => 'Y'
        ,'__utma' => '163452323.1153448189.1531954831.1675124514.1676807810.3'
        ,'__utmz' => '163452323.1676807810.3.3.utmcsr=land.naver.com|utmccn=(referral)|utmcmd=referral|utmcct=/auction/'
        ,'nhn.realestate.article.trade_type_cd' => 'A1'
        ,'_ga_4BKHBFKFK0' => 'GS1.1.1668606540.1.1.1668606542.58.0.0'
        ,'_tt_enable_cookie' => '1'
        ,'_ttp' => '4b0274d8-d243-4688-be51-f5831af07629'
        ,'nhn.realestate.article.rlet_type_cd' => 'A01'
        ,'nhn.realestate.article.ipaddress_city' => '1100000000'
        ,'REALESTATE' => 'Mon%20Apr%2024%202023%2007%3A57%3A57%20GMT%2B0900%20(KST)'
        ,'page_uid' => 'iZLqNdprvmsssBngooRssssssEK-394532'
        ,'nx_ssl' => '2'
    ],
    'new.land.naver.com'
);

try{
    $res = $client->request('POST', $url, [
        'timeout' => 3,
        'connect_timeout' => 1,
        'read_timeout' => 2,


        'form_params' => [
            'grant_type' => 'password',
            'client_id' => 'demoapp',
            'client_secret' => 'demopass1',
            'username' => 'demouser',
            'password' => 'testpass'
        ],
        'cookies' => $jar,
        'headers' => [
            'Accept' => '*/*'
            ,'Accept-Encoding' => 'gzip, deflate, br'
            ,'Accept-Language' => 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3'
            ,'Sec-Fetch-Dest' => 'empty'
            ,'Sec-Fetch-Mode' => 'cors'
			,'Sec-Fetch-Site' => 'same-origin'
            ,'Host' => 'new.land.naver.com'
            ,'Referer' => 'https://new.land.naver.com/houses?ms=37.6387557,127.0246915,16&a=SGJT:DDDGG&b=A1&e=RETAIL&f=60000&g=100000&j=20&q=FOURROOM&r=FOURBATH'
            ,'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2ODIyOTM1MzUsImV4cCI6MTY4MjMwNDMzNX0.KmgWJ6ImO9eObitZnNP8bZlYNtLTly0DqTga0PNBrxc'
            ,'User-Agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0'
            ]
    ]);
    
    echo "<hr>" . $res->getStatusCode();
    // "200"
    echo "<hr>" . $res->getHeader('content-type')[0];
    // 'application/json; charset=utf8'
    echo "<hr>" . $res->getBody();

}catch(ClientException $e) {
    echo $e->getMessage() . "\n";
    echo $e->getRequest()->getMethod();
}catch(GuzzleException $e) {
    echo $e->getMessage() . "\n";
    echo $e->getRequest()->getMethod();
}
/*
{
    "access_token":"e17aef07bec2b423703d48a3b2c59e99b213689e"
    ,"expires_in":3600,"token_type":"Bearer","scope":null
    ,"refresh_token":"aad4eeb0aad17706a60f3c8f7c3a4cdb6787e498"
}

*/


?>