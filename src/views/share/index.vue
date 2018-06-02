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
        <ul class="search-condition">
          <li>
            <h3>共享日期:</h3>
            <p class="con-item">
              <span @click="toggle('date',0)" :class="{active:date==0}">所有</span>
              <span @click="toggle('date',1)" :class="{active:date==1}">1天以内</span>
              <span @click="toggle('date',2)" :class="{active:date==2}">3天以内</span>
              <span @click="toggle('date',3)" :class="{active:date==3}">1周以内</span>
              <span @click="toggle('date',4)" :class="{active:date==4}">1月以内</span>
              <span @click="toggle('date',5)" :class="{active:date==5}">超过1个月</span>
            </p>
          </li>
          <li>
            <h3>目标公司:</h3>
            <div class="con-item">
              <input type="text" placeholder="输入该人才期望加入的目标公司" />
              <h3 class="con-item-title">目标岗位:</h3>
              <input type="text" placeholder="输入该人才期望的目标岗位" />
            </div>
          </li>
          <li>
            <h3>最高学历:</h3>
            <p class="con-item">
              <span @click="toggle('record',0)" :class="{active:record==0}">所有</span>
              <span @click="toggle('record',1)" :class="{active:record==1}">中专</span>
              <span @click="toggle('record',2)" :class="{active:record==2}">大专</span>
              <span @click="toggle('record',3)" :class="{active:record==3}">本科</span>
              <span @click="toggle('record',4)" :class="{active:record==4}">硕士</span>
              <span @click="toggle('record',5)" :class="{active:record==5}">博士</span>
              <span @click="toggle('record',6)" :class="{active:record==6}">MBA</span>
            </p>
          </li>
          <li>
            <h3>当年薪酬:</h3>
            <p class="con-item">
              <span @click="toggle('salary',0)" :class="{active:salary==0}">所有</span>
              <span @click="toggle('salary',1)" :class="{active:salary==1}">&lt; 10万 </span>
              <span @click="toggle('salary',2)" :class="{active:salary==2}">10～20万</span>
              <span @click="toggle('salary',3)" :class="{active:salary==3}">20～30万</span>
              <span @click="toggle('salary',4)" :class="{active:salary==4}">30～40万</span>
              <span @click="toggle('salary',5)" :class="{active:salary==5}">50～70万</span>
              <span @click="toggle('salary',6)" :class="{active:salary==6}">70～100万</span>
              <span @click="toggle('salary',7)" :class="{active:salary==7}">&gt; 100万</span>
            </p>
          </li>
          <li>
            <h3>工作年限:</h3>
            <p class="con-item">
              <span @click="toggle('year',0)" :class="{active:year==0}">所有</span>
              <span @click="toggle('year',1)" :class="{active:year==1}">&lt; 1年</span>
              <span @click="toggle('year',2)" :class="{active:year==2}">1～3年</span>
              <span @click="toggle('year',3)" :class="{active:year==3}">3～5年</span>
              <span @click="toggle('year',4)" :class="{active:year==4}">5～10年</span>
              <span @click="toggle('year',5)" :class="{active:year==5}">&gt; 10年</span>
            </p>
          </li>
        </ul>
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
      currentPage4: 4,
      date: 0,
      record: 0,
      salary: 0,
      year: 0
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toggle(type, index) {
      this[type] = index;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
//TODO:样式引用比较乱，待整理
@import "../../styles/home.scss";

@import "../../styles/user.scss";
</style>
