<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?>
<!DOCTYPE html>
<html>
<head>
    <title>vuetify snackbar</title>
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
        <div>
        <v-btn dark color="orange darken-2" @click="showAll()"> Open Snackbars </v-btn>
        <v-btn dark color="orange darken-2" @click="addMsg()"> Add Snackbars </v-btn>
        <v-snackbar 

        :style="'padding-bottom:' + calcMargin(i) + ';'"
        v-for="(s,i) in snackbars"
        :key="i"
        v-model="s.show"
        :absolute="true"
        :bottom="true"
        :right="true"
        :timeout="s.timeout"
        >
            {{ s.msg }}
            <v-btn class="float-right" color="blue" text @click="hide(i)"> Close </v-btn>
        </v-snackbar>

        </div>

    </v-app>
</div>
<script>



new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
      snackbars: []
    })
    ,watch: {
        snackbars: {
            deep: true, //하위오브젝트 변경까지 모니터링
            handler(newVal, oldVal){
                alog("watch.snackbars......................start");
                alog("newVal = " + JSON.stringify(newVal));
                alog("oldVal = " + JSON.stringify(oldVal));
                for(k=0;k<newVal.length;k++){

                    alog(k + ".show = " + newVal[k].show);                    
                    alog(k + ".msg = " + newVal[k].msg);
                    if(newVal[k].show == false){
                        alog("  Show is false. remove.")
                        newVal.splice(k,1);
                    }
                }
                //alog(oldVal);
                alog("watch.snackbars......................end");
            }
        }
    }
    ,methods: {
        addMsg() {
            alog("addMsg......................start");
            this.snackbars.push({msg: 'Hey I am the add Hey I am the add Hey I am the add Hey I am the add - '  + this.snackbars.length, show:true, timeout: 3000});
            //alog(this.snackbars);
            //alog(_.find(this.snackbars,['show',true]));
        },
        calcMargin(i) {
            return (i*70) + 'px'
        },
        hide(i){
            alog("hide......................start");
            this.snackbars.splice(i,1);
            alog("hide......................end");
        },
        showAll(){
            alog("showAll......................start");
            for(t=0;t<this.snackbars.length;t++){
                this.snackbars[t].show = true;
            }
            alog(this.snackbars);
        }
    }
});

function alog(t){
    if(console)console.log(t);
}
</script>
</body>
</html>
