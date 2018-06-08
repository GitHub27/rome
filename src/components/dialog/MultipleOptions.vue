<template>
  <el-dialog custom-class="region-dialog" @close="close" :close-on-click-modal="false" :lock-scroll="true" :show-close='true' v-if="visible" :visible.sync="visible">
    <p class="dialog-title" slot="title">选择城市
      <span>(暂时只支持中国内陆城市)</span>
    </p>
    <div class="options-main">
      <p class="options-title">最多选择 1 项
        <span class="options-selected" v-if="selectedName && !haschild">{{selectedName}}</span>
      </p>
      <p class="category1">
        <span :class="{inactive:showChildCategory}" @click="hideChildCategory">全国</span>
        <span v-if="showChildCategory">{{preSelectedParentName}}</span>
      </p>
      <div class="category1-item-warp">
        <div class="category1-item" :class="{'display-none':showChildCategory}">
          <p class="category1-item-title">热门城市</p>
          <div class="category1-item-list">
            <p class="active">
              <span :class="{'active':selectedID=='1001'}" @click="select('1001','北京')">北京</span>
            </p>
            <p>
              <span :class="{'active':selectedID=='1002'}" @click="select('1002','上海')">上海</span>
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
        <div class="category1-item" :class="{'display-none':showChildCategory}">
          <p class="category1-item-title">全部省份</p>
          <div class="category1-item-list province">
            <p>
              <span :class="{'active':selectedID=='2000' ,'active-self':selectedParentID=='2000'}" @click="selectParent('2000','江苏')">
                江苏
              </span>
              <i>1</i>
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
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
          </div>
        </div>
        <div class="category1-item category2" :class="{'display-none':!showChildCategory}">
          <p class="category1-item-title  theme-color" @click="select('2000','江苏')">{{preSelectedParentName}}</p>
          <div class="category1-item-list">
            <p class="active">
              <span :class="{'active':selectedID=='2001'}" @click="select('2001','南京','2000')">南京</span>
            </p>
            <p>
              <span :class="{'active':selectedID=='2002'}" @click="select('2002','无锡','2000')">无锡</span>
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
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary">确 定</el-button>
      <el-button plain>取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    defaultID: "",
    defaultName: ""
  },
  components: {},
  data() {
    /*
      思路：
      子级点击事件带上父级id
      父级显示的时候检查是否有子级被选中
      选中则显示1
      父级也可以被直接选中，则显示另一种选中状态
      1:选中子级，热门也要选中
      id是相同的，这个不是问题

      2：父级的两种选中状态
      用两个id来判断

      3：默认的选中props
      热门好说
      如果是省份或者城市
      那就也定义默认的省份和市
      如果是城市，肯定有省
      如果是省，没有市

      4.还要点全国，省消失的功能


    */
    return {
      visible: true,
      selectedID: 0, //选中项ID,可以理解为最终的选项，可以为子选项，可以为父选项
      selectedName: "", //选中项name
      selectedParentID: 0, //选中的父级id
      selectedParentName: 0, //选中的父级Name
      preSelectedParentID: 0, //选中的父级id
      preSelectedParentName: 0, //选中的父级Name
      haschild: false, //是否包含子选项
      showChildCategory: false //展示子菜单
    };
  },
  watch: {
    dialogVisible: function(val) {
      this.visible = val;
    }
  },
  computed: {},
  methods: {
    /*dialog关闭回调*/
    close() {
      this.$emit("closeCB", false);
    },
    /**
      选中热门选型/子选项
      id:子选项id
      name:子选项name
      haschild：是否包含子选项
     */
    select(id, name, parentid, parentname) {
      this.selectedID = id;
      this.selectedName = name;
      if (parentid) {
        this.selectedParentID = parentid;
        this.selectedParentName = parentname;
      } else {
        this.selectedParentID = 0;
        this.selectedParentName = "";
      }

      this.showChildCategory = false;
      this.$emit("selectedOption", { id: id, name: name });
      console.log("this.showChildCategory:", this.showChildCategory);
    },
    /**
      父级选项
     */
    selectParent(id, name, selected) {
      if (selected) {
        this.selectedParentID = id;
        this.selectedParentName = name;
      } else {
        this.preSelectedParentID = id;
        this.preSelectedParentName = name;
      }
      //TODO 添加显示子选项的内容
      this.showChildCategory = true;
    },
    /**
      切换显示子选项
     */
    hideChildCategory() {
      this.showChildCategory = false;
    }
  },
  created() {
    if (this.defaultID) {
      this.selectedID = this.defaultID;
    }
    if (this.defaultName) {
      this.selectedName = this.defaultName;
    }
  },
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
  width: 702px;
  // height: 587px;
  .el-dialog__header {
    border-bottom: 1px solid #ddd;
  }
  .dialog-title {
    font-size: 16px;
    color: #333;
    span {
      font-size: 14px;
      color: #999;
    }
  }
  .dialog-footer {
    text-align: center;
  }
  .options-main {
    // height: 500px;
    // overflow-y: scroll;
    .options-title {
      font-size: 14px;
      color: #f07026;
      height: 27px;
      line-height: 27px;
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
      cursor: pointer;
      span {
        float: left;
        display: block;
        height: 34px;
        line-height: 34px;
        text-align: center;
        width: 94px;
        background-color: #fcfcfc;
        border: 1px solid #ddd;
        border-bottom: 1px solid transparent;
        font-size: 14px;
        color: #333;
        &.inactive {
          border: 1px solid #ddd;
          border-right: 1px solid transparent;
        }
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
        font-weight: 600;
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
            cursor: pointer;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 10px;
            color: #f07026;
          }
          span:hover {
            background-color: #fdd1b2;
          }
          span.active {
            background-color: #f07026;
            color: #fff;
          }
        }
        &.province {
          p {
            i {
              display: none;
            }
            span.active-self {
              color: #f07026;
              background-color: transparent;
              & + i {
                font-style: normal;
                display: inline-block;
                color: #fff;
                text-align: center;
                height: 14px;
                line-height: 14px;
                width: 14px;
                background-color: #f07026;
                font-size: 12px;
                margin-left: -5px;
              }
            }
          }
        }
      }
    }

    .category2 {
    }
  }
}
</style>
