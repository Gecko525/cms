<template>
  <div class="app-body">
    <mt-header fixed :title="appTitle">
      <router-link :to="{name: lastRoute}" slot="left" v-if="isSubPage">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" v-if="isSubPage"></mt-button>
    </mt-header>
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
      selected: 'home',
      appTitle: '',
      isSubPage: false,
      lastRoute: ''
    }
  },
  methods: {
    routeChange (route) {
      const routeName = route.name;
      this.lastRoute = routeName.includes('.') ? routeName.substring(0, routeName.lastIndexOf('.')) : routeName;
      this.selected = routeName.split('.')[0];
      this.isSubPage = this.selected !== routeName;
      this.appTitle = route.meta.title;
    }
  },
  created () {
    this.routeChange(this.$router.currentRoute);
  },
  watch: {
    selected (newV, oldV) {
      this.$router.push({
        name: newV
      })
    },
    $route (newV, oldV) {
      this.routeChange(newV);
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
    padding-bottom: 55px;
    height: 100%;
    overflow: scroll;
  }
</style>
