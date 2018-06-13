<template>

   <v-menu
      :close-on-content-click="false"
      :nudge-width="158"
      :min-width="170"
      v-model="menufavorite"
      offset-y
    >
    <span slot="activator" class="filter_menu_a"><i class="fas fa-star"></i>&nbsp;Favorites&nbsp;<i class="fas fa-sort-down"></i></span>
      <v-card>      

<ul class="menudown" id="filter_favorite">

<li v-for="(item, index) in favorite_items" :key="index" class="filter_fli" @click="emit_favorite_item()" ref="myBtn">
<v-checkbox v-model="favorite_select" :label="item"  color="success" :value="item" append-icon="fas fa-check"></v-checkbox>
<span class="filter_fsub"><v-btn flat icon small color="grey lighten-2" @click="remove_favorite(index)"><i class="fas fa-trash-alt"></i></v-btn></span>
</li>

</ul>

<div class="custom-filter">
 <v-expansion-panel focusable>
    <v-expansion-panel-content expand-icon="arrow_right">
      <div slot="header">Save current search</div>
      <v-card>
<div id="for-favorite">
 <v-text-field
          name="favsearch"          
          v-model="favorite_input"  
          value="Quotations"
          color="light"
          class="fav_search"
          flat
          solo
          hide-details
        ></v-text-field>
</div>


 <div class="myradioicon">


    <li><input type="checkbox" id="fav_s_1" value="fav_s_1" v-model="fav_s_list">
<label for="fav_s_1">Use by default</label></li>

<li><input type="checkbox" id="fav_s_2" value="fav_s_2" v-model="fav_s_list">
<label for="fav_s_2">Share with users</label><span class="f_user"><i class="fas fa-users"></i></span></li>

</div>

<v-btn depressed small @click="favorite_click(favorite_input)">Save</v-btn>

      </v-card>

    </v-expansion-panel-content>
  </v-expansion-panel>
</div>




      </v-card>
    </v-menu>

</template>

<script>
import EventBus from '@/event-bus.js'
export default {
name:'',
components:{},
data (){
return {
fav_s_list:false,
menufavorite:false,
favorite_items:[],
favorite_select:[],
favorite_input:[],




}

},
methods:{

    favorite_click(text) { 
if (this.favorite_items.indexOf(text) == -1) {

this.favorite_items.push(text);

EventBus.$emit('emit-favorite-save', this.favorite_items);


} else{
	alert('"'+ text +'"'+ " already saved.")
};
    },






 emit_favorite_item () {
       EventBus.$emit('emit-favorite-item', this.favorite_select);
    },


remove_favorite(index){          
           this.favorite_items.splice(index,1); 
        },



}


}	

</script>