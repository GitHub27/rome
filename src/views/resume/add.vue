<template>
    <div>
        <el-button type="text" @click="toggleRegionVisible">打开嵌套表格的 Dialog</el-button>
        <multiple-options :dialogVisible='dialogRegionVisible' @closeCB='closeCB'></multiple-options>
    </div>
</template>
<script>
import MultipleOptions from "../../components/dialog/MultipleOptions";
export default {
  components: {
    MultipleOptions
  },
  data() {
    return {
      dialogRegionVisible: true
    };
  },
  computed: {},
  created() {},
  methods: {
    toggleRegionVisible() {
      this.dialogRegionVisible = true;
    },
    closeCB(val) {
      console.log(val, 11);
      this.dialogRegionVisible = val;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
.region-dialog {
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
}
</style>
