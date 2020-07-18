<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?>
<!DOCTYPE html>
<html>
<head>
    <title>vuetify baseline</title>
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
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link  @click="addTab('tab1','탭1','demo_webix.php');">
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link  @click="addTab('tab2','탭2','demo_jqwidgets.php');">
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="addTab('tab3','탭3','demo_buefy.php');">
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title >Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="addTab('tab4','탭4','CG/perfdhtmlxView.php');">
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title >Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>          
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="pa-0 fill-height"
          fluid
        >

        <v-layout
          justify-center
          align-center 
          class="ove rflow-hidden"
        >
          <v-flex id="vflex" text-xs-center fill-height>
            <v-tabs
                dark
                background-color="teal darken-3"
                show-arrows
                v-on:change="changeTabs"
                v-model="active_tab"
            >
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                <v-tab
                v-for="i in mytab"
                :key="i.id"
                class="pr-0"
                @click="changeTab(i.id)"
                >
                {{ i.name }}&nbsp;<v-btn icon small @click.prevent="closeTab(i.id)"><v-icon small>fas fa-times</v-icon></v-btn>
                </v-tab>
            </v-tabs>
        
            <div id="tabContent" class="divTab" ref="refTabContent"
             style="overflow:hidden;"></div>


            </v-flex>
        </v-layout>
        
        </v-container>
      </v-main>
    </v-app>

</div>

<script>


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
    props: {
        source: String,
    },

    data: () => ({
        drawer: null,
        active_tab : null, //0, 1, 2, 3 ~ 숫자 인덱스 순서임
        mytab : [
        ]    
    }),

    created () {
        this.$vuetify.theme.dark = false
    },

    methods:{
        changeTabs: function(tHref){
            alog("changeTabs().........................start");
            alog(this);
            //alog("  tHref=" + tHref);

            //alert(tmp);
        },          
        addTab: function(tId,tNm,tUrl){
            alog("addTab().........................start");
            tJson = {id:tId,name:tNm,link:tUrl,isdisplay:""};

            //이미 추가된 메뉴이면 활성화 시키기
            findIndex = _.findIndex(this.mytab, ['id', tId]);
            //alog("  findIndex = " + findIndex);
            if(findIndex >= 0){
              //선택탭 활성화만 하고 리턴
              this.mytab[findIndex].isdisplay = "";
              this.active_tab = findIndex;
            }else{
              //기존꺼 모두 숨기기
              for(t=0;t<this.mytab.length;t++){
                this.mytab[t].isdisplay = "none";
                //alog("  hidden tabid = #div-" + this.mytab[t].id);
                //$("#div-"+ this.mytab[t].id).css("display","none");

                $("#div-"+ this.mytab[t].id).css("visibility","hidden");
                $("#div-"+ this.mytab[t].id).css("z-index","0");
                //$("#div-"+ this.mytab[t].id).css("top","-5000px");   
              }
              this.mytab[this.mytab.length] = tJson;
              this.active_tab = this.mytab.length - 1;

              //html 생성하기
              var tabContentHeight = $("#tabContent").height();
              //alert(tabContentHeight);

              tmp = '<div class="divTab"  id="div-'  + tId + '"';
              tmp += ' style="overflow:hidden;position:absolute;width:100%;height:' + tabContentHeight + 'px;z-index:1;"><iframe frameborder="0" marginwidth="0" marginheight="0" ';
              tmp += '    style="border:0px;position:relative;border:none;height:100%;width:100%;border-width:0px;border-color:silver;" ';
              tmp += '    frameborder="0" id="iframe-' + tId + '" src="' + tUrl + '"> ';
              tmp += '  </iframe>';
              tmp += '</div>';

              $("#tabContent").append( $(tmp) );
              //document.getElementById("iframe-"+ tId).src = tUrl;
            }


            //alog("  active_tab = " + this.active_tab);
        }, 
        changeTab: function(tId){
            alog("changeTab().........................start");
            //alog(this);
            alog("  tId=" + tId);
            //alog("  active_tab = " + this.active_tab);
            for(t=0;t<this.mytab.length;t++){
                //alog(t + "   #div-"+ this.mytab[t].id);
                if(this.mytab[t].id == tId){
                    this.mytab[t].isdisplay = "";
                    //$("#div-"+ this.mytab[t].id).css("display","");

                    $("#div-"+ this.mytab[t].id).css("visibility","visible");
                    $("#div-"+ this.mytab[t].id).css("z-index","1");
                    //$("#div-"+ this.mytab[t].id).css("top","0px");   
                }else{
                    this.mytab[t].isdisplay = "none";
                    //$("#div-"+ this.mytab[t].id).css("display","none");

                    $("#div-"+ this.mytab[t].id).css("visibility","hidden");
                    $("#div-"+ this.mytab[t].id).css("z-index","0");
                    //$("#div-"+ this.mytab[t].id).css("top","-5000px");                    
                }
            }
            //alert(tmp);
        },
        closeTab: function(tId){
            alog("closeTab().........................start ");
            alog("  tId = " + tId);
            //alog("  active_tab = " + this.active_tab);

            var otherActive = "";
            for(t=0;t<this.mytab.length;t++){

                if(this.mytab[t].id == tId){
                  //this.$refs["ref-" + this.mytab[t].id][0].remove();

                  //활성화 상태
                  var isDisplay = this.mytab[t].isdisplay + "";

                  //배열에서 지우기
                  $("#div-"+ this.mytab[t].id).remove(); //오브젝트 삭제

                  this.mytab.splice(t,1);

                  //보여주던 탭이 닫쳤으면 활성화탭 넘겨주기
                  if(isDisplay == "" && this.mytab.length > 0){
                    this.active_tab = 0;//첫번째 탭으로 보내기
                    this.mytab[0].isdisplay = "";
                  }else{
                    //닫힌 탭이 중간이고 우측이 활성화 탭이면 활성화 탭 숫자 1 줄이기
                    if(t < this.active_tab){
                      this.active_tab--;
                    }
                  }
                  if(this.mytab.length>0){
                    //$("#div-"+ this.mytab[this.active_tab].id).css("display","");
                    $("#div-"+ this.mytab[this.active_tab].id).css("visibility","visible");
                    $("#div-"+ this.mytab[this.active_tab].id).css("z-index","1");
                    //$("#div-"+ this.mytab[this.active_tab].id).css("top","0px");
                  }

                }
            }
            
        }
    }
});

function alog(t){
    if(console)console.log(t);
}

$( window ).resize( function() {
  alog("window.resize()......................start");
  // do somthing
  var vflexHeight = $("#vflex").height() - 48;

  $(".divTab").css("height",vflexHeight);

});
$( document ).ready(function() {
  alog("document.ready()......................start");

  var vflexHeight= $("#vflex").height() - 48;

  
  $(".divTab").css("height",vflexHeight);
});

</script>
</body>
</html>
