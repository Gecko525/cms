<template>
  <div>
    <p>评论一下~</p>
    <textarea id="reviewText" name="review" v-model="reviewText"></textarea>
    <mt-button type="primary" @click="pushReview" size="small" class="push-button">发表评论</mt-button>
    <p>所有评论</p>
    <hr>
    <ul>
      <li v-for="item of reviews">
        <div class="card-reviews">
          <div class="top">
            <span class="user">{{item.user}}</span>
            <span class="time">{{item.time}}</span>
          </div>
          <p class="content">说：{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'v-review',
    props: ['reviews'],
    data () {
      return {
        reviewText: ''
      }
    },
    methods: {
      pushReview () {
        if (this.reviewText) {
          const review = {
            content: this.reviewText,
            user: 'user' + new Date().getTime(),
            time: '刚刚'
          };
          this.$axios.post('comment', review).then((res) => {
            if (res.data === 'ok') {
              this.reviews.unshift(review);
              this.reviewText = '';
            }
          }).catch((err) => {
            alert('请重试！');
          });
        }
      }
    }
  }
</script>

<style scoped>
  #reviewText {
    width: 100%;
    height: 80px;
  }
  .push-button {
    width: 100%;
  }
  .card-reviews {
    padding: 10px;
  }
  .top {
    clear: both;
    overflow: hidden;
  }
  .user {
    color: deepskyblue;
    float: left;
  }
  .time {
    float: right;
    font-size: 12px;
    color: #ccc;
  }
  .content {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
</style>
