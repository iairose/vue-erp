<template>
    <v-menu
      :close-on-content-click="false"
      :nudge-width="180"      
      v-model="menugroup"
      offset-y
    >
    <span slot="activator" class="filter_menu_a"><i class="fas fa-bars"></i>&nbsp;Group by&nbsp;<i class="fas fa-sort-down"></i></span>
      <v-card>
<ul class="menudown">
<li v-for="(item, index) in menufilter_2" :key="index" :class="item.class" @click="emit_groupby_select()">
<v-checkbox v-model="groupby_select" :label="item.text"  color="success" :value="item.text" append-icon="fas fa-check"></v-checkbox>  
</li></ul>

<groupby_dropdown></groupby_dropdown>
</v-card>     
    </v-menu>

</template>
<script>
import EventBus from '@/event-bus.js'
import groupby_dropdown from '@/components/groupby/groupby-dropdown'

export default {
name:'groupby',
components:{ groupby_dropdown },
data (){
return {
menugroup:false,
groupby_select: [],
menufilter_2:[
{models_a:"salesperson",text:"Sales person",class:"menu_border"},
{models_a:"customer",text:"Customer",class:"menu_border"},
{models_a:"ordermonth",text:"Order Month",class:"menu_border"},
],
}

},
methods:{

emit_groupby_select () {
EventBus.$emit('groupby_select_name', this.groupby_select);
}


}


}	

</script>