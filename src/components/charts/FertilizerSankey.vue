<template>
  <div class="chart-wrapper">
    <div class="chart-title">2021-2024年各类化肥使用量流向图</div>
    <div ref="chart" class="chart-container"></div>
  </div>
</template>

<script>
export default {
  name: 'FertilizerSankey',
  data() {
    return {
      chart: null,
      fertilizerData: {
        '2021': {
          '氮肥': 1006.98,
          '磷肥': 591.99,
          '钾肥': 158.00,
          '复合肥': 620.84
        },
        '2022': {
          '氮肥': 2508.65,
          '磷肥': 5608.58,
          '钾肥': 301.95,
          '复合肥': 1755.43
        },
        '2023': {
          '氮肥': 2500.03,
          '磷肥': 3670.31,
          '钾肥': 285.05,
          '复合肥': 1505.02
        },
        '2024': {
          '氮肥': 2498.20,
          '磷肥': 3676.38,
          '钾肥': 285.80,
          '复合肥': 1515.63
        }
      }
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      
      // 准备桑基图的节点和链接数据
      const years = ['2021', '2022', '2023', '2024']
      const fertilizerTypes = ['氮肥', '磷肥', '钾肥', '复合肥']
      
      let nodes = []
      let links = []
      
      // 添加年份节点
      years.forEach(year => {
        nodes.push({
          name: year + '年',
          itemStyle: {
            color: '#f9c74f'
          }
        })
      })
      
      // 添加肥料类型节点
      fertilizerTypes.forEach(type => {
        nodes.push({
          name: type,
          itemStyle: {
            color: this.getFertilizerColor(type)
          }
        })
      })
      
      // 添加连接
      for (let i = 0; i < years.length - 1; i++) {
        const currentYear = years[i]
        const nextYear = years[i + 1]
        
        fertilizerTypes.forEach(type => {
          links.push({
            source: currentYear + '年',
            target: nextYear + '年',
            value: this.fertilizerData[currentYear][type],
            lineStyle: {
              color: this.getFertilizerColor(type),
              opacity: 0.3
            }
          })
        })
      }
      
      // 从最后一年连接到化肥类型
      fertilizerTypes.forEach(type => {
        links.push({
          source: '2024年',
          target: type,
          value: this.fertilizerData['2024'][type],
          lineStyle: {
            color: this.getFertilizerColor(type),
            opacity: 0.7
          }
        })
      })
      
      const option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: params => {
            if (params.dataType === 'edge') {
              return `${params.data.source} -> ${params.data.target}: ${params.data.value.toFixed(2)} 吨`
            }
            return params.name
          }
        },
        series: [
          {
            type: 'sankey',
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '5%',
            emphasis: {
              focus: 'adjacency'
            },
            nodeAlign: 'left',
            layoutIterations: 0,
            draggable: false,
            label: {
              color: '#fff',
              position: 'right',
              fontSize: 12
            },
            lineStyle: {
              color: 'gradient',
              curveness: 0.5
            },
            data: nodes,
            links: links
          }
        ]
      }
      
      this.chart.setOption(option)
    },
    getFertilizerColor(type) {
      const colorMap = {
        '氮肥': '#f94144',
        '磷肥': '#f3722c',
        '钾肥': '#90be6d',
        '复合肥': '#43aa8b'
      }
      
      return colorMap[type] || '#f9c74f'
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
}

.chart-title {
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
  flex-shrink: 0;
}

.chart-container {
  flex: 1;
  width: 100%;
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 12px;
  }
}
</style> 