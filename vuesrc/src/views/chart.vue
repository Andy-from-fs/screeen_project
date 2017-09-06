<!--
Description
@authors Andy
@date    2017-09-05 16:25:16
@version 1.0.0
-->
<template>
  <div>
    <div id="chart" style="width: 600px;height:400px;" ref="charts"></div>
  </div>
</template>

<script>
  import $ from 'jquery'

  import ECharts from 'echarts';
  export default {
    name: 'myChart',
    data() {
      return {
        dataX: ['', '1月', '2月', '3月', '4月', '6月', '7月', ''],
        data1: [50, 40, 50, 60, 70, 80, 75, 85],
        data2: [10, 15, 17, 20, 29, 35, 40, 48]
      }
    },
    methods: {
      testJQ() {
        $('#chart').css('color', '#282828');
      },
      initEchart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = ECharts.init(this.$refs.charts);
        // 绘制图表
        let option = {
          xAxis: {
            type: 'category',
            data: this.dataX,
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1e88e6',
                width: 1
              }
            },
            // 刻度消失
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
          },
          yAxis: {
            type: 'value',
            offset: 20,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1e88e6',
                width: 1
              }
            },
          },
          grid: {
            top: 110,
            left: 15,
            right: 15,
          },
          series: [{
              name: '模拟数据',
              type: 'line',
              smooth: true,
              stack: 'a',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: '#ffff00'
                }
              },
              areaStyle: {
                normal: {
                  color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff000'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 115, 224,0)'
                  }])
                }
              },
              data: this.data1
            },
            {
              name: '模拟数据',
              type: 'line',
              smooth: true,
              stack: 'b',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: '#ffffff'
                }
              },
              areaStyle: {
                normal: {
                  color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ffffff'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 115, 224,0)'
                  }])
                }
              },
              data: this.data2
            }

          ]
        };

        myChart.setOption(option);
        return myChart;
      }
    },
    mounted() {
      console.log(this.initEchart());
    }
  }
</script>

<style lang="scss">
  // #chart {
  //   background-color: transparent;
  // }
  // .highcharts-background {
  //   fill: transparent!important;
  // }
</style>