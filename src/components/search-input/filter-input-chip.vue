<template>
<div class="filter_chip">	

<span class="main_s_a" v-for="(item, index) in input_filter_chip_a1" :key="index"><span class="main_s_l">{{ item.text }}</span><span class="main_s_r">
{{ item.search }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_input_items_a1(index)"><i class="fas fa-times"></i></v-btn></span>

<span class="main_s_a" v-for="(item, index) in input_filter_chip_a2" :key="index"><span class="main_s_l">{{ item.text }}</span><span class="main_s_r">
{{ item.search }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_input_items_a2(index)"><i class="fas fa-times"></i></v-btn></span>

<span class="main_s_a" v-for="(item, index) in input_filter_chip_a3" :key="index"><span class="main_s_l">{{ item.text }}</span><span class="main_s_r">
{{ item.search }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_input_items_a3(index)"><i class="fas fa-times"></i></v-btn></span>	
<!-- <span class="main_s_a" v-for="(item, index) in input_filter_chip_a1" :key="index"><span class="main_s_l"><i class="fas fa-star"></i></span><span class="main_s_r">
{{ item.text }}={{ item.search }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_input_items_a1(index)"><i class="fas fa-times"></i></v-btn></span>

<span class="main_s_a" v-for="(item, index) in input_filter_chip_a2" :key="index"><span class="main_s_l"><i class="fas fa-filter"></i></span><span class="main_s_r">
{{ item.text }}={{ item.search }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_input_items_a2(index)"><i class="fas fa-times"></i></v-btn></span>

<span class="main_s_a" v-for="(item, index) in input_filter_chip_a3" :key="index"><span class="main_s_l"><i class="fas fa-bars"></i></span><span class="main_s_r">
{{ item.text }}={{ item.search }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_input_items_a3(index)"><i class="fas fa-times"></i></v-btn></span> -->


</div>

</template>

<script>
import EventBus from '@/event-bus.js'

export default {
name:'filter-input-chip',
components:{},
data (){
return {

input_filter_chip_a1:[],
input_filter_chip_a2:[],
input_filter_chip_a3:[],



}

},
methods:{
 fetchData_input_items_a1(items_a1) {
    	if(items_a1){
    		this.input_filter_chip_a1=items_a1;
    		}
    	
    },
 fetchData_input_items_a2(items_a2) {
    	if(items_a2){
    		this.input_filter_chip_a2=items_a2;
    		}
    	
    },
 fetchData_input_items_a3(items_a3) {
    	if(items_a3){
    		this.input_filter_chip_a3=items_a3;
    		}
    	
    },

remove_input_items_a1(index){
this.input_filter_chip_a1.splice(index,1); 
},

remove_input_items_a2(index){
this.input_filter_chip_a2.splice(index,1); 
},
remove_input_items_a3(index){
this.input_filter_chip_a3.splice(index,1); 
},
},


  mounted () {
    EventBus.$on('input-items-a1', this.fetchData_input_items_a1); 
    EventBus.$on('input-items-a2', this.fetchData_input_items_a2);
    EventBus.$on('input-items-a3', this.fetchData_input_items_a3);

  }


}	

</script>