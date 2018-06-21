<template>
<div id="main_wrapup">
<div id="flexwrap">
<router-link to="/Product/tab-1">	
<div class="toptabs" id="tabfix_1">
  <span class="leftspan"><v-icon>mdi-earth</v-icon></span>
  <span><b>Published</b><br> on website</span>
</div>
</router-link>

<router-link to="/Product/tab-2">
<div class="toptabs">
  <span class="leftspan"><i class="fas fa-calendar-alt"></i></span>
  <span><b>18</b><br> on hand</span>
</div>
</router-link>


<router-link to="/Product/tab-3">
<div class="toptabs">
  <span class="leftspan"> <i class="fas fa-calendar-alt"></i></span>
  <span><b>18</b><br>Forecasted</span>
</div>   
</router-link>

<router-link to="/Product/tab-4">
<div class="toptabs">
  <span class="leftspan"> <i class="fas fa-arrows-alt-v"></i></span>
  <span><b>18</b><br>Product moves</span>
</div>
</router-link>



<router-link to="/Product/tab-5">
<div class="toptabs">
  <span class="leftspan"> <i class="fas fa-sync-alt"></i></span>
  <span><b>18</b><br>Reordering rule</span>
</div>
</router-link>

<router-link to="/Product/tab-6">
<div class="toptabs">
  <span class="leftspan"><i class="fas fa-dollar-sign"></i></span>
  <span><b>18</b><br>Sales</span>
</div>
</router-link>


<router-link to="/Product/tab-7">
<div class="toptabs">
  <span class="leftspan"> <i class="fas fa-flask"></i></span>
  <span><b>18</b><br>bill of materials</span>
</div>
</router-link>

<v-menu left bottom class="tabs__div more_tab">
<a slot="activator" class="tabs__item border_r_fix">
<div class="toptabs">
  <span>more</span>
  <span style="margin-left: 10px;"> <i class="fas fa-sort-down"></i></span>
</div>
</a>

<v-list class="grey lighten-4" id="tabtopmore">
<v-list-tile
v-for="(item,index) in more"
:key="index"
@click=""
>

<v-list-tile-content><v-list-tile-title>

<router-link :to="item.url">
{{ item.text }}
</router-link>

</v-list-tile-title></v-list-tile-content>
</v-list-tile>
</v-list>
</v-menu>

</div>
<div id="tabdataview">
<router-view></router-view>
</div></div>



</template>

<script>
export default {
name:'tab-top',
components:{},
data (){
return {

more: [
{text:'News',url:'/Product/tab-more-1'},
{text:'Maps',url:'/Product/tab-more-2'}, 
{text:'Books',url:'/Product/tab-more-3'},
],
}
}
}
</script>