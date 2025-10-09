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
  <script
			  src="https://code.jquery.com/jquery-3.5.1.min.js"
			  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			  crossorigin="anonymous"></script>

</head>
<body>

<div id="app">
  <v-app id="inspire">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Name of step 1
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Name of step 2
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step step="3">
          Name of step 3
        </v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
            <!--
            ####
            #### step 1
            ####
            -->
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'CFG_PROJECT_NAME'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    v-model="CFG_PROJECT_NAME"
                    dense
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'CFG_SEC_KEY'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    v-model="CFG_SEC_KEY"
                    dense
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'CFG_SEC_IV'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    v-model="CFG_SEC_IV"
                    dense
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'CFG_SEC_SALT'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    v-model="CFG_SEC_SALT"
                    dense
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'ADMIN ID'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    v-model="ADMIN_ID"
                    dense
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'ADMIN PWD'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    v-model="ADMIN_PWD"
                    dense
                    label="password"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    v-model="ADMIN_PWD_CONFIRM"
                    dense
                    label="password confirm"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'LDAP AUTH(OPTION)'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    dense
                    v-model="LDAP_HOST"
                    label="IP or DOMAIN"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    v-model="LDAP_PORT"
                    dense
                    label="PORT"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>


          <v-btn
            color="primary"
            @click="e1 = 2;msg();"
          >
            Continue
          </v-btn>
  
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="2">
  
            <!--
            ####
            #### step 2
            ####
            -->

            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'DBMS - CG'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    dense
                    label="IP or DOMAIN"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="PORT"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="DBNM"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="ID"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="PW"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>


            <v-row align="center" no-gutters style="background-color:blue;">
                <v-col cols="12" sm="6"  style="background-color:gray;">
                    <v-subheader v-text="'FILESTORE - CG'"></v-subheader>
                </v-col>
                <v-col cols="12" sm="6"  style="background-color:silver;">
                    <v-text-field
                    dense
                    label="STORETYPE"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="UPLOADDIR"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="READURL"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="CREKEY"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="CRESECRET"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="REGION"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="BUCKET"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                    <v-text-field
                    dense
                    label="ACL"
                    hint="hint text"
                    counter="25"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>


          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
  
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="3">
            <!--
            ####
            #### step 3
            ####
            -->

            <v-row align="center" no-gutters style="background-color:red;">
                <v-col cols="12" sm="6" style="background-color:gray;">
                    <v-subheader v-text="'SQL - Common init file'"></v-subheader>
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

            <v-row align="center" no-gutters style="background-color:red;">
                <v-col cols="12" sm="6" style="background-color:gray;">
                    <v-subheader v-text="'SQL - Service init file'"></v-subheader>
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


          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Continue
          </v-btn>
  
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</div>


<script>
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
        CFG_PROJECT_NAME: ""
        ,e1: 1
    }
  },
  methods: {
      msg : function(){
          alert(this.CFG_PROJECT_NAME);
      }
  }
});

function alog(t){
    if(console)console.log(t);
}
</script>
</body>
</html>
