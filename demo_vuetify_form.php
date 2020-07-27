<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?>
<!DOCTYPE html>
<html>
<head>
    <title>vuetify form</title>
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
            <v-col cols="12" sm="6">
                <v-subheader v-text="'text'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field
                dense
                label="Regular"
                hint="hint text"
                counter="25"
                ></v-text-field>
            </v-col>
        </v-row>



        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-subheader v-text="'File input'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-file-input
                dense
                multiple label="File input"></v-file-input>
            </v-col>
        </v-row>


        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-subheader v-text="'textarea'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-textarea
                dense
                name="input-7-1"
                label="Default style"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                hint="Hint text"
                counter="25"
            ></v-textarea>
            </v-col>
        </v-row>



        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-subheader v-text="'Multiple select'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select
                    dense
                    v-model="g1.user_cd" 
                    :items="items1"
                    label="Select:"
                    multiple
                    item-value="cd"
                    item-text="nm"
                    @change="alog(this)"
                    hint="Hint text"
                ></v-select>
            </v-col>
        </v-row>

        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-subheader v-text="'switch'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                <v-switch
                dense
                label="Show messages"></v-switch>
            </v-col>
        </v-row>
        

        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-subheader v-text="'checkbox'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                
                <v-checkbox
                dense
                label="Do you agree?"
                required
                ></v-checkbox>
            </v-col>
        </v-row>
        

        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-subheader v-text="'checkbox'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6">
                
                <v-radio-group v-model="g1.radioGroup" row>
                    <v-radio
                    dense
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                    ></v-radio>
                </v-radio-group>
            </v-col>
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
      },
      items1: [
            {"nm" : "text1", "cd" : "value1"}
            ,{"nm" : "text2", "cd" : "value2"}
            ,{"nm" : "text3", "cd" : "value3"}
            ,{"nm" : "text4", "cd" : "value4"}
    ],
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
