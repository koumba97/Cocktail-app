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
        <div>
          <h3>Ingredients</h3>
          <ul>
            <li v-for="(ingredient, n) in cocktail.ingredients" :key="`ingredient${n}`">
              {{ingredient.name}} ({{ingredient.measure}})
            </li>
          </ul>
        </div>

        <alcoholic-label :is-alcoholic="cocktail.alcoholic"/>
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
import Cocktail from "../../types/Cocktail";
import LikeButton from "@/ui/LikeButton.vue";
import AlcoholicLabel from "@/ui/AlcoholicLabel.vue";

export default defineComponent({
  name: 'CocktailCard',
  data() {
    return {
      isOpen: false,
      cocktail: {} as Cocktail,
    };
  },
  components: {
    AlcoholicLabel,
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
        padding-left: 13px;
        margin: 0 0 20px;

        li{
          font-size: 18px;
        }
      }
    }
  }

  .cocktail-instruction{
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

  @media(max-width: 400px) {
    width: calc(100vw - 40px);
    margin: auto auto auto -50vw;
    .top-card-container {

      .cocktail-name {
        font-size: 25px;
      }
    }

    .center-card-container{
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-bottom: 10px;

      .cocktail-preview{
        width: 100%;
        height: 150px;
      }
      .cocktail-ingredients-container{
        display: flex;
        flex-direction: column-reverse;
        .alcoholic-label-container{
          margin: 10px 0 10px auto;
        }
        h3{
          margin: 0;
        }
        ul{
          margin-bottom: 0;
          li{
            font-size: 14px;
          }
        }
      }
    }
    .cocktail-instruction{
      font-size: 15px;
      margin: 0;
    }
    h3{
      margin-bottom:0;
    };
    .common-cocktails-container{
      gap: 10px;
      .common-cocktails{
        border-radius: 15px;
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
