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
            <ul>
              <li>
                <div class="fl auth-label">
                  <span class="theme-color">* </span>真实姓名：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="realname">
                    <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="请输入真实姓名" />
                  </el-form-item>
                </div>
              </li>
              <li class="idcard">
                <div class="fl auth-label ">
                  <span class="theme-color">* </span>身份证号：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="idcard">
                    <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="请输入身份证号" />
                  </el-form-item>
                </div>
              </li>
              <li class="idcard-tip">
                <div class="fl auth-label">
                  <span class="theme-color">* </span>手持身份证照片：
                </div>
                <div class="fl fs12c9 auth-text">
                  （需本人手持身份证，脸部无遮挡，身份证内容清晰，格式JPG / GIF / PNG，2M以内）
                </div>
              </li>
              <li class="idcard-upload">
                <div class="fl auth-label">
                </div>
                <div class="fl fs12c9 auth-text">
                  <label for="file-idcard">上传手持身份证照片</label>
                  <input type="file" id="file-idcard" style="position:absolute;clip:rect(0 0 0 0);">
                  <span class="delete-card">删除</span>
                </div>
              </li>
              <li class="limit-tip">
                <div class="fl auth-label">
                </div>
                <div class="fl fs12c9 auth-text">
                  注：本月还可修改5次个人信息，请谨慎修改
                </div>
              </li>
            </ul>

            <el-form-item class="auth-submit">
              <el-button type="primary" :loading="loading" @click.native.prevent="handleAuth">
                确认并提交
              </el-button>
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
.auth-main {
  background-color: #fff;
  margin-top: 8px;
  padding-top: 41px;
  ul {
    li {
      width: 100%;
      overflow: hidden;
      color: #333;
      font-size: 15px;
      height: 56px;
      .auth-label {
        width: 296px;
        height: 40px;
        line-height: 40px;
        text-align: right;
      }
      .auth-text {
        min-width: 212px;
        height: 40px;
        line-height: 40px;
      }
      // &.idcard {
      //   margin-top: 16px;
      // }
      // &.idcard-tip {
      //   margin-top: 17px;
      // }
    }
    .idcard-upload {
      height: 163px;
      label {
        display: inline-block;
        width: 212px;
        height: 163px;
        line-height: 163px;
        text-align: center;
        border: 1px solid #ddd;
        font-size: 14px;
        color: #999;
      }
      .delete-card {
        vertical-align: top;
        font-size: 14px;
        color: #e83902;
        cursor: pointer;
      }
    }
    // .limit-tip {
    //   margin-top: 37px;
    // }
  }
  .auth-submit {
    // margin-left: 49px;
    text-align: center;
    .el-button--primary {
      color: #fff;
      background-color: #f07026;
      border-color: #f07026;
      height: 44px;
      width: 122px;
      margin-left: -120px;
      border-radius: 0;
    }
  }
}
</style>
