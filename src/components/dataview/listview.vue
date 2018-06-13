<template>
<div class="table-top-margin">
    <v-dialog v-model="dialog" max-width="500px">
    <!-- <v-btn slot="activator" color="primary" dark class="mb-2" id="btn-item-creat">New Item</v-btn> -->
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.internal_reference" label="Internal Reference"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="Product name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.sales_price" label="Sales Price"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.cost" label="Cost"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.category" label="Internal Category"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.product_type" label="Product Type"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.on_hand" label="Quantity On Hand"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.forecasted_qty" label="Forecasted Quantity"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :search="mysearch"      
      :pagination.sync="pagination"
      select-all
      item-key="internal_reference"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              color="teal lighten-1"
              hide-details
              @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            {{ header.text }}
           <v-icon small>arrow_upward</v-icon>
            
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              color="teal lighten-1"
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.internal_reference }}</td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.sales_price }}</td>
          <td class="text-xs-right">{{ props.item.cost }}</td>
          <td class="text-xs-left">{{ props.item.category }}</td>
          <td class="text-xs-left">{{ props.item.product_type }}</td>
          <td class="text-xs-right">{{ props.item.on_hand }}</td>
          <td class="text-xs-right">{{ props.item.forecasted_qty }}</td>

 <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>


        </tr>
      </template>
<!--       <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template> -->

      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ mysearch }}" found no results.
      </v-alert>
</v-data-table>	


</div>


</template>

<script>
import EventBus from '@/event-bus.js'
export default {
name:'listview',
components:{},
data (){
return {
dialog: false,
// rowsPerPageItems: [10, 15],
pagination: {
rowsPerPage: 10,
sortBy: 'internal_reference'
},
selected: [],

mysearch: '',

headers: [
{ text:'Internal Reference',value:'internal_reference'},
{
text: 'Name',
align: 'left',
value: 'name'
},
{ text: 'Sales Price', value: 'sales_price' },
{ text:'Cost',value:'cost'},
{ text: 'Internal Category', value: 'category'},
{ text: 'Product Type', value: 'product_type' },
{ text: 'Quantity On Hand', value: 'on_hand' },
{ text: 'Forecasted Quantity', value: 'forecasted_qty' },
{ text:'',sortable:false,value:''}
],
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



    editedIndex: -1,
    editedItem: {
      internal_reference: '',
      name: '',
      sales_price: 0,
      cost:0,
      category:'',      
      product_type: 0,
      on_hand: 0,
      iron:0
    },
    defaultItem: {
      internal_reference: '',
      name: '',
      sales_price: 0,
      cost:0,
      category:'',      
      product_type: 0,
      on_hand: 0,
      iron:0
    },








}


},
methods:{

toggleAll () {
if (this.selected.length) this.selected = []
else this.selected = this.desserts.slice()
},
changeSort (column) {
if (this.pagination.sortBy === column) {
this.pagination.descending = !this.pagination.descending
} else {
this.pagination.sortBy = column
this.pagination.descending = false
}
},


editItem (item) {
this.editedIndex = this.desserts.indexOf(item)
this.editedItem = Object.assign({}, item)
this.dialog = true
},

deleteItem (item) {
const index = this.desserts.indexOf(item)
confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
},

close () {
this.dialog = false
setTimeout(() => {
this.editedItem = Object.assign({}, this.defaultItem)
this.editedIndex = -1
}, 300)
},

save () {
if (this.editedIndex > -1) {
Object.assign(this.desserts[this.editedIndex], this.editedItem)
} else {
this.desserts.push(this.editedItem)
}
this.close()
},
fetchData_custom_search(search){
this.mysearch=search;
},
// fetchData_creat_item(){
//     var evt = new MouseEvent("click", {
//         view: window,
//         bubbles: true,
//         cancelable: true,
//         clientX: 20,
//        }),
// ele = document.getElementById("btn-item-creat");
// ele.dispatchEvent(evt);
// },

},

mounted () {
EventBus.$on('custom-search-input', this.fetchData_custom_search);
// EventBus.$on('emit_creat_item', this.fetchData_creat_item);

},




computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },

     pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      },


      // computedDateFormatted () {
      //   return this.formatDate(this.date)
      // },

  },

  watch: {
    dialog (val) {
      val || this.close()
    },

     // date (val) {
     //    this.dateFormatted = this.formatDate(this.date)
     //  }
  },




}	

</script>
<style type="text/css">
#btn-item-creat	{display: none;}
</style>