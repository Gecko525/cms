<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="image of swipeImgs" :key="image">
        <img :src="image" alt="豪车" class="swipe-image">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swipeImgs: []
    }
  },
  created () {
    this.$axios.get('getSwipeImages').then((res) => {
      this.swipeImgs = res.data
    })
  }
}
</script>
<style>
  .mint-swipe {
    height: 175px;
  }
  .swipe-image {
    width: 100%;
    height: 175px;
  }
</style>
