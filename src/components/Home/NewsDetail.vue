<template>
  <div class="news-details">
    <h2>{{news.title}}</h2>
    <span>{{news.creater}}</span> <span>{{news.createTime}}</span>
    <hr>
    <div v-html="news.content"></div>
    <hr>
    <div>
      <v-review :reviews="reviewList"></v-review>
    </div>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        news: {},
        reviewList: []
      }
    },
    mounted () {
      const id = this.$route.params.id;
      this.$axios.get('getNewsDetail', {params: {id}}).then((res) => {
        this.news = res.data.news;
        this.reviewList = res.data.review
      })
    }
  }
</script>

<style scoped>
  .news-details {
    padding: 10px;
  }
</style>
