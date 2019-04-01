<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :cancelable="false"
               @top-status-change="handleTopChange" :auto-fill="false" ref="loadMore">
    <ul>
      <li v-for="item in goodsList" class="goods">
        <div>
          <div class="goods-img">
            <img :src="item.img">
          </div>
          <div class="goods-desc">
            <p class="goods-desc-title">{{item.title}}</p>
            <p class="goods-desc-price">￥ {{item.price}}</p>
            <p class="goods-desc-old-price">￥ {{item.oldPrice}}</p>
          </div>
        </div>
      </li>
    </ul>

    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
    <div slot="bottom">
      <page-bottom v-show="allGoods"></page-bottom>
    </div>
  </mt-loadmore>
</template>
<script>
  import falali1 from '@/assets/images/falali1.jpg';
  import falali2 from '@/assets/images/falali2.jpg';
  export default {
    data() {
      return {
        goods1: true,
        allGoods: false,
        goodsList: new Array(10).fill({
          img: falali1,
          price: '290000',
          oldPrice: '490000',
          title: '法拉利最新款超级跑车'
        }),
        topStatus: '',
        // ...
      };
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
        console.log('下拉加载。。');
        this.goods1 = !this.goods1;
        this.goodsList.forEach((goods) => {
          goods.img = this.goods1 ? falali2 : falali1;
        });
        setTimeout(() => {
          this.$refs.loadMore.onTopLoaded();
        }, 500);
      },
      loadBottom() {
        console.log('上拉加载。。');
        if (this.goodsList.length < 50) {
          this.goodsList = this.goodsList.concat(this.goodsList);
        } else {
          this.allGoods = true;
        }
        this.$refs.loadMore.onBottomLoaded();
      }
      // ...
    },
    // ...
  };
</script>
<style>
  ul {
    padding: 10px;
  }
  .goods {
    float: left;
    width: 49%;
    height: 330px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .goods:nth-of-type(odd) {
    margin-right: 2%;
  }
  .goods-img {
    width: 100%;
    height: 250px;
  }
  .goods-img img {
    height: 100%;
  }
  .goods-desc {
    width: 100%;
    height: 80px;
  }
  .goods-desc-title {
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .goods-desc-price {
    color: #f66;
    padding-left: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .goods-desc-old-price {
    color: #ccc;
    font-size: 12px;
    text-decoration: line-through;
    padding-left: 10px;
  }
</style>
