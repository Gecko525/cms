<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(image, index) of swipeImgs" :key="index">
        <img v-lazy="image" alt="豪车" class="swipe-image">
      </mt-swipe-item>
    </mt-swipe>
    <div>
      <ul class="quick-block">
        <li v-for="(block, index) of quickBlocks" :key="index" class="quick-block-outer">
          <a :href="block.link">
            <img :src="block.image" :alt="block.text" class="quick-block-inner-img">
            <p class="quick-block-inner-text">{{block.text}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mycar from '../../assets/images/mycar.jpg'
export default {
  data () {
    return {
      swipeImgs: [],
      quickBlocks: new Array(8).fill({
        link: 'http://www.baidu.com',
        image: mycar,
        text: '有车一族'
      })
    }
  },
  created () {
    this.$axios.get('getSwipeImages').then((res) => {
      this.swipeImgs = res.data
    })
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
    height: 175px;
  }
  .swipe-image[lazy=loading] {
    width: 40px;
    height: 175px;
    background: #ccc;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .quick-block {
    width: 100%;
    padding: 10px;
    clear: both;
    overflow: hidden;
    background: #fff;
  }
  .quick-block .quick-block-outer {
    width: 25%;
    float: left;
    text-align: center;
  }
  .quick-block .quick-block-outer .quick-block-inner-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .quick-block .quick-block-outer .quick-block-inner-text {
    width: 100%;
    height: 30px;
    line-height: 20px;
    font-size: 12px;
    color: #000;
  }
</style>
