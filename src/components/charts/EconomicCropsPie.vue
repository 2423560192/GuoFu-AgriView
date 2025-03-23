<template>
  <div class="chart-wrapper">
    <div class="year-tabs">
      <div 
        v-for="year in years" 
        :key="year" 
        :class="['year-tab', { active: currentYear === year }]" 
        @click="currentYear = year"
      >
        {{ year }}年
      </div>
    </div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'EconomicCropsPie',
  data() {
    return {
      chart: null,
      currentYear: '2024',
      years: ['2024', '2023', '2022', '2021'],
      pieData: {
        '2024': [
          { name: '油料', value: 12.74 },
          { name: '烟叶', value: 1.73 },
          { name: '中草药材', value: 11.55 },
          { name: '蔬菜及食用菌', value: 63.39 },
          { name: '瓜果', value: 3.25 },
          { name: '其他农作物', value: 7.26 },
          { name: '食用坚果', value: 0.08 }
        ],
        '2023': [
          { name: '油料', value: 12.58 },
          { name: '烟叶', value: 1.77 },
          { name: '中草药材', value: 11.45 },
          { name: '蔬菜及食用菌', value: 63.99 },
          { name: '瓜果', value: 2.26 },
          { name: '其他农作物', value: 7.87 },
          { name: '食用坚果', value: 0.08 }
        ],
        '2022': [
          { name: '油料', value: 35.48 },
          { name: '烟叶', value: 5.38 },
          { name: '中草药材', value: 35.33 },
          { name: '其他农作物', value: 23.81 }
        ],
        '2021': [
          { name: '油料', value: 13.60 },
          { name: '烟叶', value: 2.07 },
          { name: '中草药材', value: 13.61 },
          { name: '蔬菜及食用菌', value: 70.72 }
        ]
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
    }
  },
  watch: {
    currentYear() {
      this.updateChart()
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      this.updateChart()
    },
    updateChart() {
      const option = {
        title: {
          text: `${this.currentYear}年各类经济作物面积占比`,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 12
          }
        },
        series: [
          {
            name: '面积占比',
            type: 'pie',
            radius: ['35%', '70%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            labelLine: {
              show: false
            },
            data: this.pieData[this.currentYear]
          }
        ],
        color: ['#f9c74f', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1', '#f94144']
      }
      this.chart.setOption(option, true)
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
  padding: 0 10px;
}

.year-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.year-tab {
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  margin: 0 5px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.year-tab:hover {
  color: #fff;
  background: rgba(76, 213, 206, 0.1);
}

.year-tab.active {
  color: #4cd5ce;
  font-weight: bold;
  border: 1px solid rgba(76, 213, 206, 0.5);
}

.chart {
  flex: 1;
}
</style> 