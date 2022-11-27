<template>
    <div class="home-view">
        <h1>The Cocktail Bar <font-awesome-icon :icon="['fas', 'martini-glass']"/></h1>

        <transition-group name="list" tag="div" class="cocktails-container">
            <cocktail-preview-card
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
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.home-view{
  width: 100%;
  max-height: 600px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    text-align: center;
  }
}
.cocktails-container{
  display: flex;
  flex-direction: column;
  margin: auto auto 30px;
  padding: 0 15px;
  height: 450px;
  max-width: 500px;
  overflow: hidden;
  gap: 15px;
}

.shuffle-button{
  margin-bottom: 20px;
}
@media(max-width: 400px) {
  .cocktails-container{
    max-width: unset;
    height: max-content;
    min-height: 420px;
  }
}

@media(min-width: 1000px) {
  .home-view{
    min-height: unset;
    max-height: 800px;
    align-self: center;

    h1{
      font-size: 50px;
    }
  }
}
</style>