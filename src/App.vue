<template>
<v-app> 
 <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      app
    >
      <v-list dense id="leftmenu">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="leftmenutitle">
         <v-list-tile-title> <router-link to="/index/gridview" class="leftmenulink">Home</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click=""> 
        <v-list-tile-content class="leftmenutitle">
        <v-list-tile-title><router-link to="/Product" class="leftmenulink">Product</router-link></v-list-tile-title>
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
<!-- <admin_index></admin_index> -->
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
// import admin_index from '@/components/index'
// import EventBus from '@/event-bus.js'
export default {

name: 'App',
// components: {admin_index},

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
