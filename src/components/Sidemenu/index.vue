<template>
    <div class="sidebar">
        <ul>
            <li class="user-info">
                <img class="user-phone" src="../../assets/user/user-phone.png" alt="">
                <h1>红色猎人</h1>
                <div class="user-tag">
                    <i class="ranking-icon"></i>
                    ROME诚信
                    <span class="score">93.6</span>
                    <span class="icon-evaluate">极好</span>
                </div>
            </li>
            <li class="user-menu bb ">
                <router-link :class="{active:currentRouter=='/account'}" to="/account">我的账户</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:currentRouter=='/myvisit'}" to="/myvisit">我的访问</router-link>
            </li>
            <li class="user-menu bb">
                <router-link :class="{active:currentRouter=='/myshare'}" to="/myshare">我的共享</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:currentRouter=='/account/profit'}" to="/account/profit">我的收益</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:currentRouter=='/account/withdrawrecord'}" to="/account/withdrawrecord">提现记录</router-link>
            </li>
            <li class="user-menu bb">
                <router-link :class="{active:currentRouter=='/account/management'}" to="/account/management">现金管理账户</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:currentRouter=='/task'}" to="/task">我的任务</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:currentRouter=='/personal-auth'}" to="/personal-auth">个人认证</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:currentRouter=='/management-password'}" to="/management-password">密码管理</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      //TODP:路由激活状态实现方式是否可以优化？
      currentRouter: this.$route.path
    };
  },
  watch: {
    $route: "toggleMuneColor"
  },
  computed: {
    // ...mapGetters(["routers"]),
    // activeRoute() {
    //   return this.routers;
    // }
  },
  methods: {
    toggleMuneColor(router) {
      this.currentRouter = router.path;
      console.log(router.path);
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

        