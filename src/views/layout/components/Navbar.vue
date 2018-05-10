<template>
  <div>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        你好,{{name}}
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item >
           <span @click="changePwdVisible=true">修改密码</span>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </el-menu>
    <el-dialog
      title="修改密码"
      :visible.sync="changePwdVisible"
      width="450px">
      <el-form ref="changePwdForm" :model="form" :rules="loginRules" label-width="120px">
        <el-form-item label="输入原密码"  prop="oriPwd">
          <el-input v-model="form.oriPwd" :type="oriPwdType"></el-input>
          <span class="show-pwd" @click="showPwd('oriPwd')"><svg-icon icon-class="eye" /></span>
        </el-form-item>
        <el-form-item label="输入新密码" prop="newPwd">
          <el-input v-model="form.newPwd" :type="newPwdType"></el-input>
          <span class="show-pwd" @click="showPwd('newPwd')"><svg-icon icon-class="eye" /></span>
        </el-form-item>
        <el-form-item label="再次输入新密码" prop="repeat">
          <el-input v-model="form.repeat" :type="repeatType"></el-input>
          <span class="show-pwd" @click="showPwd('repeat')"><svg-icon icon-class="eye" /></span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changePwdVisible = false">取 消</el-button>
        <el-button type="primary" @click.native.prevent="handleChangePwd">确 定</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name'
    ])
  },
  data() {
    const validateOriPwd = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('原密码不能为空'))
      } else {
        callback()
      }
    }
    const validateNewPwd = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('新密码不能为空'))
      } else {
        callback()
      }
    }
    const validateRepeat = (rule, value, callback) => {
      if (value !== this.form.newPwd) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      changePwdVisible: false,
      form: {
        oriPwd: '',
        newPwd: '',
        repeat: ''
      },
      loginRules: {
        oriPwd: [{ required: true, trigger: 'blur', validator: validateOriPwd }],
        newPwd: [{ required: true, trigger: 'blur', validator: validateNewPwd }],
        repeat: [{ required: true, trigger: 'blur', validator: validateRepeat }]
      },
      oriPwdType: 'password',
      newPwdType: 'password',
      repeatType: 'password'
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    showPwd(inputName) {
      const typeName = inputName + 'Type'
      if (this[typeName] === 'password') {
        this[typeName] = ''
      } else {
        this[typeName] = 'password'
      }
    },
    handleChangePwd() {
      this.$refs.changePwdForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('ChangePwd', this.form).then(() => {
            this.loading = false
            this.$router.push({ path: '/login' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $dark_gray:#889aa4;
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select:none;
  }
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }

  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;

      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

