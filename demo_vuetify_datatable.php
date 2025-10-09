<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?>
<!DOCTYPE html>
<html>
<head>
    <title>vuetify stepper</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

  <!--css-->
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

  <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">

  <!--js-->
  <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/lodash.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  

</head>
<body>

<div id="app">
    <v-app id="inspire">
        <v-data-table
        :headers="FILESTORE_HEADERS"
        :items="FILESTORE_DATA"
        class="elevation-1"
        :hide-default-footer="true"
        ></v-data-table>
  </v-app>
</div>


<script>

var tData = [];
for(i=0;i<100;i++){
    tData[i] = {
        STOREID: "FS" + i
        , STORETYPE: "LOCAL" + i
        , UPLOADDIR: "/data/www/up" + i
        , CREKEY: "key" + i
        , CRESECRET: "sec" + i
        , REGION: "reg" + i
        , BUCKET: "bkt" + i
        , ACL: "public" + i
    };
}

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
        FILESTORE_HEADERS : [
          {text: 'STOREID', value: 'STOREID', sortable: true},
          {text: 'STORETYPE', value: 'STORETYPE', sortable: true},
          {text: 'UPLOADDIR', value: 'UPLOADDIR', sortable: true},
          {text: 'CREKEY *', value: 'CREKEY', sortable: true},
          {text: 'CRESECRET *', value: 'CRESECRET', sortable: true},
          {text: 'REGION', value: 'REGION', sortable: true},
          {text: 'BUCKET', value: 'BUCKET', sortable: true},
          {text: 'ACL', value: 'ACL', sortable: true},
        ]
        , FILESTORE_DATA: tData
    }
  },
  methods: {
  }
});

function alog(t){
    if(console)console.log(t);
}
</script>
</body>
</html>
