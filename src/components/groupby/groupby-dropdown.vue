<template>
<div class="custom-filter">
 <v-expansion-panel focusable>
    <v-expansion-panel-content expand-icon="arrow_drop_down">
      <div slot="header">Add custom group</div>
      <v-card>  
         <v-select
          :items="groupbyfilter"
          v-model="groupby"
          label="Select"
          single-line
          hide-details
        ></v-select>  
      </v-card>
<v-btn depressed small @click="groupby_dropdown_click(groupby.text)">APPLY</v-btn>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
name:'groupby-dropdown',
components:{},
data (){
return {


groupby:[],
groupbyfilter:[{tag:"analytic_account_id",text:"Analytic Account"},
{tag:"company_id",text:"Company"},
{tag:"confirmation_date",text:"Confirmation Date"},
{tag:"create_uid",text:"Created by"},
{tag:"create_date",text:"Creation Date"},
{tag:"partner_id",text:"Customer"},
{tag:"client_order_ref",text:"Customer Reference"},
{tag:"partner_shipping_id",text:"Delivery Address"},
{tag:"validity_date",text:"Expiration Date"},
{tag:"fiscal_position_id",text:"Fiscal Position"},
{tag:"partner_invoice_id",text:"Invoice Address"},
{tag:"invoice_status",text:"Invoice Status"},
{tag:"message_last_post",text:"Last Message Date"},
{tag:"write_uid",text:"Last Updated by"},
{tag:"write_date",text:"Last Updated on"},
{tag:"activity_date_deadline",text:"Next Activity Deadline"},
{tag:"date_order",text:"Order Date"},
{tag:"name",text:"Order Reference"},
{tag:"payment_term_id",text:"Payment Terms"},
{tag:"pricelist_id",text:"Pricelist"},
{tag:"team_id",text:"Sales Channel"},
{tag:"user_id",text:"Salesperson"},
{tag:"access_token",text:"Security Token"},
{tag:"origin",text:"Source Document"},
{tag:"state",text:"Status"}],

groupby_dropdown_value:[],


}

},
methods:{

    groupby_dropdown_click(text) {

if (this.groupby_dropdown_value.indexOf(text) == -1) {
this.groupby_dropdown_value.push(text);         
} else {alert('"'+ text +'"'+ " already saved.")};



EventBus.$emit('groupby_dropdown_name', this.groupby_dropdown_value);

    },

}


}	

</script>