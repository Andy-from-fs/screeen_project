<!--
Description
@authors Your Name (you@example.org)
@date    2017-09-05 16:25:16
@version 1.0.0
-->
<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script>
  import $ from 'jquery'
  let Highcharts = require('highcharts');

  // 在 Highcharts 加载之后加载功能模块
  require('highcharts/modules/exporting')(Highcharts);
  export default {
    name: 'chart',
    data() {
      return {}
    },
    methods: {
      testJQ() {
        $('#chart').css('color', '#282828');
      },
      initChart() {
        $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
          Highcharts.chart('chart',{
            chart: {
              zoomType: 'x'
            },
            title: {
              text: null
            },
            subtitle: {
              text: document.ontouchstart === undefined ?
                '鼠标拖动可以进行缩放' : '手势操作进行缩放'
            },
            xAxis: {
              type: 'datetime',
              dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y'
              }
            },
            tooltip: {
              dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y'
              }
            },
            yAxis: {
              title: {
                text: '汇率'
              }
            },
            legend: {
              enabled: false
            },
            plotOptions: {
              area: {
                fillColor: {
                  linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                  },
                  stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
                },
                marker: {
                  radius: 2
                },
                lineWidth: 1,
                states: {
                  hover: {
                    lineWidth: 1
                  }
                },
                threshold: null
              }
            },
            series: [{
              type: 'area',
              name: '美元兑欧元',
              data: data
            }]
          });
        });
      }
    },
    mounted() {
      this.initChart();
    }
  }
</script>

<style lang="scss">
  #chart{
    background-color: transparent;
  }
  .highcharts-background{
    fill:transparent!important;
  }
</style>