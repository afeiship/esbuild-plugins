<template>
  <label
    :data-theme="theme"
    :style="{
      'font-size':size
    }"
    :class="['vue-ios7-switch',cssClass]">
    <input type="checkbox" :checked="checked">
    <span></span>
  </label>
</template>

<script>
  export default {
    name: 'vue-ios7-switch',
    props:{
      cssClass:String,
      checked:Boolean,
      size:String,
      theme:{
        type:String,
        default:'green'
      }
    }
  };
</script>

<style lang="sass">
  @import "./style.scss"
</style>
