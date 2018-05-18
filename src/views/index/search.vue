<template>
    <div class="search-containter">
        <div class="search-type">
            <p class="active">职位</p>
            <p>公司</p>
        </div>
        <div class="search-main">
            <span class="svg-container ">
                <svg-icon icon-class="search" class="svg-container-search" />
            </span>
            <input class="search-word" type="text" placeholder='输入职位、公司等搜索'>
            <input class="search-btn btn" type="button" value='搜索'>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";
</style>
