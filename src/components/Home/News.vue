<template>
  <div>
    <ul>
      <li v-for="(news, index) of newsList" :key="index" @click="viewDetail">
          <img :src="news.image" alt="新闻图片" class="news-pic">
          <div class="news-text">
            <p class="news-title">{{news.title}}</p>
            <p class="news-subTitle">{{news.subTitle}}</p>
          </div>
      </li>
    </ul>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  methods: {
    viewDetail() {
      this.$router.push({name: 'home.news.detail'});
    }
  },
  created () {
    this.$axios.get('getNewsList').then((res) => {
      this.newsList = res.data;
    })
  }
}
</script>

<style scoped>
  li {
    height: 100px;
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  li .news-pic {
    width: 120px;
    height: 90px;
  }
  li .news-text {
    flex: 1;
    overflow: hidden;
    height: 100%;
    padding: 5px;
    position: relative;
  }
  li .news-text .news-title {
    font-family: cursive;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    white-space: normal;
    word-break: keep-all;
    word-wrap: break-word;
  }
  li .news-text .news-subTitle {
    font-size: 12px;
    color: #aaa;
    overflow: hidden;
    position: absolute;
    bottom: 5px;
  }
</style>
