<template>
  <div class="news-details">
    <h2>{{news.title}}</h2>
    <span>{{news.creater}}</span> <span>{{news.createTime}}</span>
    <hr>
    <div v-html="news.content"></div>
    <hr>
    <div>
      <v-review :id="newsId"></v-review>
    </div>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newsId: '',
        news: {}
      }
    },
    mounted () {
      this.newsId = this.$route.params.id;
      this.$axios.get('getNewsDetail', {params: {id: this.newsId}}).then((res) => {
        this.news = res.data.news;
      })
    }
  }
</script>

<style scoped>
  .news-details {
    padding: 10px;
  }
</style>
