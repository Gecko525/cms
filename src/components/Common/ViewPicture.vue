<template>
  <div class="view-pic">
    <ul v-if="slides && slides.length > 0">
      <li class="pic-card" v-for="item of slides" :key="item.id" @click="singleView(item.id)">
        <img :src="item.src" :alt="item.alt" class="pic lazy-image">
        <p class="car-desc">{{item.desc}}</p>
      </li>
    </ul>
    <div class="view-pic-modal" id="modal" v-if="showModal">
      <div class="view-top">
        <span class="view-top-index">{{singleIndex+1}}/{{slides.length}}</span>
        <div class="close-button" @click="closeModal">
          <i class="fa fa-close"></i>
        </div>
      </div>
      <div class="pre-button" @click="picCtrl(true)">&lt;</div>
      <div class="next-button" @click="picCtrl(false)">&gt;</div>
      <img :src="singlePic.src" :alt="singlePic.alt" class="view-img">
      <p class="pic-name">{{singlePic.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view-picture',
  props: ['slides'],
  data () {
    return {
      showModal: false,
      singlePic: {},
      singleIndex: 0
    }
  },
  methods: {
    singleView (id) {
      this.slides.forEach((pic, index) => {
        if (pic.id === id && pic.src) {
          this.singlePic = pic
          this.showModal = true
          this.singleIndex = index
          this.$nextTick(() => {
            document.getElementById('modal').style.height = document.body.clientHeight + 'px'
          })
        }
      })
    },
    closeModal () {
      this.showModal = false
      this.singlePic = {}
    },
    picCtrl (left) {
      if (left) {
        if (this.singleIndex === 0) {
          this.singleIndex = this.slides.length - 1
        } else {
          this.singleIndex--
        }
      } else {
        if (this.singleIndex === this.slides.length - 1) {
          this.singleIndex = 0
        } else {
          this.singleIndex++
        }
      }
      this.singlePic = this.slides[this.singleIndex]
    }
  }
}
</script>

<style scoped>
  .pic-card {
    position: relative;
    background: #ccc;
  }
  .pic {
    width: 100%;
    height: auto;
  }
  .car-desc {
    position: absolute;
    width: 100%;
    bottom: 5px;
    clear: both;
    overflow: hidden;
    max-height: 50px;
    background: rgba(0,0,0,0.3);
    color: #ddd;
    font-size: 14px;
  }
  .lazy-image[lazy="loading"] {
    height: 300px !important;
  }
  .view-pic-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
    color: #fff;
    z-index: 11;
  }
  .view-top {
    width: 100%;
    background: rgba(255,255,255,0.3);
    line-height: 30px;
    font-size: 12px;
    height: 30px;
    padding: 0 10px;
  }
  .view-top-index {
    float: left;
  }
  .close-button {
    float: right;
  }
  .fa {
    font-size: 18px;
  }
  .pre-button,.next-button {
    width: 24px;
    height: 24px;
    line-height: 21px;
    background: rgba(10,10,10,0.4);
    position: absolute;
    z-index: 12;
    font-size: 20px;
    text-align: center;
  }
  .pre-button, .next-button {
    top: 50%;
    margin-top: -12px;
  }
  .pre-button {
    left: 10px;
  }
  .next-button {
    right: 10px;
  }
  .view-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  .pic-name {
    position: absolute;
    bottom: 20px;
    background: rgba(0,0,0,0.3);
    font-size: 14px;
    text-indent: 2em;
  }
</style>
