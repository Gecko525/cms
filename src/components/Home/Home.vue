<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(image, index) of swipeImgs" :key="index">
        <img v-lazy="image" alt="豪车" class="swipe-image">
      </mt-swipe-item>
    </mt-swipe>
    <div>
      <box-ul>
        <box-li v-for="(block, index) of quickBlocks" :key="index">
          <router-link :to="{name: block.link}">
            <img :src="block.image" :alt="block.text" class="box-img">
            <p class="box-text">{{block.text}}</p>
          </router-link>
        </box-li>
      </box-ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swipeImgs: [],
      quickBlocks: [
        {
          link: 'home.news',
          image: 'car1',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car2',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car3',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car4',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car5',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car6',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car7',
          text: '汽车资讯'
        },
        {
          link: 'home.news',
          image: 'car8',
          text: '汽车资讯'
        }
      ]
    }
  },
  created () {
    this.$axios.get('getSwipeImages').then((res) => {
      this.swipeImgs = res.data
    })
    this.quickBlocks.forEach((box) => {
      box.image = require(`@/assets/images/${box.image}.png`)
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
  .box-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .box-text {
    width: 100%;
    height: 30px;
    line-height: 20px;
    font-size: 12px;
    color: #000;
  }
</style>
