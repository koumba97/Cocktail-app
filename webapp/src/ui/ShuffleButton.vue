<template>
  <div class="shuffle-button">
    <h5>Shuffle cocktails</h5>
    <div class="shuffle-button-icon">
      <font-awesome-icon :icon="['fas', 'dice']" size="2x"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShuffleButton',
});
</script>

<style lang="scss">
.shuffle-button {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  width: max-content;
  gap: 10px;
  padding: 5px;
  margin: auto;
  cursor: pointer;
  transition-duration: .3s;
  h5{
    margin: 0 10px;
    font-size: 25px;
  }
  .shuffle-button-icon{
    height: 55px;
    width: 55px;
    border-radius: 50px;
    background-color: rgba(255, 80, 116, 0.69);
    color: white;
    display: flex;
    align-items: center;
    svg{
      margin: auto;
    }

  }

  &:hover{
    background-color: rgba(255, 80, 116, 0.41);
  }
}
</style>
