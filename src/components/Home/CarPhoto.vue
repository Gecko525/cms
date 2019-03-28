<template>
  <div>
    <ul>
      <li v-for="car of carPhotos" :key="car.id">
        <img v-lazy="car.image" alt="豪车图鉴" class="car-img lazy-image">
        <p class="car-desc">{{car.desc}}</p>
      </li>
    </ul>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carPhotos: []
    }
  },
  created () {
    this.$axios.get('getCarPhotos').then((res) => {
      this.carPhotos = res.data.data.map((car) => {
        car.desc = car.desc.length > 50 ? car.desc.substring(0, 50).concat('...') : car.desc
        return car
      })
    })
  }
}
</script>

<style scoped>
  li {
    position: relative;
    background: #ccc;
  }
  .car-img {
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
</style>
