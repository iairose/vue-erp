<template>
<span class="main_s_a"><span class="main_s_l"><i class="fas fa-filter"></i></span><span class="main_s_r">{{ text }}</span>
<v-btn flat icon small color="grey lighten-2" @click="remove_a2"><i class="fas fa-times"></i></v-btn></span>
</template>
<script>
export default {
props: [ 'a_cat','text'], 
methods: {
        remove_a2() {
            this.$emit('remove_a2');
        }
    }}
</script>