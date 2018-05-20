<template>
  <el-carousel :interval="10000" arrow="always">
    <el-carousel-item v-for="(item,index) in listFilter" :key="index">
      <a :href='item.link'>
        <img :src="item.img" alt="">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  components: {},
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  //   watch: {},
  computed: {
    listFilter() {
      let filter = this.list.filter(item => {
        if (item && item.img) {
          return true;
        }
        return false;
      });
      return filter;
    }
  }
  //   methods: {}
  //   created() {},
  //   mounted() {},
  //   destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
//TODO:这种写法，样式文件打包到哪里了？
.el-carousel {
  float: left;
  display: block;
}
.el-carousel__container {
  width: 783px;
  height: 422px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  //   line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
</style>
