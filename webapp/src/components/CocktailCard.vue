<template>
    <div class="cocktail-card">
      <div class="cocktail-preview" :style="{backgroundImage: `url(${cocktail.thumbnail})`}"></div>
      <div>
        <h4 class="cocktail-name">{{cocktail.name}}</h4>
        <p class="cocktail-category">{{cocktail.category}}</p>
        <alcoholic-label :is-alcoholic="cocktail.alcoholic"/>
      </div>

      <div class="like-button" @click="toggleLike">
        <font-awesome-icon v-if="isLiked" :icon="['fas', 'heart']" :style="{color: iconColor}" size="2x"/>
        <font-awesome-icon v-else :icon="['far', 'heart']" :style="{color: iconColor}" size="2x"/>
      </div>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import Cocktail from '@backend/types/Cocktail';
import AlcoholicLabel from "@/ui/AlcoholicLabel.vue";

export default defineComponent({
    name: 'HelloWorld',
    props: {
      cocktail: Object as () => Cocktail,
    },
    data() {
      return {
        isLiked: false,
        iconColor: 'rgba(255, 80, 116, 0.69)',
      };
    },
    components: {
      AlcoholicLabel,
    },
    methods: {
      toggleLike(){
        this.isLiked = !this.isLiked;
      }
    }
});
</script>

<style lang="scss">
.cocktail-card {
  margin: 15px;
  background-color: white;
  border-radius: 18px;
  padding: 10px;
  display: flex;
  gap: 10px;
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
    cursor: pointer;
    width: max-content;
    position: relative;
    height: max-content;
    margin-left: auto;
  }
}
</style>
    