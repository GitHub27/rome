<template>
    <div class="rome-warp">
        <div class="rome">
            <side-menu></side-menu>
            <div class="rome-main">
                <h2 class="page-header blpl">个人认证</h2>
                <div class="auth-progress">
                    <ul class="progress-header">
                        <li class="active">基本信息认证</li>
                        <li>审核资料</li>
                        <li>审核结果</li>
                    </ul>
                </div>
                <div class="auth-main">
                    <el-form autoComplete="on" :model="authForm" :rules="authRules" ref="authForm" label-position="left" label-width="0px" class="">
                        <el-form-item prop="realname">
                            <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="请输入真实姓名" />
                        </el-form-item>
                        <el-form-item prop="idcard">
                            <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="请输入身份证号" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleAuth">
                                登 录
                            </el-button>
                            <p class="tip">还没有账号？
                                <span>立即注册</span>
                            </p>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideMenu from "@/components/Sidemenu/index";
export default {
  components: {
    SideMenu
  },
  data() {
    const validateRealname = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("真实姓名不能为空"));
      } else {
        callback();
      }
    };
    const validateIdcard = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("身份证号不能为空"));
      } else {
        callback();
      }
    };
    return {
      authForm: {
        realname: "",
        idcard: ""
      },
      authRules: {
        realname: [
          { required: true, trigger: "blur", validator: validateRealname }
        ],
        idcard: [{ required: true, trigger: "blur", validator: validateIdcard }]
      },
      loading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleAuth() {}
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
.auth-progress {
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 24px 27px;
  .progress-header {
    display: inline-block;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #ddd;
    li {
      float: left;
      height: 50px;
      line-height: 50px;
      width: 203px;
      color: #333;
      background-color: #fff;
      font-size: 16px;
      position: relative;
      z-index: 2;
      &.active {
        color: #fff;
        background-color: #f07026;
      }
      &:not(.active) {
        border-right: 1px solid #ddd;
      }
      &:last-of-type {
        border-right: none;
      }
      &:after {
        // position: absolute;
        // z-index: 1;
        // content: "";
        // top: -1px;
        // bottom: 0;
        // left: -1px;
        // right: 0;
        // height: 52px;
        // width: 205px;
        // background-color: #ddd;
        // opacity: 1;
      }
    }
  }
}
</style>
