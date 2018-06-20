<template>

<v-container id="top_dropdown" grid-list-md>
<v-layout row wrap>
      <v-flex xs12 id="ptitle">
       <h1> This is my product title</h1>
      </v-flex>
</v-layout>  
 <v-layout row wrap justify-space-between>
    <v-flex xs10 sm2 md2 lg2 xl2 order-xs2 order-sm1 order-md1 order-lg1 order-xl1 class="text-lg-left">
<div class="left-btn">
<v-btn small color="teal">EDIT</v-btn>
<v-btn small color="teal">CREAT</v-btn>
</div>


      </v-flex>
      <v-flex xs12 sm4 md4 lg4 xl4 order-xs1 order-sm2 order-md2 order-lg2 order-xl2 class="text-lg-center">
    
    <div id="top_center">
    <v-menu
      :close-on-content-click="false"
      :nudge-width="100"
      v-model="menuprint"
      offset-y
    >

<span slot="activator" class="filter_menu_a"><i class="fas fa-print"></i>&nbsp;Print&nbsp;<i class="fas fa-sort-down"></i></span>

      <v-card class="topmenudrop">

<v-list>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Print Print</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Print Print</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Print Print</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</v-list>

</v-card>
    </v-menu>
  <v-menu
      :close-on-content-click="false"
      :nudge-width="100"
      v-model="menu_attachment"
      offset-y
    >
    <span slot="activator" class="filter_menu_a"><i class="fas fa-paperclip"></i>&nbsp;Attachment(s)&nbsp;<i class="fas fa-sort-down"></i></span>
      <v-card class="topmenudrop">

<v-list>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Attachment(s)</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Attachment(s)</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Attachment(s)</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</v-list>

      </v-card>
    </v-menu>

  <v-menu
      :close-on-content-click="false"
      :nudge-width="100"
      v-model="menu_action"
      offset-y
    >
    <span slot="activator" class="filter_menu_a"><i class="fas fa-anchor"></i>&nbsp;Action&nbsp;<i class="fas fa-sort-down"></i></span>
      <v-card class="topmenudrop">


<v-list>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Action Action</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Action Action</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile @click="">
<v-list-tile-content>
<v-list-tile-title>Action Action</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</v-list>

      </v-card>
    </v-menu>


  </div>

      </v-flex>
      <v-flex xs2 order-xs3 order-sm3 order-md3 order-lg3 order-xl3>
       <div id="top_arrow">
<v-layout row wrap>
<v-flex class="py-2 text-lg-right">
  
            <v-btn-toggle v-model="toggle_exclusive">
              <v-btn flat>
               <i class="fas fa-angle-left"></i>
              </v-btn>
              <v-btn flat>
                <i class="fas fa-angle-right"></i>
              </v-btn>            
            </v-btn-toggle>
          
</v-flex>
</v-layout>
</div>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
name:'top-menu',
components:{},
data (){
return {
menuprint:'',
menu_attachment:'',
menu_action:'',
toggle_exclusive: null
}
}
}
</script>