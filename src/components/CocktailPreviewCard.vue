<template>
    <div class="cocktail-preview-card" @click="openCocktailCard">
      <div class="cocktail-preview" :style="{backgroundImage: `url(${cocktail.thumbnail})`}"></div>
      <div class="cocktail-preview-main">
        <div class="cocktail-preview-card-top">
          <div>
            <h4 class="cocktail-name">{{cocktail.name}}</h4>
            <p class="cocktail-category">{{cocktail.category}}</p>
          </div>
          <like-button/>
        </div>
        <alcoholic-label :is-alcoholic="cocktail.alcoholic"/>
      </div>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import Cocktail from '../../types/Cocktail';
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

  .cocktail-preview-main{
    flex: 1;
  }
  .cocktail-preview-card-top{
    display: flex;
    justify-content: space-between;
    width: 100%;
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

  @media(max-width: 400px) {
    margin: 5px 15px;
    .cocktail-name{
      font-size: 16px;
    }
  }
}
</style>
    