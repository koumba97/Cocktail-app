<template>
  <div class="alcoholic-label-container">
    <div :class="[isAlcoholic ? 'selected' : '', 'alcoholic-label']">Alcoholic</div>
    <div :class="[!isAlcoholic ? 'selected' : '', 'alcoholic-label']">Non Alcoholic</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlcoholicLabel',
  props: {
    isAlcoholic: Boolean,
  },
});
</script>

<style lang="scss">
.alcoholic-label-container {
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

  @media(max-width: 400px) {
    .alcoholic-label{
      font-size: 8px;
    }
  }
}
</style>
