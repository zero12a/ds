<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
    <div id="app">
    <v-app id="inspire">
        <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col
            v-for="n in lists"
            :key="n"
            cols="12"
            sm="4"
            >
            <v-card
                class="pa-2"
                outlined
                tile
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            {{n.overline}}
                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                            {{n.title}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{n.desc}}</v-list-item-subtitle>
                    </v-list-item-content>
            
                    <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                    ></v-list-item-avatar>
                </v-list-item>
            
                <v-card-actions>
                    <v-btn
                    outlined
                    rounded
                    text
                    @click="goDetail(n.list_seq)"
                    >
                    Button
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
    </v-app>
    </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
  <script>

function alog(t){
        if(console)console.log(t);
    }


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data : {
            lists : [
                {overline : "abc1", title : "headline 5", desc : "my coding school", list_seq : 1}
                ,{overline : "abc2", title : "headline 5", desc : "my coding school", list_seq : 2}
                ,{overline : "abc3", title : "headline 5", desc : "my coding school", list_seq : 3}
                ,{overline : "abc4", title : "headline 5", desc : "my coding school", list_seq : 4}
                ,{overline : "abc5", title : "headline 5", desc : "my coding school", list_seq : 5}
                ,{overline : "abc6", title : "headline 5", desc : "my coding school", list_seq : 6}
                ,{overline : "abc7", title : "headline 5", desc : "my coding school", list_seq : 7}
                ,{overline : "abc8", title : "headline 5", desc : "my coding school", list_seq : 8}
            ]
        },
        methods:{
            changeTabs: function(tHref){
                alog("changeTabs().........................start");
            },
            goDetail: function(t){
                alog("goDetail().........................start");
                window.location.href = "std_detail.php?list_seq=" + t;

            }
        }  
    });


    
  </script>
</body>
</html>
