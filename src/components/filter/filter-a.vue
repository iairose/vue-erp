<template>
<v-menu
:close-on-content-click="false"
:nudge-width="180"      
v-model="menufilter"
offset-y
>
<span slot="activator" class="filter_menu_a"><i class="fas fa-filter"></i>&nbsp;Filters&nbsp;<i class="fas fa-sort-down"></i></span>
<v-card>
<ul class="menudown">
<li v-for="(item, index) in filtersearch_a" :key="index" :class="item.class" @click="emitMethod()">
<v-checkbox v-model="filter_selected" :label="item.text"  color="success" :value="item.text" append-icon="fas fa-check" ></v-checkbox>  
</li>

<custom_filter_value></custom_filter_value>


</ul>


<custom_filter></custom_filter>

</v-card>
</v-menu>


</template>



<script>
import EventBus from '@/event-bus.js'
import custom_filter from '@/components/filter/custom-filter'
import custom_filter_value from '@/components/filter/custom-filter-value'

export default {
  components: { custom_filter, custom_filter_value },

  data () {
return {
filter_selected: [],
menufilter: false,
filtersearch_a:[
{models_a:"myorders",text:"My Orders",class:"menu_border_1"},
{models_a:"quotations",text:"Quotations",class:"menu_border"},
{models_a:"quotationssent",text:"Quotationssent",class:"menu_border"},
{models_a:"sales",text:"Sales",class:"menu_border_1"},
{models_a:"unread_messages",text:"Unread Messages",class:"menu_border_1"},
{models_a:"my_activities",text:"My Activities",class:"menu_border_1"},
{models_a:"late_activities",text:"Late Activities",class:"menu_border"},
{models_a:"today_activities",text:"Today Activities",class:"menu_border"},
{models_a:"future_activities",text:"Future Activities",class:"menu_border_1"},
],
            }
        },

  methods: {
    emitMethod () {
       EventBus.$emit('i-got-clicked', this.filter_selected);
    }
  }


        
    }
</script>


<style scoped>

</style>