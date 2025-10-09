<!DOCTYPE html>
<html>
<head>
    <title>vuetify tab2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

  <!--css-->
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

  <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">

  <!--js-->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>

  <style>
    /*
    우측 스크롤 문제 생기는거 해결
    https://stackoverflow.com/questions/46522331/scroll-bar-in-the-main-section-of-a-v-app
    */
    html{
      overflow-y: hidden;
    }
  </style>

</head>
<body>
    <div id="app">
    <v-app id="inspire">

        <v-tabs
            background-color="primary"
            show-arrows
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            v-on:change="changeTabs"
            v-model="activeTabIdx"
        >
            <v-tab
            v-for="item in items"
            :key="item.tab"
            >
            {{ item.tab }}&nbsp;<v-btn icon small @click.prevent="closeTab(item.tab)"><v-icon small>fas fa-times</v-icon></v-btn>
            </v-tab>
        </v-tabs>
    
        <v-tabs-items v-model="activeTabIdx" style="height:100%;">
            <v-tab-item
            v-for="item in items"
            :key="item.tab"  style="height:100%;"
            ><iframe width="100%"  style="border:0px;position:relative;border:none;height:100%;width:100%;border-width:0px;border-color:silver;"
            frameborder="0"  :src="item.content"  
            style="height:100%;"></iframe>
            </v-tab-item>
        </v-tabs-items>

        <v-btn icon small @click="addTab()">addTab</v-btn>
    </v-app>
    </div>
    
  <script>
  new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            activeTabIdx : null, //0, 1, 2, 3 ~ 숫자 인덱스 순서임
            items: [
                { tab: 'One', content: 'http://www.daum.net/' },
                { tab: 'Two', content: 'http://www.naver.com/' },
                { tab: 'Three', content: 'demo_webix.php' },
                { tab: 'Four', content: 'demo_toastr.php' },
                { tab: 'Five', content: 'Tab 5 Content' },
                { tab: 'Six', content: 'Tab 6 Content' },
                { tab: 'Seven', content: 'Tab 7 Content' },
                { tab: 'Eight', content: 'Tab 8 Content' },
                { tab: 'Nine', content: 'Tab 9 Content' },
                { tab: 'Ten', content: 'Tab 10 Content' },
            ],
        }
    },
    methods:{
        addTab: function(){
            alog("addTab().........................start");
            
            this.items.push({tab: 'Num11', content:'demo_split.php'});
            alog("액티브 변경 = " + this.items.length);
            this.activeTabIdx = this.items.length-1;
        },
        changeTabs: function(tHref){
            alog("changeTabs().........................start");
            alog("  tHref = " + tHref);
            alog("  this.activeTabIdx = " + this.activeTabIdx);

            
            //alert(tmp);
        },    
        closeTab: function(tId){
            alog("closeTab().........................start");
            var closeTabIdx=null;
            for(t=0;t<this.items.length;t++){
                //alog(this.items[t]);
                if(this.items[t].tab == tId){
                    closeTabIdx = t;
                }
            }
            alog("closeTabIdx = " + closeTabIdx);

            alog("activeTabIdx1 = " + this.activeTabIdx);
            tabMoveBefore = 0;
            tabMoveAfter = 0;
            if(this.activeTabIdx == closeTabIdx){
                if(this.activeTabIdx  == this.items.length-1 && this.items.length>1){
                    //마지막 액티브탭을 닫으면 별도 처리 없어도 자동으로 1감소
                }else{
                    //액티브탭이랑 클로즈탭이 같으면 포커스 잃고 맨마지막으로 가는데, 그거 보다는 1작아 지는게 나음
                    tabMoveAfter--;
                }
            }
            if(this.activeTabIdx > closeTabIdx){
                //잘되기 때문에 처리해줄게 없음
                if(this.activeTabIdx-1 == closeTabIdx){
                    //포커스 잃고 맨 마지막 탭으로 이동하기 때문에 그거 보다 나은 조치(아무처리 안함)
                }else{
                    //가만 두면 앱티브탭이 그보다 1큰 탭으로 교체되기 때문에 1줄여주기
                    tabMoveAfter--;
                }
            }
            if(this.activeTabIdx < closeTabIdx){
                //잘되기 때문에 처리해줄게 없음
            }

            alog("activeTabIdx1 = " + this.activeTabIdx);
            this.activeTabIdx = this.activeTabIdx + tabMoveBefore;
            alog("tabMoveBefore = " + tabMoveBefore);
            alog("tabMoveAfter = " + tabMoveAfter);
            //this.items.splice(closeTabIdx,1);
            Vue.delete(this.items, closeTabIdx);
            this.activeTabIdx = this.activeTabIdx + tabMoveAfter;

            alog("activeTabIdx2 = " + this.activeTabIdx);

        }
        }

    });

    function alog(t){
        if(console)console.log(t);
    }
  </script>
</body>
</html>