<template><div>
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
<filter_input_chip></filter_input_chip>
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
 <router-link to="/index/gridview"><v-icon>fas fa-th-large</v-icon></router-link>
  <router-link to="/index/listview"><v-icon>fas fa-th-list</v-icon></router-link>

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
</div>
</template>


<script>
import filter_input from '@/components/search-input/filter-input'
import filter_input_chip from '@/components/search-input/filter-input-chip'
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

name: 'index',
components: {filter_input,filter_a,filter_a_chip,custom_filter_chip,groupby_filter,groupby_chip,groupby_dropdown_chip,favorite,favorite_chip,filter_input_chip},

  data () {
    return {
      // topmenus:['Orders','Invoicing','Catalog','Reporting','Configuration'],
      // drawer: true,
      // title: 'ERP',
      // drawer: null,
    }
  },

  methods: {
  },
  
}
</script>