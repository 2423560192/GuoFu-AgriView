<template>
  <div class="chart-wrapper">
    <div class="chart-title">各年各类化肥使用量流向图</div>
    <div ref="chart" class="chart-container"></div>
  </div>
</template>

<script>
export default {
  name: 'FertilizerSankey',
  data() {
    return {
      chart: null,
      fertilizerData: [
        // 2021年数据
        { source: '2021年', target: '氮肥', value: 1006.98 },
        { source: '2021年', target: '磷肥', value: 591.99 },
        { source: '2021年', target: '钾肥', value: 158.00 },
        { source: '2021年', target: '复合肥', value: 620.84 },
        
        // 2022年数据
        { source: '2022年', target: '氮肥', value: 2508.65 },
        { source: '2022年', target: '磷肥', value: 5608.58 },
        { source: '2022年', target: '钾肥', value: 301.95 },
        { source: '2022年', target: '复合肥', value: 1755.43 },
        
        // 2023年数据
        { source: '2023年', target: '氮肥', value: 2500.03 },
        { source: '2023年', target: '磷肥', value: 3670.31 },
        { source: '2023年', target: '钾肥', value: 285.05 },
        { source: '2023年', target: '复合肥', value: 1505.02 },
        
        // 2024年数据
        { source: '2024年', target: '氮肥', value: 2498.20 },
        { source: '2024年', target: '磷肥', value: 3676.38 },
        { source: '2024年', target: '钾肥', value: 285.80 },
        { source: '2024年', target: '复合肥', value: 1515.63 }
      ],
      colors: {
        '2021年': '#276678',
        '2022年': '#1687a7',
        '2023年': '#00a8cc',
        '2024年': '#4cd5ce',
        '氮肥': '#4cd5ce',
        '磷肥': '#43aa8b',
        '钾肥': '#f9c74f',
        '复合肥': '#f94144'
      },
      // 年份按从上到下的顺序
      yearOrder: ['2024年', '2023年', '2022年', '2021年'],
      fertilizerOrder: ['氮肥', '磷肥', '钾肥', '复合肥']
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
      // 从links数据中提取所有唯一节点名称
      const nodeNames = new Set();
      this.fertilizerData.forEach(link => {
        nodeNames.add(link.source);
        nodeNames.add(link.target);
      });
      
      // 转换为nodes数组，并手动设置年份节点的位置
      const nodes = [];
      
      // 添加年份节点，指定位置
      this.yearOrder.forEach((year, index) => {
        nodes.push({
          name: year,
          itemStyle: {
            color: this.colors[year]
          },
          // 固定节点的坐标 - 左侧垂直排列
          // x坐标设为0（最左侧），y坐标按比例分布
          x: 0,
          y: index * (1 / (this.yearOrder.length - 1)),
          fixed: true
        });
      });
      
      // 添加肥料类型节点
      this.fertilizerOrder.forEach(fertilizer => {
        nodes.push({
          name: fertilizer,
          itemStyle: {
            color: this.colors[fertilizer]
          }
        });
      });
      
      const option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: params => {
            if (params.dataType === 'edge') {
              return `${params.data.source} → ${params.data.target}: ${params.value.toFixed(2)} 吨`;
            }
            return params.name;
          }
        },
        series: [{
          type: 'sankey',
          left: '5%',
          right: '20%',
          top: '5%',
          bottom: '5%',
          data: nodes,
          links: this.fertilizerData,
          nodeAlign: 'justify',
          orient: 'horizontal',
          draggable: false,
          layoutIterations: 0, // 禁用自动布局迭代，使用固定位置
          label: {
            position: 'right',
            color: '#fff',
            fontSize: 12
          },
          lineStyle: {
            color: 'gradient',
            curveness: 0.5,
            opacity: 0.6
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: '#333'
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              opacity: 0.9
            }
          }
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
  padding: 0.5px;
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