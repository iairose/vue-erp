<template>
<div class="filter_chip">
<li :is="items.component" :text="items.text" v-for="(items,index) in items_a1" v-on:remove_a1="removeChip_a1(index)"></li>
<li :is="items.component" :text="items.text" v-for="(items,index) in items_a2" v-on:remove_a2="removeChip_a2(index)"></li>
<li :is="items.component" :text="items.text" v-for="(items,index) in items_a3" v-on:remove_a3="removeChip_a3(index)"></li>	
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
<v-list-tile v-for="(item, index) in mainfilters_1" :key="index" @click="add_a1('a1-component', item.text, search)">
<v-list-tile-title>Search <span class="main_s_s">{{ item.text }}</span> for: {{ search }}</v-list-tile-title>
</v-list-tile>
<v-divider></v-divider>
<v-list-tile v-for="(item, index) in mainfilters_2" :key="index" @click="add_a2('a2-component', search)">          
<v-list-tile-title>Filter on: {{ item.text }}</v-list-tile-title>        
</v-list-tile>
<v-divider></v-divider>

<v-list-tile v-for="(item, index) in mainfilters_3" :key="index" @click="add_a3('a3-component', search)">          
<v-list-tile-title>Group by: {{ item.text }}</v-list-tile-title>        
</v-list-tile>

</v-list>  

</v-menu>        
</div>	</div>
</template>


<script>
import EventBus from '@/event-bus.js'
import Search_a1 from '@/components/search-input/search_a1'
import Search_a2 from '@/components/search-input/search_a2'
import Search_a3 from '@/components/search-input/search_a3'

export default {

components: {
'a1-component': Search_a1,
'a2-component': Search_a2,
'a3-component': Search_a3,
},

data(){
return{
items_a1:[],
items_a2:[],
items_a3:[],

search:'',

mainfilters_1: [
{ text: "Sales Order",type:"saleorder"},
{ text: "Customer",type:"customer"},
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


 add_a1(component, a_cat , text) {
      this.items_a1.push({
        'component': component,
        'text': text,   
        'a_cat': a_cat,              
      })
    },
add_a2(component, text) {
      this.items_a2.push({
        'component': component,
        'text': text,      
       
      })
    },


add_a3(component, text) {
      this.items_a3.push({
        'component': component,
        'text': text,      
       })
    },    



removeChip_a1(index){          
           this.items_a1.splice(index,1); 
        },  

removeChip_a2(index){          
           this.items_a2.splice(index,1); 
        },  
removeChip_a3(index){          
           this.items_a3.splice(index,1); 
        },  

  },




    }
</script>


<style scoped>

</style>
