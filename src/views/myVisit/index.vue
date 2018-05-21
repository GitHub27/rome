<template>
  <div class="rome-warp">
    <div class="rome">
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
          <li class="user-menu bb active">我的账户</li>
          <li class="user-menu">我的访问</li>
          <li class="user-menu bb">我的共享</li>
          <li class="user-menu">我的收益</li>
          <li class="user-menu">提现记录</li>
          <li class="user-menu bb">现金管理账户</li>
          <li class="user-menu">我的认证</li>
          <li class="user-menu">个人认证</li>
        </ul>
      </div>
      <div class="rome-main">
        <h2 class="page-header blpl">我的访问记录</h2>
        <div class="search-warp">
          <div class="search-main">
            <span class="svg-container ">
              <svg-icon icon-class="search" class="svg-container-search" />
            </span>
            <input class="search-word" type="text" placeholder='输入职位、公司等搜索'>
            <input class="search-btn btn" type="button" value='搜索'>
          </div>
        </div>
        <resume-item2></resume-item2>
        <resume-item2></resume-item2>
        <resume-item2></resume-item2>
        <resume-item2></resume-item2>

        <el-pagination background @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="100" layout=" prev, pager, next,total, jumper" :total="400">
        </el-pagination>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import resumeItem2 from "@/components/resumeItem2";

export default {
  components: {
    resumeItem2
  },
  data() {
    return {
      currentPage2: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";

@import "../../styles/user.scss";

.rome-warp {
  width: 100%;
  background-color: #f5f5f5;
}
.rome {
  width: 1201px;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  .sidebar {
    float: left;
    width: 253px;
    background-color: #fff;
    ul {
      background-color: #f5f5f5;
      li {
        display: block;
        background-color: #fff;
        height: 57px;
        line-height: 57px;
        font-size: 16px;
        color: #333;
      }
      .user-menu {
        padding-left: 79px;
        cursor: pointer;
        position: relative;
        &.active:after {
          position: absolute;
          content: "";
          top: 10px;
          bottom: 10px;
          left: 0;
          width: 4px;
          background-color: #f07026;
        }
        &:hover:after {
          position: absolute;
          content: "";
          top: 10px;
          bottom: 10px;
          left: 0;
          width: 4px;
          background-color: #f07026;
        }
      }
      .user-info {
        width: 253px;
        height: 223px;
        margin-bottom: 10px;
        text-align: center;
        padding-top: 19px;
        h1 {
          margin: 14px 0 10px;
          font-size: 18px;
          color: #333;
        }
        .user-tag {
          font-size: 16px;
          color: #333;
        }
        .score {
          color: #f07026;
          margin-right: 5px;
        }
        .icon-evaluate {
          vertical-align: top;
        }
        .user-phone {
          height: 94px;
          width: 94px;
        }
      }
    }
  }
  .rome-main {
    margin-left: 271px;
  }
}

.icon-evaluate {
  display: inline-block;
  width: 44px;
  height: 22px;
  line-height: 22px;
  background-color: #e73802;
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 12px;
}

.ranking-icon {
  display: inline-block;
  width: 28px;
  height: 25px;
  background-image: url("../../assets/index/ranking.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.rome-main {
  .page-header {
    color: #333;
    font-size: 18px;
  }
  .search-warp {
    width: 100%;
    background-color: #fff;
    padding: 20px 41px 22px;
    margin-top: 18px;
    .search-main {
      width: 547px;
    }
  }
}
.resume-main-warp {
  float: left;
}
.resume-introduce {
  float: right;
}
</style>
