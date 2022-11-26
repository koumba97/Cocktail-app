<template>
    <div class="home-view">
        <h1>The Cocktail Bar <font-awesome-icon :icon="['fas', 'martini-glass']"/></h1>

        <transition-group name="slide-left" tag="div" class="cocktails-container">
            <CocktailPreviewCard
                v-for="cocktail of cocktails"
                :key="cocktail.id"
                :cocktail="cocktail"
                @open-card="openCocktailCard"
            />
        </transition-group>

        <shuffle-button @click="getRandomCocktail"/>
        <cocktail-card ref="cocktailCard"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios, { AxiosResponse } from 'axios';
import Cocktail from '../../types/Cocktail';
import ShuffleButton from "@/ui/ShuffleButton.vue";
import CocktailPreviewCard from "@/components/CocktailPreviewCard.vue";
import CocktailCard from "@/components/CocktailCard.vue";

export default defineComponent({
    name: 'HomeView',
    components: {
      CocktailCard,
      ShuffleButton,
      CocktailPreviewCard,
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
                axios.get('/api/randomCocktail')
                .then((response: AxiosResponse<Cocktail>) => {
                    this.cocktails.push(response.data);
                });
            }
        },

        openCocktailCard(cocktail: Cocktail){
          (this.$refs['cocktailCard'] as any).openCard(cocktail);
        }
    }
});
</script>

<style lang="scss" scoped>
.home-view{
  height: 100vh;
  overflow: hidden;
  h1{
    text-align: center;
  }
}
.cocktails-container{
  display: flex;
  flex-direction: column;
  margin: auto auto 30px;
  height: 450px;
  max-width: 500px;
  overflow: hidden;
}

@media(max-width: 400px) {
  .cocktails-container{
    height: 400px;
    margin-bottom: 20px;
  }
}
</style>