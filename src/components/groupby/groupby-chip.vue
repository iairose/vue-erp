<template>
<div class="filter_chip">	
<span class="main_s_a" v-for="(item, index) in groupby_chip" :key="index"><span class="main_s_l"><i class="fas fa-bars"></i></span><span class="main_s_r">
{{ item }}</span><v-btn flat icon small color="grey lighten-2" @click="remove_groupby(index)"><i class="fas fa-times"></i></v-btn></span>
</div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
name:'groupby-chip',
components:{},
data (){
return {

groupby_chip:[],



}

},
methods:{
 fetchData_groupby(groupby_select) {
    	if(groupby_select){
    		this.groupby_chip=groupby_select;
    		}
    	
    },

remove_groupby(index){
this.groupby_chip.splice(index,1); 
}

},


  mounted () {
    EventBus.$on('groupby_select_name', this.fetchData_groupby);   

  }


}	

</script>