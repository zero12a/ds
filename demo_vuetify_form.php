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
  <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"><!--캘린더 event아이콘-->

  <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">



  <!--js-->
  <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/moment.min.js"></script>
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


        <v-row align="center" no-gutters style="background-color:blue;">
            <v-col cols="12" sm="6"  style="background-color:gray;">
                <v-subheader v-text="'text'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6"  style="background-color:yellow;">
                <v-text-field
                dense
                hint="hint text"
                counter="25"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:red;">
            <v-col cols="12" sm="6"  style="background-color:gray;">
                <v-subheader v-text="'text (Hide details)'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6"  style="background-color:silver;">
                <v-text-field
                dense
                hint="hint text"
                counter="25"
                hide-details
                filled
                ></v-text-field>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:blue;">
            <v-col cols="12" sm="6"  style="background-color:gray;">
                <v-subheader v-text="'password'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6"  style="background-color:white;">
                <v-text-field
                dense
                type="password"
                hint="hint text"
                counter="25"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:red;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'File input'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:silver;">
                <v-file-input
                dense
                multiple
                hint="hint text"
                ></v-file-input>
            </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:blue;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'textarea'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:white;">
                <v-textarea
                dense
                name="input-7-1"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                hint="Hint text"
                counter="25"
            ></v-textarea>
            </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center" no-gutters style="background-color:red;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'Multiple select'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:silver;">
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
                    clearable
                ></v-select>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:blue;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'switch'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:white;">
                <v-switch
                dense
                label="Show messages"></v-switch>
            </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row align="center" no-gutters style="background-color:red;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'checkbox single'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:silver;">
                <v-row class="mx-0">
                    <v-checkbox
                    dense
                    label="Do you agree?"
                    required
                    ></v-checkbox>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:blue;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'checkbox array'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:white;">
                <v-row class="mx-0">
                    <v-checkbox v-for="chk in chk_list"
                    dense
                    class="mr-4"
                    :key="chk.value"
                    :label="chk.label"
                    :value="chk.value"
                    v-model="chk_selected"
                    ></v-checkbox>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:red;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'checkbox'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:silver;">
                <v-radio-group
                    dense 
                    v-model="g1.radioGroup" row>
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
        <v-divider></v-divider>
        <v-row align="center" no-gutters style="background-color:blue;">
            <v-col cols="12" sm="6" style="background-color:gray;">
                <v-subheader v-text="'calandar without button'"></v-subheader>
            </v-col>
            <v-col cols="12" sm="6" style="background-color:white;">


                <v-menu
                v-model="date1_2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        dense
                        v-model="date1_1"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        hint="hint text"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date1_1" @input="date1_2 = false"></v-date-picker>
                </v-menu>


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
      ,date1_1: moment().format("YYYY-MM-DD")
      ,date1_2: false      
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
