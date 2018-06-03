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
                <router-link to="/account">我的账户</router-link>
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
                <router-link to="/account">我的任务</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/personal-auth">个人认证</router-link>
            </li>
            <li class="user-menu">
                <router-link to="/management-password">密码管理</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["routers"]),
    routes() {
      return this.routers;
    }
  },
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

        <!-- <template v-for="(item,index) in routers" v-show="false">
            <p v-if="!item.hidden&&!item.children" :key="index">
                <span>
                    {{item.name?item.name:'--'}}
                </span>
            </p>
            <p v-else-if="item.children" :key="index">
                <span v-for="(citem,cindex) in item.children" :key="cindex">
                    <span v-if="citem.name">
                        {{citem.name}}
                    </span>

                </span>
            </p>
        </template> -->