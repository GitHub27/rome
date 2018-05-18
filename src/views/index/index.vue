<template>
  <div class="head-warp">
    <div>
      <carousel :list='carousel_list'></carousel>
      <login-form class="login-warp"></login-form>
      <div class="search-warp">
        <statistic></statistic>
        <search></search>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from "./carousel";
import loginForm from "./loginForm";
import statistic from "./statistic";
import search from "./search";

export default {
  components: {
    carousel,
    loginForm,
    statistic,
    search
  },
  data() {
    return {
      carousel_list: [
        {
          img: "../static/carousel-default-bg.png",
          link: "/#/product"
        },
        {
          img: "../static/carousel-default-bg.png",
          link: "/demo.html"
        }
      ]
    };
  }
  //   watch: {},
  //   computed: {},
  //   methods: {}
  //   created() {},
  //   mounted() {},
  //   destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.head-warp {
  width: 100%;
  background-color: #fff;
  & > div {
    width: 1201px;
    margin: 0 auto;
  }
  .login-warp {
    margin-left: 7px;
  }
}
.search-warp {
  overflow: hidden;
}
</style>
