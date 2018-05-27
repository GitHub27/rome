<template>
  <div>
    <div class="top-nav-containter">
      <div class="top-nav">
        <div class="fl">
          您好，欢迎入驻智汇ROME！
        </div>
        <div class="menus fr">
          <p class="login-link">登录 | 免费注册</p>
          <p>联系客服</p>
          <p>帮助中心</p>
        </div>
      </div>
    </div>
    <div class="main-nav-containter">
      <div class="main-nav">
        <div class="fl">
          <img class="top-logo" src="../../../assets/index/logo.png" alt="智汇ROME">
          <span class="mission">让4亿人才信息流动起来！</span>
        </div>
        <div class="menus fr">
          <p class="login-link">首页</p>
          <p>访问</p>
          <p>个人中心</p>
          <router-link class="share" to="/share">分享人才信息</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>