var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
var option = {
  xAxis: {
    type: 'category',
    // boundaryGap: [0, 0],
    data: ['8/20', '8/21', '8/22', '8/23', '8/24', '8/25', '8/26'],
    // 起点开始
    boundaryGap: false,
    // splitArea : {show : true}
    // 网格线
    splitLine: {
      show: true,
      lineStyle: {
        color: '#1e88e6',
        width: 1
      }
    },
    // x轴颜色
    axisLine: {
      lineStyle: {
        color: '#fff',
        width: 1, //这里是为了突出显示加上的  
      }
    },
    // 刻度消失
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0,
      // rotate: -30,
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  yAxis: [{
    type: 'value',
    show: false,
    offset: -30,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#1e88e6',
        width: 1
      }
    }
  }],
  // 填充
  grid: {
    top: 0,
    left: 20,
    right: 20,
    height: 127,
    containLabel: true
  },
  dataZoom: [{
    type: 'inside',
    throttle: 50
  }],
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
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#fff000'
          }, {
            offset: 1,
            color: 'rgba(0, 115, 224,0)'
          }])
        }
      },
      data: [
        ['8/20', 50],
        ['8/21', 40],
        ['8/22', 50],
        ['8/23', 60],
        ['8/24', 70],
        ['8/25', 80],
        ['8/26', 75],
        ['8/27', 85]
      ],
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
          color: 'rgba(253,253,253,1)'
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(253,253,253,0.6)'
          }, {
            offset: 1,
            color: 'rgba(253,253,253,0)'
          }])
        }
      },
      data: [
        ['8/20', 10],
        ['8/21', 20],
        ['8/22', 10],
        ['8/23', 30],
        ['8/24', 40],
        ['8/25', 30],
        ['8/26', 25],
        ['8/27', 15]
      ],
    }

  ]
};

myChart.setOption(option);