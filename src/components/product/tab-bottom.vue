<template>
<div id="main_wrapdown">    
      <v-tabs
        slot="extension"
        v-model="tab"
        color="white"
        align-with-title
      >
        <!-- <v-tabs-slider color="white"></v-tabs-slider> -->
        <v-tab href="#tab_bottom_1">
         General information
        </v-tab>
        <v-tab href="#tab_bottom_2">
         Sales
        </v-tab>
        <v-tab href="#tab_bottom_3">
         Purchase
        </v-tab>
        <v-tab href="#tab_bottom_4">
         Inventory
        </v-tab>
        <v-tab href="#tab_bottom_5">
         Invoicing
        </v-tab>
        <v-tab href="#tab_bottom_6">
         Notes
        </v-tab>
    
      <v-tab-item id="tab_bottom_1">
        <v-card flat>
          <v-card-text>General information</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item id="tab_bottom_2">
        <v-card flat>
          <v-card-text>Sales</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item id="tab_bottom_3">
        <v-card flat>
          <v-card-text>Purchase</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item id="tab_bottom_4">
        <v-card flat>
          <v-card-text>Inventory</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item id="tab_bottom_5">
        <v-card flat>
          <v-card-text>Invoicing</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item id="tab_bottom_6">
        <v-card flat>
          <v-card-text>Notes</v-card-text>
        </v-card>
      </v-tab-item>


</v-tabs>
  </div>
</template>

<script>
export default {
name:'tab-bottom',
components:{},
data (){
return {
tab:'',
}
}
}
</script>