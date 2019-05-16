<template>
  <div>
    <my-swipe></my-swipe>
    <div>
      <box-ul>
        <box-li v-for="(block, index) of quickBlocks" :key="index">
          <router-link :to="{name: block.link, params: block.params}">
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
          link: 'home.carPhoto',
          image: 'car2',
          text: '豪车图鉴',
          params: {labelId: '0'}
        },
        {
          link: 'home.goods',
          image: 'car3',
          text: '汽车商城'
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
    this.quickBlocks.forEach((box) => {
      box.image = require(`@/assets/images/${box.image}.png`)
    })
  }
}
</script>
<style scoped>
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
