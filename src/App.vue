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
      <v-flex xs12 class="menu_u_r">      
       
<v-menu open-on-hover bottom offset-y>
      <v-btn slot="activator" color="white" flat>Orders</v-btn>
      <v-list class="toolbarmenu">
        <v-list-tile v-for="(item, index) in items_orders" :key="index" @click="">
          <v-list-tile-title><router-link :to='item.url'>{{ item.title }}</router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu open-on-hover bottom offset-y>
      <v-btn slot="activator" color="white" flat>Invoicing</v-btn>
      <v-list class="toolbarmenu">
        <v-list-tile v-for="(item, index) in items_invoicing" :key="index" @click="">
          <v-list-tile-title><router-link :to='item.url'>{{ item.title }}</router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu open-on-hover bottom offset-y>
      <v-btn slot="activator" color="white" flat>Catalog</v-btn>
      <v-list class="toolbarmenu">
        <v-list-tile v-for="(item, index) in items_catalog" :key="index" @click="">
          <v-list-tile-title><router-link :to='item.url'>{{ item.title }}</router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu open-on-hover bottom offset-y>
      <v-btn slot="activator" color="white" flat>Reporting</v-btn>
      <v-list class="toolbarmenu">
        <v-list-tile v-for="(item, index) in items_reporting" :key="index" @click="">
          <v-list-tile-title><router-link :to='item.url'>{{ item.title }}</router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu open-on-hover bottom offset-y>
      <v-btn slot="activator" flat color="white">Configuration</v-btn>
      <v-list class="toolbarmenu">
        <v-list-tile v-for="(item, index) in items_configuration" :key="index" @click="">
          <v-list-tile-title><router-link :to='item.url'>{{ item.title }}</router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

     </v-flex>
      <v-flex xs1 text-xs-right align-center>
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
export default {
name: 'App',
  data () {
    return {
topmenus:[ 'Orders', 'Invoicing', 'Catalog', 'Reporting', 'Configuration'],
items_orders:[{title:'Quotations',url:'/test'},{title:'Orders',url:'/test'},{title:'Customers',url:'/test'}],
items_invoicing:[{title:'Orders to Invoice',url:'/test'},{title:'Orders to Upsell',url:'/test'}],
items_catalog:[{title:'Products',url:'/test'}],
items_reporting:[{title:'Sales',url:'/test'},{title:'Sales Channels',url:'/test'},{title:'All Channels Sales Orders',url:'/test'}],
items_configuration:[{title:'Settings',url:'/test'},{title:'Sales Channels',url:'/test'}],

      title: 'ERP',
      drawer: null
    }
  },

  methods: {
  },
  
}
</script>

<style>
</style>
