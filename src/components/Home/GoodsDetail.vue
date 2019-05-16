<template>
  <div>
    <my-swipe></my-swipe>
    <div class="goods-detail">
      <p>汽车编号：{{goodsId}}</p>
      <p>库存：{{stock}}</p>
      <p class="n-price">2900</p>
      <p class="o-price">5000</p>
      <div>
        <label class="buyNum-label" for="buyNum">购买数量</label>
        <div class="buyNum-btns">
          <input type="button" value="-" :disabled="goods.num <= 1" @click="changeNum(false)">
          <input type="text" v-model="goods.num" id="buyNum" readonly>
          <input type="button" value="+" :disabled="goods.num >= stock" @click="changeNum(true)">
        </div>
      </div>
      <div class="buy-btns">
        <transition name="ball" @afterEnter="removeBall">
          <span class="flyBall" v-if="isAddingToCar">+1</span>
        </transition>
        <mt-button size="small" type="primary" @click="addToCar">加入购物车</mt-button>
        <mt-button size="small" type="danger" @click="buyNow">立即购买</mt-button>
      </div>
      <v-review :id="goodsId"></v-review>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        goodsId: '',
        isAddingToCar: false,
        stock: 3,
        goods: {
          num: 1,
        }
      }
    },
    methods: {
      changeNum(isPlus) {
        if (isPlus) {
          this.goods.num++;
        } else {
          this.goods.num--;
        }
      },
      buyNow() {
        alert('请付钱去吧！');
      },
      addToCar() {
        this.isAddingToCar = true;
        // alert('加入成功，我在购物车等你哦！');
      },
      removeBall() {
        this.isAddingToCar =false;
      }
    },
    mounted() {
      this.id = this.$route.params.id;
    }
  }
</script>

<style scoped>
  .buyNum-btns {
    display: inline-block;
    height: 30px;
    vertical-align: middle;
  }
  .buyNum-btns input {
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  .buyNum-btns input:first-of-type {
    border-radius: 3px 0 0 3px;
  }
  .buyNum-btns input:last-of-type {
    border-radius: 0 3px 3px 0;
  }
  .buy-btns {
    text-align: center;
    padding: 5px;
    position: relative;
  }
  .buy-btns button {
    width: 150px;
  }
  .buy-btns .flyBall{
    display: inline-block;
    color: #fff;
    background: #c5283d;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    position: absolute;
    top: -10px;
    left: 27%;
    margin-left: -10px;
  }
  .ball-enter-active {
    animation: ball-fly 0.5s linear;
  }
  .ball-leave {
    opacity: 0;
  }

  @keyframes ball-fly {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(60px, -60px);
    }
    70% {
      transform: translate(100px, 80px);
    }
    100% {
      transform: translate(130px, 300px);
    }
  }
</style>
