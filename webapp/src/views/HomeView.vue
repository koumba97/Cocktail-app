<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import axios from 'axios';
import Cocktail from '@backend/types/Cocktail';

export default defineComponent({
    name: 'HomeView',
    components: {
        HelloWorld,
    },
    data() {
        return {
            cocktails: [] as Cocktail[]
        };
    },
    mounted() {
        axios.get('/random')
        .then(response => {
            console.log(response);
        })
    }
});
</script>
