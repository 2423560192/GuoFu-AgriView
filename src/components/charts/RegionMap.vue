<template>
  <div class="chart-wrapper">
    <div class="chart-title">郭扶镇行政区划图</div>
    <div class="chart-loading" v-if="loading">
      <div class="loading-spinner"></div>
      <div>加载中...</div>
    </div>
    <div ref="chart" class="chart" :class="{ 'is-loading': loading }"></div>
  </div>
</template>

<script>
import { economicCropsData } from '../../data/agricultural-data.js'

export default {
  name: 'RegionMap',
  data() {
    return {
      chart: null,
      loading: true
    }
  },
  mounted() {
    // 模拟加载延迟
    setTimeout(() => {
      this.loading = false
      this.$nextTick(() => {
        this.initChart()
      })
    }, 800)
    
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (this.chart) {
      this.chart.dispose()
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      
      const option = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>面积: {c}亩',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderColor: 'rgba(76, 213, 206, 0.3)',
          borderWidth: 1,
          textStyle: {
            color: '#fff'
          }
        },
        visualMap: {
          min: 0,
          max: 5000,
          text: ['高', '低'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#43aa8b', '#4cd5ce', '#277da1']
          },
          textStyle: {
            color: '#fff'
          },
          left: 'left',
          bottom: 10
        },
        series: [
          {
            name: '郭扶镇',
            type: 'map',
            map: 'guofu',
            roam: true,
            zoom: 1,
            center: [100, 100],
            aspectScale: 1,
            selectedMode: false,
            label: {
              show: true,
              color: '#fff',
              fontSize: 12,
              fontWeight: 'bold',
              textShadow: [2, 2, 5, 'rgba(0, 0, 0, 0.8)']
            },
            itemStyle: {
              areaColor: '#43aa8b',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1
            },
            emphasis: {
              label: {
                show: true,
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold'
              },
              itemStyle: {
                areaColor: '#f9c74f',
                borderColor: '#fff',
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
              }
            },
            data: economicCropsData.villageData2024.map(item => ({
              name: item.village,
              value: item.area
            }))
          }
        ],
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicOut'
      }
      
      const radius = 80
      const centerOffset = 120
      this.$echarts.registerMap('guofu', {
        type: 'FeatureCollection',
        features: economicCropsData.villageData2024.map((item, index) => {
          const angle = (index * Math.PI * 2) / economicCropsData.villageData2024.length
          const centerX = Math.cos(angle) * radius + centerOffset
          const centerY = Math.sin(angle) * radius + centerOffset
          
          return {
            type: 'Feature',
            properties: { name: item.village },
            geometry: {
              type: 'Polygon',
              coordinates: [this.createPolygon(centerX, centerY, 25 + Math.random() * 15)]
            }
          }
        })
      })
      
      this.chart.setOption(option)
    },
    createPolygon(centerX, centerY, radius) {
      const points = []
      const count = 6 + Math.floor(Math.random() * 3)
      
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const r = radius * (0.85 + Math.random() * 0.3)
        points.push([
          centerX + Math.cos(angle) * r,
          centerY + Math.sin(angle) * r
        ])
      }
      
      points.push([...points[0]])
      return points
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
  position: relative;
}

.chart-title {
  font-size: 16px;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  text-shadow: 0 0 5px rgba(76, 213, 206, 0.5);
}

.chart {
  flex: 1;
  transition: opacity 0.3s ease;
}

.chart.is-loading {
  opacity: 0;
}

.chart-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  z-index: 10;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(76, 213, 206, 0.3);
  border-radius: 50%;
  border-top-color: #4cd5ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style> 