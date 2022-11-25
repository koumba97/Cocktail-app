<template>
  <div :class="['cocktail-card', isOpen ? 'open-card' : 'close-card']" >
    <div class="top-card-container">
      <h1 class="cocktail-name">{{cocktail.name}}</h1>

      <div class="buttons-container">
        <like-button/>
        <div @click="closeCard" class="close-button">
          <font-awesome-icon :icon="['fas', 'times']" size="2x"/>
        </div>
      </div>
    </div>

    <div class="center-card-container">
      <div class="cocktail-preview" :style="{backgroundImage: `url(${cocktail.thumbnail})`}"></div>
      <div class="cocktail-ingredients-container">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="(ingredient, n) in cocktail.ingredients" :key="`ingredient${n}`">
            {{ingredient.name}} ({{ingredient.measure}})
          </li>
        </ul>
      </div>
    </div>

    <p class="cocktail-instruction" v-if="cocktail.instructions">{{cocktail.instructions.en}}</p>

    <h3>Common drinks</h3>
    <div class="common-cocktails-container">
        <div class="common-cocktails" v-for="n of 4" :key="`common-cocktail${n}`"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cocktail from '@backend/types/Cocktail';
import LikeButton from "@/ui/LikeButton.vue";

export default defineComponent({
  name: 'CocktailCard',
  data() {
    return {
      isOpen: false,
      cocktail: {} as Cocktail,
    };
  },
  components: {
    LikeButton

  },
  methods: {
    openCard(cocktail: Cocktail){
      this.cocktail = cocktail;
      this.isOpen = true;
    },
    closeCard(){
      this.isOpen = false;
    },
  }
});
</script>

<style lang="scss">
.cocktail-card {
  height: 560px;
  width: 500px;
  background-color: white;
  border-radius: 20px 20px 0 0;
  position: fixed;
  transition-duration: .3s;
  bottom: -600px;
  left: 50%;
  margin: auto auto auto -280px;
  padding: 20px;

  &.open-card{
    bottom: 0
  }

  .top-card-container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .cocktail-name{
      text-align: left;
      width: max-content;
      margin: 0;
    }

    .buttons-container{
      display: flex;
      gap: 30px;
      width: max-content;
      margin-left: auto;
      margin-bottom: 20px;
      .close-button{
        width: max-content;
        margin-left: auto;
      }
    }
  }

  .center-card-container{
    display: flex;
    gap: 20px;
    margin-bottom: 10px;

    .cocktail-preview{
      width: 200px;
      height: 200px;
      background-size: cover;
      background-position: center;
      border-radius: 20px;
    }
    .cocktail-ingredients-container{
      ul{
        margin: 0;
        padding-left: 13px;
        li{
          font-size: 18px;
        }
      }
    }
  }

  .cocktail-instruction{
    text-align: left;
    font-size: 20px;
  }

  .common-cocktails-container{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .common-cocktails{
      width: 120px;
      height: 120px;
      border-radius: 20px;
      background-color: #e5e5e5;
    }
  }
}
</style>
