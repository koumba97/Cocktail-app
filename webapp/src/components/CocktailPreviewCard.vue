<template>
    <div class="cocktail-preview-card" @click="openCocktailCard">
      <div class="cocktail-preview" :style="{backgroundImage: `url(${cocktail.thumbnail})`}"></div>
      <div>
        <h4 class="cocktail-name">{{cocktail.name}}</h4>
        <p class="cocktail-category">{{cocktail.category}}</p>
        <alcoholic-label :is-alcoholic="cocktail.alcoholic"/>
      </div>

      <like-button/>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import Cocktail from '@backend/types/Cocktail';
import AlcoholicLabel from "@/ui/AlcoholicLabel.vue";
import LikeButton from "@/ui/LikeButton.vue";

export default defineComponent({
    name: 'CocktailPreviewCard',
    props: {
      cocktail: Object as () => Cocktail,
    },
    data() {
      return {
      };
    },
    components: {
      LikeButton,
      AlcoholicLabel,
    },
    methods: {
      openCocktailCard(){
        this.$emit('open-card', this.cocktail);
      }
    }
});
</script>

<style lang="scss">
.cocktail-preview-card {
  margin: 15px;
  background-color: white;
  border-radius: 18px;
  padding: 10px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  border: solid transparent;
  transition-duration: .3s;

  &:hover{
    border-color: lightgray;
  }
  .cocktail-preview{
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
  }
  .cocktail-name{
    margin:0;
    text-align: left;
    font-size: 22px;
  }
  .cocktail-category{
    margin: 0 0 10px;
    font-size: 14px;
    text-align: left;
  }
  .like-button{
    margin-left: auto;
  }
}
</style>
    