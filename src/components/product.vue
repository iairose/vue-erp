<template><div>
<topmenu></topmenu>

<v-container fluid>
<v-layout
justify-center
align-center
>
<v-flex text-xs-center>
<v-layout row fluid wrap>
<v-flex xs12 sm8 md8 lg8 xl8>
<div id="main_wrap">
<tab_top></tab_top>
<!-- <router-view name="toptab"></router-view> -->
<div style="padding: 100px 0;background: #fff"></div>
<!-- <router-view name="bottomrouter"></router-view> -->
<tab_bottom></tab_bottom>
<!-- <test></test> -->
<!-- <router-view name="bottomtab"></router-view> -->

</div>
</v-flex>
<v-flex xs12 sm4 md4 lg4 xl4>


<rightcol></rightcol>


</v-flex> 	


</v-layout>
</v-flex></v-layout></v-container>

</div>
</template>


<script>
import topmenu from '@/components/product/topmenu'
import tab_top from '@/components/product/tab-top'
import tab_bottom from '@/components/product/tab-bottom'
import rightcol from '@/components/product/rightcol'

export default {
name:'product-page',
components:{topmenu,tab_top,tab_bottom,rightcol},
data (){
return {





}

},
methods:{


}


}	

</script>
<style>
@import '../assets/css/fontawesome-all.min.css';
@import '../assets/css/materialdesignicons.min.css';
@import '../assets/css/product.css';
</style>