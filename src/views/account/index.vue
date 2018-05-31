<template>
  <div class="rome-warp">
    <div class="rome">
      <side-menu></side-menu>
      <div class="rome-main">
        <h2 class="page-header blpl">我的账户</h2>
        <div class="rome-amount-warp">
          <div>
            <p class="ra-title">
              当前可用ROME币
              <i class="icon-tip"></i>
            </p>
            <p>
              <i class="icon-r"></i>

              <span class="rome-num-big">
                3,012
              </span>
              <span class="fs14">
                兑换现金
              </span>
            </p>
          </div>
          <div>
            <p class="ra-title">
              昨日收益
              <i class="icon-tip"></i>
            </p>
            <p>
              <i class="icon-r"></i>

              <span class="rome-num-big theme-color">
                3,012
              </span>
            </p>
          </div>
          <div>
            <p class="ra-title">累计ROME币收益
              <i class="icon-tip"></i>
            </p>
            <p>
              <i class="icon-r"></i>
              <span class="rome-num-big theme-color">
                3,012
              </span>
            </p>
          </div>
          <p class="rome-amount-footer text-r fs14 color333">
            <span>
              ROME赠送
              <i class="rome-num-normal">￥100</i>
            </span>
            <span>
              可用现金
              <i class="rome-num-big">￥2,188</i>
            </span>
            <span>
              提 现
            </span>
          </p>
        </div>
        <div id="echarts-warp" style="width: 600px;height:400px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/Sidemenu/index";

import echarts from "../../../static/echarts.min.js";
export default {
  components: {
    SideMenu
  },
  data() {
    return {};
  },
  mounted: function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts-warp"));

    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        type: "category",
        data: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07"],
        position: "bottom",
        offset: 5,
        name: "日期",
        nameLocation: "end",
        axisTick: {
          show: false
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        },
        label: {
          show: true
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          symbol: ["none", "arrow"],
          symbolSize: [6, 12]
        },
        axisTick: {
          show: false
        },
        name: "R",
        nameLocation: "end",
        nameTextStyle: {
          rich: {},
          backgroundColor:
            // '#123234',
            {
              image:
                "data:image/Png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALASURBVFhH5ZY7cuMwDIZ9qa1UuvExdIF0PkB8gsy4cZPRBeLSjSqnywF0gTTpt9yOyxcogARImpJ37NniG49FEI8fIKXN7z9KPTPTNBE4mxyrC9CaSCu4+Ja4Ty/AUu5yBJ5JhP9KAC6vJgEepsCfd7V93aiN4fSuJs4GsVgAcMA5+rdc1QsUTtirC2svIwrAFWn+j+fOB9up4w/dsxxf2MeVWfPgrnPk9jLUCzDt+YBVQlzVZaLPWIE/d96n3MnLB4qtx/4S9gDzXi5GTN0REIsHcqP3rY4nbOf+d+cxSg7ZiV3EvgxGfO6Zs48F4ASpEACdN5SYdTb2c2Ap6dzI4j3I7gVNS5w0mQDwgRskitcqQHDOd3lOKDcFOngyqtEeIc547tXhCyVdnEZPxVvBsKIAtHMxiQBvB5JgWDeJC1Oz/fy2HRyGdI3D2OMcOMoCoGSwQztO+AgYpPFLutarIRpFfkJS+tGNcRJbn/0tuQvcs9IFbQXgzsYMvWSgy2wX0NgFn0k3aVJgxwlgirV22AfEiP3a58z3gW5KyMXHxFQIoBFG0qIDH+EYJAIMSULxMQmxyZR0SedmgUDAq+qDvcP4ToXc22mT6isfAc/0dVAdcayxI48m5PRL/7oEp2lUhzdkG+x5/0TkYciuy1No7qn4tTjfXUFs8KmpF0BUUfosjUDTITFfqMzZDQKgtdxkAkh0UQBY4AvMQ0dz4Tc6KQjvwVNGhcxfnuW4iQA3iYDPbVBa/jLLEeJnC+J8xfE8Pp9cTeY5OQI54wSxWw76xZYXAeJCbF6EkpBu+sRLFj3Da8U7QHIwF9jRLzVM4WYHcknem2YBnOI7W3w2eT0p5u0R3ukPRlEAjpqO1dg8AjfdAbBesjPU2LSwtt8mAbi1W1jih9u7xN9NAqzFmnHAV6u/pjvgHkhFlIorredR6i9nc/ZQiMngsAAAAABJRU5ErkJggg=="
            },
          width: 94,
          height: 46
        }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          showAllSymbol: false
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  //   destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";

@import "../../styles/user.scss";
</style>
