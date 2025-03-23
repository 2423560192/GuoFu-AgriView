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
      fertilizers: ['氮肥', '磷肥', '钾肥', '复合肥'],
      years: ['2021年', '2022年', '2023年', '2024年'],
      fertilizerData: {
        '氮肥': [1006.98, 2508.65, 2500.03, 2498.20],
        '磷肥': [591.99, 5608.58, 3670.31, 3676.38],
        '钾肥': [158.00, 301.95, 285.05, 285.80],
        '复合肥': [620.84, 1755.43, 1505.02, 1515.63]
      },
      colors: {
        '氮肥': '#4cd5ce',
        '磷肥': '#43aa8b',
        '钾肥': '#f9c74f', 
        '复合肥': '#f94144'
      }
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart);
      this.updateChart();
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize();
      }
    },
    updateChart() {
      // 构建桑基图所需的节点和链接数据
      const nodes = [];
      const links = [];
      
      // 生成所有节点（年份+肥料类型）
      this.years.forEach((year, yearIndex) => {
        this.fertilizers.forEach((fertilizer) => {
          nodes.push({
            name: `${year}-${fertilizer}`,
            value: this.fertilizerData[fertilizer][yearIndex],
            itemStyle: {
              color: this.colors[fertilizer]
            }
          });
        });
      });
      
      // 生成年份之间的链接
      for (let yearIndex = 0; yearIndex < this.years.length - 1; yearIndex++) {
        this.fertilizers.forEach((fertilizer) => {
          const source = `${this.years[yearIndex]}-${fertilizer}`;
          const target = `${this.years[yearIndex + 1]}-${fertilizer}`;
          const value = this.fertilizerData[fertilizer][yearIndex + 1];
          
          links.push({
            source,
            target,
            value,
            lineStyle: {
              color: this.colors[fertilizer],
              opacity: 0.7
            }
          });
        });
      }
      
      const option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: '{b}: {c} 吨'
        },
        series: [{
          type: 'sankey',
          left: 50,
          right: 50,
          data: nodes,
          links: links,
          nodeAlign: 'justify',
          orient: 'horizontal',
          draggable: false,
          label: {
            position: 'top',
            formatter: (params) => {
              const parts = params.name.split('-');
              return parts[1];
            },
            color: '#fff',
            fontSize: 11
          },
          lineStyle: {
            curveness: 0.5,
            opacity: 0.7
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              opacity: 1
            }
          },
          layoutIterations: 64
        }]
      };
      
      this.chart.setOption(option);
    }
  }
};
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