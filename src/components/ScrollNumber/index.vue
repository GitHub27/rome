<template>
    <div>
        <p class="scroll-warp" ref="scrollWarp">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
        </p>
        <span v-for="(item,index) in numbersArray" :key="index">
            {{item}}
        </span>
    </div>
</template>

<script>
export default {
  name: "ScrollNumber",
  props: {
    numbers: {
      required: true,
      default: "0000",
      type: [String, Number]
    }
  },
  components: {},
  data() {
    return {
      from: 5,
      to: 0
    };
  },
  watch: {},
  computed: {
    fromEx: function() {
      return Number(this.from + 1);
    },
    toEx: function() {
      return Number(this.to + 1);
    },
    numbersArray() {
      return (this.numbers + "").split("");
    }
  },
  methods: {
    scroll(totalRange) {
      let scrollRange = 0;
      let _interval = setInterval(() => {
        let scrollWarp = this.$refs.scrollWarp;
        let scrollTop = scrollWarp.scrollTop;
        let scrollItemHeight = scrollWarp.clientHeight;
        let scrollHeight = scrollItemHeight * 9;
        console.log(
          scrollWarp.scrollTop,
          scrollHeight,
          scrollRange,
          totalRange
        );
        if (scrollWarp.scrollTop == scrollHeight) {
          scrollWarp.scrollTop = 0;
        } else {
          scrollWarp.scrollTop++;
        }
        scrollRange++;
        if (scrollRange >= totalRange) {
          clearInterval(_interval);
        }
      }, 10);
    }
  },
  created() {},
  mounted() {
    let scrollWarp = this.$refs.scrollWarp;
    let scrollTop = scrollWarp.scrollTop;
    let scrollItemHeight = scrollWarp.clientHeight;
    let scrollHeight = scrollItemHeight * 9;
    //转换

    //显示默认位置
    scrollWarp.scrollTop = scrollItemHeight * this.fromEx;
    //差值
    let diff = this.toEX - this.fromEx;
    let totalRange = 0;
    if (diff < 0) {
      totalRange = (10 - this.fromEx + this.toEx) * scrollItemHeight;
    } else {
      totalRange = diff * scrollItemHeight;
    }
    //this.scroll(totalRange);
  },
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-warp {
  display: inline-block;
  width: 50px;
  height: 30px;
  overflow: hidden;
  span {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #e5e5e5;
  }
}
</style>
