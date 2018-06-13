<template>
<span class="main_s_a"><span class="main_s_l"><i class="fas fa-star"></i></span><span class="main_s_r">{{ text }}</span>
<v-btn flat icon small color="grey lighten-2" @click="remove_a1"><i class="fas fa-times"></i></v-btn></span>
</template>
<script>
export default {
props: [ 'a_cat','text'], 

methods: {
        remove_a1() {
            this.$emit('remove_a1');
        }
    }}
</script>