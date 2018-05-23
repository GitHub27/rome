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
            <li class="user-menu bb active">
                <router-link to="/">我的账户</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/myvisit">我的访问</router-link>
            </li>
            <li class="user-menu bb">
                <router-link to="/myshare">我的共享</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/myshare">我的收益</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/myshare">提现记录</router-link>
            </li>
            <li class="user-menu bb">
                <router-link to="/myshare">现金管理账户</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/myshare">我的认证</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/personal-auth">个人认证</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
