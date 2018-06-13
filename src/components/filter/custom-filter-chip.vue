<template>
<div class="filter_chip">	
<span class="main_s_a" v-for="(item, index) in custom_filter_chip" :key="index"><span class="main_s_l"><i class="fas fa-filter"></i></span><span class="main_s_r">
{{ item }}</span><v-btn flat icon small color="grey lighten-2" @click="removefilter_custom(index)"><i class="fas fa-times"></i></v-btn></span>
</div>
</template>

<script>
// import Vue from 'vue'
import EventBus from '@/event-bus.js'

export default {
data(){
return {
custom_filter_chip:[],
}
},


 methods: {
    fetchData_filter_select(custom_filter_selected) {
    	if(custom_filter_selected){
    		this.custom_filter_chip=custom_filter_selected;        
    		}    	
    },


    fetch_custom_filter_value(custom_filter_value) {
      if(custom_filter_value){
        this.custom_filter_chip=custom_filter_value;
        }     
    },


    removefilter_custom(index){          
           this.custom_filter_chip.splice(index,1); 
        },  
  },
  mounted () {
    EventBus.$on('custom-filter-clicked', this.fetchData_filter_select);
    EventBus.$on('custom-filter-name', this.fetch_custom_filter_value);
  }

}
</script>


<style scoped>
/*.filter_chip{display: flex;}*/
</style>