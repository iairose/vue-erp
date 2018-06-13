<template>
<v-app> 
 <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="topmenu in topmenus" :key="topmenu" @click="">
{{ topmenu }}
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app height="46px" class="navbg">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>fas fa-th</v-icon></v-toolbar-side-icon>
      
      <v-toolbar-title>Sales</v-toolbar-title>
       <v-toolbar-items>

    <v-layout row justify-space-between align-center>
      <v-flex xs10 class="menu_u_r">      
       <v-btn v-for="topmenu in topmenus" :key="topmenu" flat>{{ topmenu }}</v-btn>     
      </v-flex>
      <v-flex xs2 text-xs-right align-center>
      <div class="menu_wrench"><span class="menu_user menu_user_hide"><v-btn flat icon><i class="fas fa-wrench"></i></v-btn></span>
      <span class="menu_user"><a href="#"><img src="./assets/img/1.jpg"/></a></span></div>
      </v-flex>
    </v-layout>
    </v-toolbar-items>
    </v-toolbar>


    <v-content>      
      <v-container fluid>
         <v-layout
          justify-center
          align-center
          row wrap
        >
          <v-flex xs12>
<v-layout row wrap>
<v-flex xs12 id="fix-for-tab">
<v-card>
<div class="top-tile">


<!-- toptitlesearch start -->
<div id="toptitlesearch">
<div class="toptitle">            
<span id="item-title">This is my product title</span>
</div>
<!-- toptitle start       -->
<div class="toptitle">  
<!-- search-wrap start   -->
<div id="search-wrap">
<!-- filter-search start -->
<div class="filter-search">

<filter_a_chip></filter_a_chip>
<custom_filter_chip></custom_filter_chip>
<groupby_chip></groupby_chip>
<groupby_dropdown_chip></groupby_dropdown_chip>
<favorite_chip></favorite_chip>
<filter_input></filter_input>

<!-- right-search end-->
</div><!-- filter-search end -->
</div><!-- search-wrap end   -->
</div><!-- toptitle end  -->
</div><!-- toptitlesearch end -->

</div><!-- top-tile end -->

<div id="top_dropdown">
<v-layout row wrap>
<v-flex xs6 sm6 md6 lg6 xl6 order-xs2 order-sm1 order-md1 order-lg1 order-xl1 class="text-lg-left">
<div class="left-btn">
<v-btn depressed small>CREAT</v-btn>
<v-btn depressed small color="white" class="btn-import" >IMPORT</v-btn>
</div>
</v-flex>

<v-flex xs12 sm6 md6 lg6 xl6 order-xs1 order-sm2 order-md2 order-lg2 order-xl2>
<v-layout row wrap justify-space-between>
<v-flex xs12 sm6 md6 lg6 xl6 order-xs1 order-sm2 order-md2 order-lg2 order-xl2>

<div class="mymenufilter">
<filter_a></filter_a>
<groupby_filter></groupby_filter>
<favorite></favorite>
</div>

</v-flex>
<v-flex xs3 order-xs3 order-sm3 order-md3 order-lg3 order-xl3>
<div id="top_arrow">
<v-layout row wrap>
<v-flex class="py-2 text-lg-right" id="icon-switch">
 <router-link to="/gridview"><v-icon>fas fa-th-large</v-icon></router-link>
  <router-link to="/listview"><v-icon>fas fa-th-list</v-icon></router-link>

</v-flex>
</v-layout>
</div>
</v-flex>
</v-layout>
</v-flex>
</v-layout>
</div>



</v-card>
</v-flex>
</v-layout>


  
<router-view></router-view>



          </v-flex>
        </v-layout>
      </v-container>
    </v-content>




    <v-footer app inset class="navbg">
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import filter_input from '@/components/search-input/filter-input'
import filter_a from '@/components/filter/filter-a'
import filter_a_chip from '@/components/filter/filter-a-chip'
import custom_filter_chip from '@/components/filter/custom-filter-chip'
import groupby_filter from '@/components/groupby/groupby'
import groupby_chip from '@/components/groupby/groupby-chip'
import groupby_dropdown_chip from '@/components/groupby/groupby-dropdown-chip'

import favorite from '@/components/favorite/favorite'
import favorite_chip from '@/components/favorite/favorite-chip'

import EventBus from '@/event-bus.js'

export default {

name: 'App',
components: { 
filter_input,filter_a,filter_a_chip,custom_filter_chip,groupby_filter,groupby_chip,
groupby_dropdown_chip,favorite,favorite_chip
},



  data () {
    return {
      topmenus:['Orders','Invoicing','Catalog','Reporting','Configuration'],
      drawer: true,
      title: 'ERP',
      drawer: null,
    }
  },

  methods: {
  },
  
}
</script>

<style>
/*@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons");
@import './assets/css/fontawesome-all.min.css';
@import './assets/css/main.css';
@import './assets/css/home.css';*/
</style>
