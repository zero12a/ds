<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?>
<!DOCTYPE html>
<html>
<head>
    <title>vuetify login</title>
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
  <script
			  src="https://code.jquery.com/jquery-3.5.1.min.js"
			  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			  crossorigin="anonymous"></script>

</head>
<body>

<div id="app">
    <v-app id="inspire">

    <v-container fluid>

        <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="6">
                <p class="text-center text-h3"><v-icon x-large>mdi-lock</v-icon>Login</p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row align="center" no-gutters>
            <v-spacer></v-spacer>

            <v-col cols="6">
                <v-text-field

                label="ID"
                ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

        <v-row align="center" no-gutters>
            <v-spacer></v-spacer>

            <v-col cols="6">
                <v-text-field

                type="password"
                label="PASSWORD"
                ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

        <v-row align="center" no-gutters>
            <v-spacer></v-spacer>

            <v-col cols="6">
                <v-row class="mx-0">
                    <v-checkbox
                    dense
                    label="Remember me"
                    required
                    ></v-checkbox>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

        <v-row align="center" no-gutters>
            <v-spacer></v-spacer>

            <v-col cols="6">
                <v-btn color="primary" @click="alog('go login')">Login</v-btn>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

       

    </v-app>
</div>
<script>

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
      g1: {
        user_cd: []
        ,radioGroup: 1
      }
      ,chk_selected: ["value3"]
      ,chk_list: [
           { label: "label1", value: "value1" }
          ,{ label: "label2", value: "value2" }
          ,{ label: "label3", value: "value3" }
          ,{ label: "label4", value: "value4" }
          ,{ label: "label5", value: "value5" }
      ]
      ,items1: [
            {"nm" : "text1", "cd" : "value1"}
            ,{"nm" : "text2", "cd" : "value2"}
            ,{"nm" : "text3", "cd" : "value3"}
            ,{"nm" : "text4", "cd" : "value4"}
      ]
  }),
  methods: {
      alog: function(t){
        if(console)console.log(t);
      }
  }
})
function alog(t){
    if(console)console.log(t);
}
</script>
</body>
</html>
