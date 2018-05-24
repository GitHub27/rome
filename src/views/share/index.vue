<template>
    <div class="rome-warp">
        <div class="rome">
            <!-- <side-menu></side-menu> -->
            <div class="rome-main ml0">
                <h2 class="page-header blpl">xxxxxxxxxxxx</h2>
                <div class="search-warp">
                    <div class="search-main">
                        <span class="svg-container ">
                            <svg-icon icon-class="search" class="svg-container-search" />
                        </span>
                        <input class="search-word" type="text" placeholder='姓名/公司/职位'>
                        <input class="search-btn btn" type="button" value='搜索'>
                    </div>
                </div>
                <resume-item3></resume-item3>
                <resume-item3></resume-item3>
                <resume-item3></resume-item3>
                <resume-item3></resume-item3>

                <el-pagination class="rome-pagination" background @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="100" layout=" prev, pager, next,total, jumper" :total="400">
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
import resumeItem3 from "@/components/resumeItem3";
import SideMenu from "@/components/Sidemenu/index";

export default {
  components: {
    resumeItem3,
    SideMenu
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
//TODO:样式引用比较乱，待整理
@import "../../styles/home.scss";

@import "../../styles/user.scss";
</style>
