<template>
  <button class="vue-ios7-switch" v-on:click="_click()" :type="type">
    <i>ICON</i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'vue-ios7-switch',
    props:{
      type:{
        type:String,
        default:'vue-ios7-switch'
      }
    },
    methods:{
      _click:function(){
        alert('Hello YO VUE!');
      }
    }
  };
</script>

<style lang="scss">
  .vue-ios7-switch{
    border:none;
    background: #999;
    padding:10px;
    font-size: 12px;
    color:#333;
    border-radius: 4px;
    i{
      color:#00f;
      font-size: 8px;
    }
  }
</style>
