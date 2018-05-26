<template>
  <div class="login-container">
    <header>
      <p @click="toggleLogin" :class="{'active':loginType=='SMS'}">验证码登录</p>
      <p @click="toggleLogin" :class="{'active':loginType!=='SMS'}">密码登录</p>
      <div class="tab-nav" :class="{'tab-nav-pwd':loginType!=='SMS'}"></div>
    </header>
    <section>
      <el-form v-loading="smsLoginStepLoading" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
        <el-form-item prop="phone" :error="asynError.phone">
          <el-input @keyup.native="captchaKeyup" maxlength="11" name="phone" type="text" v-model="loginForm.phone" autoComplete="on" placeholder="手机号" />
        </el-form-item>
        <el-form-item prop="captcha" :error="asynError.captcha">
          <el-input maxlength="6" class="captcha-input fl" name="captcha" type="text" v-model="loginForm.captcha" @keyup.native="captchaKeyup" autoComplete="on" placeholder="图片验证码" />
          <img :src="captchaUrl" alt="点击刷新" class="captcha" @click="getCaptcha">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
            登 录
          </el-button>
          <p class="tip">还没有账号？
            <span>立即注册</span>
          </p>
        </el-form-item>
      </el-form>

    </section>
  </div>
</template>

<script>
import { captcha, sendSMS } from "@/api/login";
import { isPhoneNumber, isNumber } from "../../utils/validate";
export default {
  components: {},
  data() {
    const validatePhone = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("手机号码不能为空"));
      }
      if (!isPhoneNumber(value)) {
        callback(new Error("手机号格式不对"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("图片验证码不能为空"));
      } else {
        callback();
      }
    };
    const validateCaptcha = (rule, value, callback) => {
      if (this.captCode === "") {
        callback(new Error("请重新获取图片验证码"));
      } else if (value.length < 1) {
        callback(new Error("图片验证码不能为空"));
      } else if (value.length < 6) {
        callback(new Error("请输入有效的验证码"));
      } else {
        callback();
      }
    };
    return {
      loginType: "SMS",
      captchaUrl: "",
      loginForm: {
        phone: "",
        password: "",
        captCode: "",
        captcha: ""
      },
      loginRules: {
        phone: [
          {
            required: true,
            trigger: "blur",
            validator: validatePhone
          }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass }
        ],
        captcha: [
          { required: true, trigger: "blur", validator: validateCaptcha }
        ]
      },
      loading: false,
      smsLoginStepLoading: false,
      asynError: {
        phone: "",
        captcha: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    getCaptcha() {
      captcha()
        .then(({ data }) => {
          this.captchaUrl = data.captcha;
          this.loginForm.captCode = data.captCode;
        })
        .catch(message => {
          console.log("get captcha error", message);
        });
    },
    /**
     * 监听验证码输入是否完成
     */
    captchaKeyup() {
      console.log(this.loginForm.captcha);
      //图形验证码
      if (this.captCode === "") {
        return;
      } else if (this.loginForm.captcha.length < 1) {
        return;
      } else if (this.loginForm.captcha.length < 6) {
        return;
      }
      //手机号码
      if (this.loginForm.phone.length < 1) {
        return;
      }
      if (!isPhoneNumber(this.loginForm.phone)) {
        return;
      }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.smsLoginStepLoading = true;
          sendSMS().then(
            d => {
              if (d.data.result) {
                console.log("ok");
                this.smsLoginStepLoading = false;
              }
            },
            d => {
              this.smsLoginStepLoading = false;
              console.log(1, d);
            }
          );
        }
      });
    },
    toggleLogin() {
      if (this.loginType == "SMS") {
        this.loginType = "PWD";
      } else {
        this.loginType = "SMS";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          const loginReq = {
            captcha: this.loginForm.captcha,
            captchaCode: this.loginForm.captCode,
            loginPass: this.loginForm.password,
            userAccount: this.loginForm.phone.trim()
          };
          this.$store
            .dispatch("Login", loginReq)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.getCaptcha();
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    this.getCaptcha();
  },
  mounted() {},
  destroyed() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";
</style>
