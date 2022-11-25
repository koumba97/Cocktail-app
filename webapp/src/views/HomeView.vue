<template>
    <div class="home">
        <transition-group name="slide-left">
            <div class="cocktail-container" v-for="cocktail of cocktails" :key="cocktail.id">
                {{cocktail}}
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios, { AxiosResponse } from 'axios';
import Cocktail from '@backend/types/Cocktail';

export default defineComponent({
    name: 'HomeView',
    components: {
    },
    data() {
        return {
            cocktails: [] as Cocktail[],
            cocktailsLength: 3,
        };
    },
    mounted() {
        this.getRandomCocktail();
    },
    methods: {
        getRandomCocktail(){
            this.cocktails = [];
            for(let i = 0; i < this.cocktailsLength; i++) {
                axios.get('/random')
                .then((response: AxiosResponse<Cocktail>) => {
                    this.cocktails.push(response.data);
                });
            }
        }
    }
});
</script>

<style scoped>
.cocktail-container{
    border: solid;
}
</style>