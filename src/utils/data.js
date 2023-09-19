import * as echarts from 'echarts'

//主页降雨
export const homeChartOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      color: '#fff'
    }
  },
  grid: {
    top: '20%',
    left: '0%',
    right: '20%',
    bottom: '0%'
    // containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // interval:4,  //标签之间的间隙
      axisLabel: {
        color: 'rgba(154,174,212,0.7)',
        show: false,
        // height: "15px",

        fontSize: '12px'
      },
      // splitLine: {
      //   show: false,
      // },
      boundaryGap: false,
      data: ['0点', '4点', '8点', '12点', '16点', '20点', '24点']
    }
  ],

  yAxis: [
    {
      type: 'value',
      name: '',
      min: function (value) {
        return Math.floor(value.min - 10)
      },
      nameGap: '0',
      axisLabel: {
        color: 'rgba(154,174,212,0.7)',
        show: false,
        // height: "15px",

        fontSize: '12px'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        //坐标轴样式 延伸线
        // 0.4px dashed ;
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(216, 216, 216, 0.2)',
          width: 0.5
        }
      }
    }
  ],
  dataZoom: [
    // {
    //   type: 'slider',
    //   show: true,
    //   start: 94,
    //   end: 100,
    //   handleSize: 8
    // },
    {
      type: 'inside',
      start: 0,
      end: 100
    }
    // {
    //   type: 'slider',
    //   show: true,
    //   yAxisIndex: 0,
    //   filterMode: 'empty',
    //   width: 12,
    //   height: '70%',
    //   handleSize: 8,
    //   showDataShadow: false,
    //   left: '93%'
    // }
  ],
  series: [
    {
      name: '日',
      type: 'line',
      step: 'middle',
      smooth: false, //是否平滑
      showSymbol: true,
      showAllSymbol: true,
      symbolOffset: [0, '-50%'],
      symbol: 'image://./bg44.png',
      // symbol: 'circle',
      symbolSize: (value, ind, params) => {
        // 最后一个数据 突出展示
        console.log(this)
        console.log(value, ind, params)
        if (6 == ind.dataIndex) {
          return [75, 42]
          // return 15
        } else {
          return 0
        }
      },
      lineStyle: {
        // show: false,
        //   color: "#00ca95",
        color: 'rgba(216,216,216,0.5)'
        // lineGradient: [0, 1, 1, 1, 1, 1]
      },
      lineStyle: {
        color: 'rgba(0,123,255,0.5)',
        width: 1.5,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: 'rgba(59,255,167,0.2)'
          },
          {
            offset: 1,
            color: 'rgba(59,255,167,1)'
          }
        ]),
        shadowColor: 'rgba(0,123,255, 1)',
        shadowBlur: 3,
        shadowOffsetY: -1
      },
      itemStyle: {
        color: 'rgb(0,123,255)',
        borderColor: 'rgb(0,123,255)'
      },
      // label: {
      //   show: true,
      //   position: 'top',
      //   formatter: (params) => {
      //     console.log(params)
      //     if (params.dataIndex == 2) {
      //       return '2'
      //     } else {
      //       return ''
      //     }
      //   },
      //   color: '#fff',
      //   align: 'center',
      //   lineHeight: 24,
      //   borderRadius: 2,
      //   fontSize: 75,
      //   backgroundColor: 'red'
      // },
      areaStyle: {
        // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        //   {
        //     offset: 0,
        //     color: 'rgba(10,28,68, 0)'
        //   },
        //   {
        //     offset: 0.4,
        //     color: 'rgba(10,28,68, 0.2)'
        //   },
        //   {
        //     offset: 0.5,
        //     color: 'rgba(59,255,167, 0.05)'
        //   },
        //   {
        //     offset: 0.7,
        //     color: 'rgba(59,255,167, 0.2)'
        //   },
        //   {
        //     offset: 0.8,
        //     color: 'rgba(59,255,167, 0.4)'
        //   },
        //   {
        //     offset: 1,
        //     color: '#3BFFA7'
        //   }
        // ])
        color: {
          image:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABhSURBVCiRldGhDYBAAEPR394el2Ax6Bvk9ro5GIC5EEgScIRgSL9snqsA+nqVutAozLySOE6zjUn7syUYwAnu61Wc4LrQnGAKsxMM4AQDOMEATrDEIT79/aIEj0m7EgxwA5q7UnIcmYWxAAAAAElFTkSuQmCC',
          repeat: 'repeat'
        }
      },
      data: [30, 10, 30, 32, 40, 19, 10]
    }
  ]
}
