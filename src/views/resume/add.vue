<template>
  <div>
    <el-button type="text" @click="toggleRegionVisible">打开嵌套表格的 Dialog</el-button>
    <multiple-options :defaultID="defaultID" :defaultName="defaultName" :dialogVisible='dialogRegionVisible' @closeCB='closeCB' @selectedOption='selectedRegion'></multiple-options>
    {{regionID}}{{regionName}}
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
      dialogRegionVisible: true,
      regionID: 0,
      regionName: "",
      defaultID: "1001",
      defaultName: "北京"
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
    },
    selectedRegion(data) {
      if (data) {
        this.regionID = data.id;
        this.regionName = data.name;
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
</style>
