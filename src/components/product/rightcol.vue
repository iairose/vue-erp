<template>
 <div id="wrap_right"> 
      <div id="righticon_fix">    
<v-layout row  style="height:auto;" wrap>
      <v-flex xs12 sm7 md7 lg7 xl7 text-xs-center text-sm-left text-md-left text-lg-left text-xl-left class="righticon_left">        

        <v-btn flat small color="teal">send message</v-btn>

        <v-btn flat small color="teal">Log note</v-btn>
 
        <v-btn flat small color="teal"><i class="far fa-clock"></i>&nbsp;Schedule activity</v-btn>

      </v-flex>
      <v-flex xs12 sm5 md5 lg5 xl5 text-xs-center text-sm-right text-md-right text-lg-right text-xl-right>
<v-btn flat icon color="teal"><i class="fas fa-check"></i></v-btn>Following
<v-btn flat icon color="teal"><i class="fas fa-bell"></i></v-btn>
<v-btn flat icon color="teal"><i class="fas fa-user"></i></v-btn>

      </v-flex>
    </v-layout></div>
<div id="right_divder">
<v-divider></v-divider>
<span>May 3,2018</span>
</div>
<div id="rightcol_img">
  
 <v-layout row wrap>

      <v-flex xs1 sm1 md1 lg1 xl1 class="admin_icon">
        <img src="../../assets/img/1.jpg">
      </v-flex>
      <v-flex xs10 sm10 md10 lg10 xl10>
        <v-card dark tile flat color="grey lighten-4">
          <v-card-text class="text-xs-left">Note by <span>Your company,Administrator</span> -4 days ago<br/>Product Template Created</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</div>
</div>
</template>

<script>
export default {
name:'porduct-right-col',
components:{},
data (){
return {





}

},
methods:{


}


}	

</script>