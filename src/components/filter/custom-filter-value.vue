<template>
<div>
<li id="auto-click" v-for="(item, index) in items_custom_filter" :key="index" @click="emit_custom_filter()" ref="triggle_click">
<v-checkbox v-model="custom_filter_selected" :label="item"  color="success" :value="item" append-icon="fas fa-check"></v-checkbox> 
</li>
</div>	
</template>

<script>
import EventBus from '@/event-bus.js'
export default {
name:'',
components:{},
data (){
return {

custom_filter_selected:[],
items_custom_filter:[],


}

},

methods:{
 fetchData_filter(custom_filter_value) {
if(custom_filter_value){
this.items_custom_filter=custom_filter_value;
//this.$refs.triggle_click.click();
}

},


emit_custom_filter () {
EventBus.$emit('custom-filter-clicked', this.custom_filter_selected);
}


},

  mounted () {
    EventBus.$on('custom-filter-name', this.fetchData_filter);
 // this.$refs.triggle_click.click();
  }



}	

</script>