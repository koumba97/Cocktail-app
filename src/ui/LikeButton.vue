<template>
  <div class="like-button" @click.stop="toggleLike">
    <font-awesome-icon v-if="isLiked" :icon="['fas', 'heart']" :style="{color: iconColor}" size="2x"/>
    <font-awesome-icon v-else :icon="['far', 'heart']" :style="{color: iconColor}" size="2x"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LikeButton',
  data() {
    return {
      isLiked: false,
      iconColor: 'rgba(255, 80, 116, 0.69)',
    };
  },
  methods: {
    toggleLike(){
      this.isLiked = !this.isLiked;
    },
  }
});
</script>

<style lang="scss">
.like-button {
  display: flex; gap: 10px;
  .alcoholic-label{
    text-transform: uppercase;
    font-size: 8px;
    border-radius: 50px;
    padding: 2px 5px;
    background-color: #f4f4f4;
    user-select: none;

    &.selected{
      background-color: rgba(255, 80, 116, 0.41);
      border: solid 1px rgba(255, 80, 116, 0.69);
      color: rgba(198, 39, 72, 0.69);
    }
  }
}
</style>
