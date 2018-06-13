<template>
<div class="custom-filter">
 <v-expansion-panel focusable>
    <v-expansion-panel-content expand-icon="arrow_drop_down">
      <div slot="header">Add Custom Filter</div>
        <v-select
          :items="myfilters"
          v-model="e13"
          label="Select"
          single-line
          hide-details
          ></v-select>
<div v-if="e13.type === 'aaa'">   
<v-select
          :items="filter_aaa"
          v-model="f_aaa"
          label="Select"
          single-line
          hide-details
        ></v-select>
   </div>


<div v-if="e13.type === 'bbb'">   
<v-select
          :items="filter_bbb"
          v-model="f_bbb"
          label="Select"
          single-line
          hide-details
        ></v-select>

<v-text-field
          name="bbb_txt"
          v-model="bbbtxt"
          value=""
          hide-details        
        ></v-text-field>        

   </div>   

<div v-if="e13.type === 'ccc'">   
<v-select
          :items="filter_ccc"
          v-model="f_ccc"
          label="Select"
          single-line
          hide-details
        ></v-select>


 <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
        
      >
        <v-text-field
          slot="activator"
          v-model="dateFormatted"
          label="Date"
          hint="MM/DD/YYYY format"
          persistent-hint
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable show-current color="green lighten-1">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
</div>



<div v-if="e13.type === 'ddd'">   
<v-select
          :items="filter_ddd"
          v-model="f_ddd"
          label="Select"
          single-line
          dense
          hide-details          
          ></v-select>

<v-text-field
          name="ddd_txt"
          v-model="dddtxt"
          hide-details          
        ></v-text-field>      

</div>  

<div v-if="e13.type === 'eee'">   
<v-select
          :items="filter_eee"
          v-model="f_eee"
          label="Select"
          single-line
          dense
          hide-details          
          ></v-select>

<v-text-field
          name="eee_txt"
          v-model="eeetxt"
          hide-details
        ></v-text-field>        

   </div>   


<div v-if="e13.type === 'aaa'">
<v-btn depressed small @click="custom_filter_click( e13.text +' '+ f_aaa.text )" color="#00a09d">Save</v-btn>
</div>
<div v-if="e13.type === 'bbb'">
<v-btn depressed small @click="custom_filter_click(e13.text +' '+ f_bbb.text +' '+ bbbtxt)" color="#00a09d">Save</v-btn>
</div>
<div v-if="e13.type === 'ccc'">
<v-btn depressed small @click="custom_filter_click(e13.text +' '+ f_ccc.text +' '+ dateFormatted)" color="#00a09d">Save</v-btn>
</div>
<div v-if="e13.type === 'ddd'">
<v-btn depressed small @click="custom_filter_click(e13.text +' '+ f_ddd.text +' '+ dddtxt)" color="#00a09d">Save</v-btn>
</div>

<div v-if="e13.type === 'eee'">
<v-btn depressed small @click="custom_filter_click( e13.text +' '+ f_eee.text +' '+ eeetxt)" color="#00a09d">Save</v-btn>
</div>

    </v-expansion-panel-content>
  </v-expansion-panel>

</div>

</template>

<script>
import EventBus from '@/event-bus.js'
export default {

name:'custom-filter',


data(){
return {
date: null,
dateFormatted: null,
e13:[],
f_aaa:[],
f_bbb:[],
f_ccc:[],
f_ddd:[],
f_eee:[],
filter_aaa:[{text:"is true",tag:"1"},{text:"is false",tag:"0"}],
filter_bbb:[{text: 'contains',tag:"1"},{text: "doesn't contain",tag:"2"},{text: "is equal to",tag:"3"}, {text: "is not equal to",tag:"4"}, {text: "is set",tag:"5"}, 
{text: "is not set",tag:"6"}],
filter_ccc:[{text:"is equal to",tag:"1"},{text:"is not equal to",tag:"2"},{text:"is after",tag:"3"},{text:"is before",tag:"4"},{text:"is between",tag:"5"},{text:"is set",tag:"6"},
{text:"is not set",tag:"7"}],
filter_ddd:[{text:"is",tag:"1"},{text:"is not",tag:"2"},{text:"is set",tag:"3"},{text:"is not set",tag:"4"}],
filter_eee:[{text:"is equal to",tag:"1"},{text:"is not equal to",tag:"2"},{text:"greater than",tag:"3"},{text:"less than",tag:"4"},{text:"greater than or equal to",tag:"5"},
{text:"less than or equal to",tag:"6"},{text:"is set",tag:"7"},{text:"is not set",tag:"8"}],


eeetxt:'0.0',

myfilters: [

{text:"Action Needed",type:"aaa",tag:"action_need"},{text:'Activities',type:"bbb",tag:"activities"},{text:'Analytic Account',type:"bbb",tag:"analytic_account"},
{text:"Company",type:"bbb",tag:"company"},{text:"Confirmation Date",type:"ccc",tag:"Confirmation_date"},{text:"Create by",type:"bbb",tag:"created_by"},
{text:"Creation Date",type:"ccc",tag:"creation_date"},{text:"Currency",type:"bbb",tag:"currency"},{text:"Customer",type:"bbb",tag:"customer"},
{text:"Customer Reference",type:"bbb",tag:"customer_reference"},{text:"Delivery Address",type:"bbb",tag:"delivery_address"},{text:"Expiration Date",type:"ccc",tag:"expiration_date"},
{text:"Fiscal Position",type:"bbb",tag:"fiscal_position"},{text:"Followers",type:"bbb",tag:"followers"},{text:"Followers (Channels)",type:"bbb",tag:"followers_channels"},
{text:"Followers (Partners)",type:"bbb",tag:"followers_partners"},{text:"Invoice Address",type:"bbb",tag:"invoice_address"},
{text:"Invoice Status",type:"bbb",tag:"invoice_status"},{text:"Is Follower",type:"aaa",tag:"is_follower"},{text:"Last Message Date",type:"ccc",tag:"last_message_date"},
{text:"Last Updated by",type:"bbb",tag:"last_update_by"},{text:"Last Updated on",type:"ccc",tag:"last_updated_on"},{text:"Messages",type:"bbb",tag:"messages"},
{text:"Next Activity eadline",type:"ccc",tag:"next_activity_eadline"},{text:"Next Activity Summary",type:"bbb",tag:"next_activity_summary"},
{text:"Next Activity Type",type:"bbb",tag:"next_activity_type"},{text:"Order Date",type:"ccc",tag:"order_date"},{text:"Order Lines",type:"bbb",tag:"order_lines"},
{text:"Order Reference",type:"bbb",tag:"order_reference"},{text:"Payment Terms",type:"bbb",tag:"payment_terms"},{text:"Pricelist",type:"bbb",tag:"pricelist"},
{text:"Product",type:"bbb",tag:"product"},{text:"Responsible",type:"bbb",tag:"responsible"},{text:"Sales Channel",type:"bbb",tag:"sales_channel"},
{text:"Salesperson",type:"bbb",tag:"salesperson"},{text:"Security Token",type:"bbb",tag:"security_token"},{text:"Source Document",type:"bbb",tag:"source_document"},
{text:"Status",type:"ddd",tag:"status"},{text:"Taxes",type:"bbb",tag:"taxes"},{text:"Terms and conditions",type:"bbb",tag:"terms_and_conditions"},
{text:"Total",type:"eee",tag:"total"},{text:"Untaxed Amount",type:"bbb",tag:"untaxed_amount"},{text:"Website Messages",type:"bbb",tag:"website_messages"}
],


custom_filter_value:[],
}
},


computed: {
       computedDateFormatted () {
        return this.formatDate(this.date)
      },

  },

  watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
  },



methods: {      


    custom_filter_click(text) { 

if (this.custom_filter_value.indexOf(text) == -1) {

this.custom_filter_value.push(text);         
EventBus.$emit('custom-filter-name', this.custom_filter_value);
EventBus.$emit('custom-filter-autoclick');


} else {alert('"'+ text +'"'+ " already saved.")};



    },


  formatDate (date) {
    if (!date) return null

    const [year, month, day] = date.split('-')
    return `${month}/${day}/${year}`
  },
  parseDate (date) {
    if (!date) return null

    const [month, day, year] = date.split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }



}

  }
</script>