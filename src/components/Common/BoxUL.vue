<template>
  <ul>
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'box-ul'
}
</script>
<style scoped>
ul {
  width: 100%;
  padding: 10px;
  clear: both;
  overflow: hidden;
  background: #fff;
}
</style>
