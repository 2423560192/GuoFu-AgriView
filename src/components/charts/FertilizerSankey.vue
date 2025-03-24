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
      if (this.chart) {
        this.chart.dispose();
      }
      
      this.chart = this.$echarts.init(this.$refs.chart);
      
      // 处理钾肥相关的连接，使其显示更明显
      const adjustedLinks = this.fertilizerData.map(link => {
        // 钾肥连接加粗3倍，但保持原始数值
        if (link.target === '钾肥') {
          return {
            source: link.source,
            target: link.target,
            value: link.value * 3  // 放大显示，但在提示框中仍显示原值
          };
        }
        return link;
      });
      
      // 直接设置节点位置，确保年份从上到下排列
      const nodes = [];
      
      // 添加年份节点，使其从上到下垂直排列
      this.yearOrder.forEach((year, index) => {
        nodes.push({
          name: year,
          itemStyle: { color: this.colors[year] },
          x: 0.05,  // 左侧5%位置
          y: 0.1 + index * 0.2,  // 垂直分布
          fixed: true,  // 固定位置
          value: year  // 用于tooltip显示
        });
      });
      
      // 添加肥料类型节点
      this.fertilizerOrder.forEach((fertilizer, index) => {
        nodes.push({
          name: fertilizer,
          itemStyle: { color: this.colors[fertilizer] }
        });
      });
      
      const option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: params => {
            if (params.dataType === 'edge') {
              // 查找原始链接值
              const original = this.fertilizerData.find(
                link => link.source === params.data.source && link.target === params.data.target
              );
              return `${params.data.source} → ${params.data.target}: ${original ? original.value.toFixed(2) : params.data.value.toFixed(2)} 吨`;
            }
            return params.name;
          }
        },
        series: [{
          type: 'sankey',
          left: '5%',
          right: '5%',
          top: '5%',
          bottom: '5%',
          nodeWidth: 20,
          nodeGap: 12,
          layoutIterations: 0,  // 禁用自动布局
          orient: 'horizontal',
          emphasis: {
            focus: 'adjacency'
          },
          data: nodes,
          links: adjustedLinks,
          label: {
            position: 'right',
            color: '#fff',
            fontSize: 12
          },
          lineStyle: {
            color: 'gradient',
            curveness: 0.5,
            opacity: 0.7
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: '#333'
          }
        }]
      };
      
      this.chart.setOption(option);
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize();
      }
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
  min-height: 250px; /* 确保图表有足够的高度 */
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 12px;
  }
}
</style> 