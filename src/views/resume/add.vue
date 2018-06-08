<template>
  <div>
    <el-button type="text" @click="toggleRegionVisible">打开嵌套表格的 Dialog</el-button>
    <multiple-options v-if="dialogRegionVisible" :defaultID="defaultID" :defaultName="defaultName" :defaultPID="defaultPID" :defaultPName="defaultPName" :dialogVisible='dialogRegionVisible' @closeRegion='closeRegion' @selectedOption='selectedRegion'>

    </multiple-options>
    {{regionID}}--{{regionName}}--{{regionPID}}--{{regionPName}}
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
      regionPID: 0,
      regionPName: "",
      defaultID: "2002",
      defaultName: "无锡",
      defaultPID: "2000",
      defaultPName: "江苏"
    };
  },
  computed: {},
  created() {},
  methods: {
    toggleRegionVisible() {
      this.dialogRegionVisible = true;
    },
    closeRegion() {
      this.dialogRegionVisible = false;
    },
    selectedRegion(data) {
      if (data) {
        this.regionID = data.id;
        this.regionName = data.name;
        this.regionPID = data.pid;
        this.regionPName = data.pname;
        this.defaultID = data.id;
        this.defaultName = data.name;
        this.defaultPID = data.pid;
        this.defaultPName = data.pname;
      }
      this.dialogRegionVisible = false;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
@import "../../styles/multip-options.scss";
</style>
