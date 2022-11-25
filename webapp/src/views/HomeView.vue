<template>
    <div class="home">
        <h1>The Cocktail Db <font-awesome-icon :icon="['fas', 'martini-glass']"/> </h1>

        <transition-group name="slide-left" tag="div" class="cocktails-container">
            <CocktailCardVue 
                v-for="cocktail of cocktails" 
                :key="cocktail.id"
                :cocktail="cocktail"
            />
        </transition-group>

        <shuffle-button @click="getRandomCocktail"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios, { AxiosResponse } from 'axios';
import Cocktail from '@backend/types/Cocktail';
import CocktailCardVue from '@/components/CocktailCard.vue';
import ShuffleButton from "@/ui/ShuffleButton.vue";

export default defineComponent({
    name: 'HomeView',
    components: {
      ShuffleButton,
        CocktailCardVue,
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

<style lang="scss" scoped>
.cocktails-container{
    display: flex;
    flex-direction: column;
    margin: auto auto 30px;
    height: 450px;
    max-width: 500px;
}
</style>