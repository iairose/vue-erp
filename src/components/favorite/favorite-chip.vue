<template>
<div class="filter_chip">	
<span class="main_s_a" v-for="(item, index) in favorite_chip" :key="index"><span class="main_s_l"><i class="fas fa-bars"></i></span><span class="main_s_r">
{{ item }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_favorite(index)"><i class="fas fa-times"></i></v-btn></span>
</div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
name:'favorite-chip',
components:{},
data (){
return {
favorite_chip:[],
}
},
methods:{
 fetchData_favorite_save(favorite_items) {
    	if(favorite_items){
    		this.favorite_chip=favorite_items;
    		}
    	
    },

 fetchData_favorite_item(favorite_select) {
    	if(favorite_select){
    		this.favorite_chip=favorite_select;
    		}
    	
    },

remove_favorite(index){
this.favorite_chip.splice(index,1); 
}

},


  mounted () {
    EventBus.$on('emit-favorite-save', this.fetchData_favorite_save);   
    EventBus.$on('emit-favorite-item', this.fetchData_favorite_item);   

  }


}	

</script>