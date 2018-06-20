<template>
<div class="filter_chip">	
<span class="main_s_a" v-for="(item, index) in mychip" :key="index"><span class="main_s_l"><i class="fas fa-filter"></i></span><span class="main_s_r">{{ item }}</span><v-btn flat icon small color="grey lighten-2" @click="removefilter_b1(index)"><i class="fas fa-times"></i></v-btn></span>
</div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
data(){
return {
mychip:[],
}
},


 methods: {
    fetchData(filter_selected) {
    	if(filter_selected){
    		this.mychip=filter_selected
    		}    	
    },

    removefilter_b1(index){          
           this.mychip.splice(index, 1); 
        },  
  },
  mounted () {
    EventBus.$on('i-got-clicked', this.fetchData)
  }
}
</script>