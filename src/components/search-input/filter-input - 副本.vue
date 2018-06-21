<template>
<div class="right-search">
<v-menu offset-y color="white" class="r_search">
 <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"                    
          slot="activator"          
          color="teal lighten-1"        
          single-line
          hide-details
          @input="emit_custom_search(search)"
        ></v-text-field>        
<v-list class="search_pop" v-if="search.length > 0">
<v-list-tile v-for="(item, index) in mainfilters_1" :key="index" @click="add_a1(item.text,search)">
<v-list-tile-title>Search <span class="main_s_s">{{ item.text }}</span> for: {{ search }}</v-list-tile-title>
</v-list-tile>
<v-divider></v-divider>
<v-list-tile v-for="(item, index) in mainfilters_2" :key="`B-${index}`" @click="add_a2(item.text,search)">          
<v-list-tile-title>Filter on: {{ item.text }}</v-list-tile-title>        
</v-list-tile>
<v-divider></v-divider>

<v-list-tile v-for="(item, index) in mainfilters_3" :key="`C-${index}`" @click="add_a3(item.text,search)">          
<v-list-tile-title>Group by: {{ item.text }}</v-list-tile-title>        
</v-list-tile>

</v-list>  

</v-menu>        
</div>
</template>


<script>
import EventBus from '@/event-bus.js'

export default {

components: {},

data(){
return{
items_a1:[],
items_a2:[],
items_a3:[],

search:'',

mainfilters_1: [
{ text: "Sales Order",type:"mainsearch"},
{ text: "Customer",type:"mainsearch"},
{ text: "Salesperson",type:"mainsearch" },
{ text: "Sales Channel",type:"mainsearch" },
{ text: "Analytic Account",type:"mainsearch" },
{ text: "Product",type:"mainsearch" }
],

mainfilters_2: [
{ text: "My Orders",type:"filters" },
{ text: "Quotations",type:"filters" },
{ text: "Quotations Sent",type:"filters" },
{ text: "Unread Messages",type:"filters" },
{ text: "Late Activities",type:"filters" },
{ text: "Today Activities",type:"filters" },
{ text: "Future Activities",type:"filters" }
],

mainfilters_3: [
{ text: "Salesperson",type:"groupby" },
{ text: "Customer",type:"groupby" },
{ text: "Order Month",type:"groupby" }
],
}},

methods: {
emit_custom_search(search){

EventBus.$emit('custom-search-input', this.search);

},

 

// indexWhere(array, conditionFn) {
//   const item = array.find(conditionFn)
//   return array.indexOf(item)
// },



// if(this.indexWhere(this.items_a1, item => item.text === item.text)){
// this.items_a1.push({
// 'text': text,   
// 'search': search,              
// })
// EventBus.$emit('input-items-a1', this.items_a1);
// } else {alert('"'+ this.search +'"'+ " already applied.")};

add_a1(text,search) {
this.items_a1.push({
'text': text,   
'search': search,              
})
EventBus.$emit('input-items-a1', this.items_a1);


},

add_a2(text,search) {
this.items_a2.push({
'text': text,   
'search': search,              
})
EventBus.$emit('input-items-a2', this.items_a2);
},

add_a3(text,search) {
this.items_a3.push({
'text': text,   
'search': search,              
})
EventBus.$emit('input-items-a3', this.items_a3);
},

},




    }
</script>


<style scoped>

</style>
