<template>
  <div class="app-body">
    <mt-header fixed title="汽车之家"></mt-header>
    <div class="app-container">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <i class="fa fa-home" slot="icon"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="found">
        <i class="fa fa-send" slot="icon"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="shopCar">
        <i class="fa fa-shopping-cart" slot="icon"></i>
        购物车
      </mt-tab-item>
      <mt-tab-item id="user">
        <i class="fa fa-user" slot="icon"></i>
        会员
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'app',
      selected: 'home'
    }
  },
  computed: {
  },
  watch: {
    selected (newV, oldV) {
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
  .app-body {
    height: 100%;
  }
  .app-container {
    padding-top: 40px;
    height: 100%;
    overflow: scroll;
    background: #f00;
  }
</style>
