<template>
<span class="main_s_a"><span class="main_s_l"><i class="fas fa-bars"></i></span><span class="main_s_r">{{ text }}</span>
<v-btn flat icon small color="grey lighten-2" @click="remove_a3"><i class="fas fa-times"></i></v-btn></span>
</template>
<script>
export default {
props: [ 'a_cat','text'], 
methods: {
        remove_a3() {
            this.$emit('remove_a3');
        }
    }}
</script>