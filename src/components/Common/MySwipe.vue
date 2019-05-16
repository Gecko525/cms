<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(image, index) of swipeImgs" :key="index">
        <img v-lazy="image" alt="豪车" class="swipe-image lazy-image">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'my-swipe',
    data () {
      return {
        swipeImgs: [],
      }
    },
    created() {
      this.$axios.get('getSwipeImages').then((res) => {
        this.swipeImgs = res.data
      });
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 175px;
  }
  .mint-swipe-item {
    background: #ccc;
  }
  .swipe-image {
    width: 100%;
    background: #ccc;
    height: 175px;
  }
</style>
