<template>
  <el-dialog custom-class="region-dialog" @close="close" :close-on-click-modal="false" :lock-scroll="true" :show-close='true' v-if="visible" :visible.sync="visible">
    <p class="dialog-title" slot="title">选择城市
      <span>(暂时只支持中国内陆城市)</span>
    </p>
    <div class="options-main">
      <p class="options-title">最多选择 1 项
        <span class="options-selected">上海</span>
      </p>
      <p class="category1">
        <span>全国</span>
      </p>
      <div class="category1-item-warp">
        <div class="category1-item">
          <p class="category1-item-title">热门城市</p>
          <div class="category1-item-list">
            <p class="active">
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
          </div>
        </div>
        <div class="category1-item">
          <p class="category1-item-title">全部省份</p>
          <div class="category1-item-list">
            <p class="active">
              <span>广州</span>
            </p>
            <p>
              <span>江苏</span>
            </p>
            <p>
              <span>浙江</span>
            </p>
            <p>
              <span>安徽</span>
            </p>
            <p>
              <span>福建</span>
            </p>
            <p>
              <span>甘肃</span>
            </p>
            <p>
              <span>广西</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button>取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {
      visible: true
    };
  },
  watch: {
    dialogVisible: function(val) {
      this.visible = val;
    }
  },
  computed: {},
  methods: {
    //dialog关闭回调
    close() {
      this.$emit("closeCB", false);
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
/*
702*587
省市选择框
*/
.region-dialog {
  .options-main {
    height: 500px;
    // overflow-y: scroll;
    .options-title {
      font-size: 14px;
      color: #f07026;
      .options-selected {
        display: inline-block;
        background-color: #f07026;
        color: #fff;
        font-size: 14px;
        height: 27px;
        line-height: 27px;
        text-align: center;
        width: 64px;
        border-radius: 27px;
        margin-left: 10px;
      }
    }
    .category1 {
      overflow: hidden;
      margin-bottom: -1px;
      span {
        float: left;
        display: block;
        height: 34px;
        line-height: 34px;
        text-align: center;
        width: 94px;
        background-color: #fcfcfc;
        border: 1px solid #ddd;
        border-bottom: none;
        font-size: 14px;
        color: #333;
      }
    }
    .category1-item-warp {
      width: 100%;
      border: 1px solid #ddd;
      background-color: #fcfcfc;
      padding-top: 30px;
    }
    .category1-item {
      padding-bottom: 30px;
      &:first-of-type {
        padding-bottom: 10px;
      }
      .category1-item-title {
        padding: 0 40px 12px;
        display: inline-block;
        font-size: 14px;
        color: #333;
      }
      .category1-item-list {
        overflow: hidden;
        padding-left: 30px;
        p {
          display: block;
          float: left;
          width: 16.666%;
          padding-bottom: 10px;
          span {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 10px;
            color: #f07026;
          }
          &:hover {
            span {
              background-color: #fdd1b2;
            }
          }
          &.active {
            span {
              background-color: #f07026;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
