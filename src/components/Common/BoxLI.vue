<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'box-li'
}
</script>
<style scoped>
li {
  width: 25%;
  float: left;
  text-align: center;
}
</style>
