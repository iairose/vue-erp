<template><div class="table-top-margin">
<v-data-iterator
      :items="desserts"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      :search="mysearch"
      content-tag="v-layout"
      row
      wrap 
    >
<div class="gridwrap" slot="item" slot-scope="props">
<div class="leftimg">
  
  <a href=""><img src="../../assets/img/3.jpg" class="image" width="100%" height="80px"></a>
</div>
<div class="colright"> 
                  
      
<li><h4>{{ props.item.name }}</h4></li>
<li>Price:&nbsp;&nbsp;{{ props.item.sales_price }}</li>
<li>On hand:&nbsp;&nbsp;{{ props.item.on_hand }}</li>


</div>
</div>

<!--       <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>

      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert> -->
    </v-data-iterator>
<!-- <div class="text-xs-center pt-2 pb-3">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
</div>  -->   
</div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
name:'gridview',
components:{},
data (){
return {


// dialog: false,
rowsPerPageItems: [5,10, 15],
pagination: {
rowsPerPage: 10,
sortBy: 'internal_reference'
},

mysearch: '',

    desserts: [
      { internal_reference:'E-com01',
        value: false,
        name: 'Frozen Yogurt',
        sales_price: 159,
        cost:35,
        category: 'physical',
        product_type: 'Consumable',
        on_hand: 4.0,
        forecasted_qty: '51'
      },
      { internal_reference:'E-com02',
        value: false,
        name: 'Ice cream sandwich',
        sales_price: 237,
        cost:36,
        category: 'physical',
        product_type: 'Consumable',
        on_hand: 4.3,
        forecasted_qty: '58'
      },
      { internal_reference:'E-com03',
        value: false,
        name: 'Eclair',
        sales_price: 262,
        cost:37,
        category: 'physical',
        product_type: 'Consumable',
        on_hand: 6.0,
        forecasted_qty: '57'
      },
      { internal_reference:'E-com04',
        value: false,
        name: 'Cupcake',
        sales_price: 305,
        cost:38,
        category: 'physical',
        product_type: 'Stockable Product',
        on_hand: 4.3,
        forecasted_qty: '131'
      },
      { internal_reference:'E-com05',
        value: false,
        name: 'Gingerbread',
        sales_price: 356,
        cost:39,
        category: 'physical',
        product_type: 'Stockable Product',
        on_hand: 3.9,
        forecasted_qty: '511'
      },
      { internal_reference:'E-com06',
        value: false,
        name: 'Jelly bean',
        sales_price: 375,
        cost:40,
        category: 'physical',
        product_type: 'Stockable Product',
        on_hand: 0.0,
        forecasted_qty: '30'
      },
      { internal_reference:'E-com07',
        value: false,
        name: 'Lollipop',
        sales_price: 392,
        cost:41,
        category: 'sevrice',
        product_type: 'Stockable Product',
        on_hand: 0,
        forecasted_qty: '551'
      },
      { internal_reference:'E-com08',
        value: false,
        name: 'Honeycomb',
        sales_price: 408,
        cost:42,
        category: 'sevrice',
        product_type: 'Service',
        on_hand: 6.5,
        forecasted_qty: '551'
      },
      { internal_reference:'E-com09',
        value: false,
        name: 'Donut',
        sales_price: 452,
        cost:43,
        category: 'sevrice',
        product_type: 'Service',
        on_hand: 4.9,
        forecasted_qty: '501'
      },
      { internal_reference:'E-com10',
        value: false,
        name: 'KitKat',
        sales_price: 518,
        cost:44,
        category: 'sevrice',     
        product_type: 'Service',
        on_hand: 7,
        forecasted_qty: '351'
      }
    ],




}

},
methods:{

fetchData_custom_search(search){

this.mysearch=search;


}


},

mounted () {
EventBus.$on('custom-search-input', this.fetchData_custom_search);

}


}	

</script>

<style type="text/css">
.colright{width: 100%;}
.gridwrap{background-color: #fff;}

</style>