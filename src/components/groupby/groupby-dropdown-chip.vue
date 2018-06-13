<template>
<div class="filter_chip">	
<span class="main_s_a" v-for="(item, index) in groupby_dropdown_chip" :key="index"><span class="main_s_l"><i class="fas fa-bars"></i></span><span class="main_s_r">
{{ item }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_groupby_dropdown(index)"><i class="fas fa-times"></i></v-btn></span>
</div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
name:'groupby_dropdown_chip',
components:{},
data (){
return {

groupby_dropdown_chip:[],



}

},
methods:{


 fetchData_groupby_dropdown(groupby_dropdown_value) {
    	if(groupby_dropdown_value){
    		this.groupby_dropdown_chip=groupby_dropdown_value;
    		}    	
    },   

remove_groupby_dropdown(index){
this.groupby_dropdown_chip.splice(index,1); 
}


},


  mounted () {
    
    EventBus.$on('groupby_dropdown_name', this.fetchData_groupby_dropdown);

  }


}	

</script>