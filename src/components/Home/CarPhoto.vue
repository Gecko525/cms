<template>
  <div>
    <div class="labels">
      <ul >
        <li v-for="item of labels" :key="item.id"
            :class="{'isActive': item.id === $route.params.labelId}">
          <router-link :to="{name: 'home.carPhoto', params: {labelId: item.id}}">
            {{item.label}}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <div v-if="carPhotos && carPhotos.length > 0">
        <view-picture :slides="carPhotos"></view-picture>
        <page-bottom></page-bottom>
      </div>
      <div v-else>
        <p class="no-content">没有内容哦～</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carPhotos: [],
      labels: [
        {
          id: '0',
          label: '所有'
        },
        {
          id: '1',
          label: '法拉利'
        },
        {
          id: '2',
          label: '保时捷'
        },
        {
          id: '3',
          label: '宾利'
        },
        {
          id: '4',
          label: '路虎'
        },
        {
          id: '5',
          label: '玛莎拉蒂'
        },
        {
          id: '6',
          label: '巴拉巴拉'
        }
      ]
    }
  },
  methods: {
    getPhotosByLabel (id) {
      this.$axios.get('getCarPhotos', {params: {id}}).then((res) => {
        this.carPhotos = res.data.map((car) => {
          car.desc = car.desc.length > 50 ? car.desc.substring(0, 50).concat('...') : car.desc
          // return {
          //   src: car.image,
          //   msrc: car.image,
          //   title: car.desc,
          //   alt: '222',
          //   w: '300',
          //   h: '200'
          // }
          return car
        })
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.getPhotosByLabel(to.params.labelId)
    next()
  },
  created () {
    this.getPhotosByLabel(this.$route.params.labelId)
  }
}
</script>

<style scoped>
  .labels {
    height: 50px;
    padding: 5px;
    overflow-x: scroll;
  }
  .labels ul {
    width: 1000%;
  }
  .labels li {
    float: left;
    padding: 5px 10px;
    color: #267fae;
  }
  .labels li:last-child {
    margin-right: 5px;
  }
  .labels li a:visited {
    color: #267fae;
  }
  .labels li.isActive {
    background: #ef5371;
    border-radius: 3px;
  }
  .labels li.isActive a{
    color: #fff;
  }
  .no-content {
    color: #ccc;
    font-size: 14px;
    text-align: center;
    margin-top: 50%;
  }
</style>
