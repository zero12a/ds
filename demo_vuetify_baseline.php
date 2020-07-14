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
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="addTab(1,'demo_webix.php');">Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="addTab(2,'img_moki.jpg');">Settings</v-list-item-title>
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
          class="overflow-hidden"
        >
          <v-flex text-xs-center fill-height>
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
        
            <div v-for="i in mytab" 
            :style="'padding-bottom:48px;height:100%;display:' + i.isdisplay"
            :id="'div-' + i.id"
            :ref="'ref-' + i.id"
            >
                <iframe frameborder=”0″ marginwidth=”0″ marginheight=”0″ 
                style="height:100%;width:100%;border-width:0px;border-color:silver;"
                :id="'iframe-' + i.id" 
                :name="'iframe-' + i.id"
                :src="i.link">
                </iframe>
            </div>
            </v-card>
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
        active_tab : "tab1",
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
            alog("  tHref=" + tHref);

            //alert(tmp);
        },          
        addTab: function(tmp,url){
            alog("addTab().........................start");
            tJson = {id:"tab" + tmp,name:"name" + tmp,link:url,isdisplay:""};

            //기존꺼 모두 숨기기
            for(t=0;t<this.mytab.length;t++){
              this.mytab[t].isdisplay = "none";
            }
            this.mytab[this.mytab.length] = tJson;
            this.active_tab = "tab" + tmp;
            alog("active_tab = " + this.active_tab);
        }, 
        changeTab: function(tId){
            alog("changeTab().........................start");
            //alog(this);
            alog("  tId=" + tId);
            for(t=0;t<this.mytab.length;t++){
                //alog(this.$refs["ref-" + this.mytab[t].id][0]);
                if(this.mytab[t].id == tId){
                    this.mytab[t].isdisplay = "";
                    //document.querySelector("ref-" + tId).style.display = "";
                    //this.$refs["ref-" + this.mytab[t].id][0].style.display = "";
                    //this.$refs["ref-" + this.mytab[t].id][0].style.visibility = "visible"; 
                    //alog(document.getElementById("div-"+ tId));
                    //document.getElementById("div-"+ tId).style.display = "";
                    //alog(this.$refs["ref-" + tId][0].style);

                    //$("#div-" + tId).css("display", "");   
                    //this.mytab[t].isdisplay = "visible";
                }else{
                    this.mytab[t].isdisplay = "none";
                    //this.$refs["ref-" + this.mytab[t].id][0].style.display = "none";
                    //this.$refs["ref-" + this.mytab[t].id][0].style.visibility = "hidden"; 
                    //alog(document.getElementById("div-"+ tId));
                    //document.getElementById("div-"+ tId).style.display = "none";
                    //$("#div-" + tId).css("display", "none");   
                    //this.mytab[t].isdisplay = "hidden";
                }
            }
            //alert(tmp);
        },
        closeTab: function(tId){
            alog("closeTab().........................start");
            for(t=0;t<this.mytab.length;t++){
                if(this.mytab[t].id == tId){
                    this.mytab.splice(t,1);
                }
            }
        }
    }
})

function alog(t){
    if(console)console.log(t);
}
</script>
</body>
</html>
