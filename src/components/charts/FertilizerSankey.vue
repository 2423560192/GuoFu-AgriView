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
        { source: '2022年', target: '氮肥', value: 998.68 },
        { source: '2022年', target: '磷肥', value: 582.15 },
        { source: '2022年', target: '钾肥', value: 163.25 },
        { source: '2022年', target: '复合肥', value: 632.64 },
        
        // 2023年数据
        { source: '2023年', target: '氮肥', value: 989.34 },
        { source: '2023年', target: '磷肥', value: 573.82 },
        { source: '2023年', target: '钾肥', value: 168.99 },
        { source: '2023年', target: '复合肥', value: 646.27 },
        
        // 2024年数据
        { source: '2024年', target: '氮肥', value: 989.34 },
        { source: '2024年', target: '磷肥', value: 573.82 },
        { source: '2024年', target: '钾肥', value: 168.99 },
        { source: '2024年', target: '复合肥', value: 646.27 }
      ],
      colors: {
        '2021年': '#08979c',
        '2022年': '#13c2c2',
        '2023年': '#36cfc9',
        '2024年': '#5cdbd3',
        '氮肥': '#ff4d4f',
        '磷肥': '#ffd666',
        '钾肥': '#95de64',
        '复合肥': '#69c0ff'
      },
      yearOrder: ['2021年', '2022年', '2023年', '2024年'],
      fertilizerOrder: ['氮肥', '磷肥', '钾肥', '复合肥']
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.chart) {
      this.chart.dispose();
    }
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
      this.fertilizerOrder.forEach((fertilizer) => {
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
        grid: {
          containLabel: true,
          width: '80%' // 设置图表区域宽度为容器的80%
        },
        series: [{
          type: 'sankey',
          left: '8%',  // 调整左边距
          right: '12%', // 调整右边距
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
            fontSize: 12,
            color: '#fff'
          },
          lineStyle: {
            color: 'source',
            opacity: 0.4,
            curveness: 0.5
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chart-title {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
  flex-shrink: 0;
}

.chart-container {
  flex: 1;
  width: 90%; /* 容器宽度设置为90% */
  margin: 0 auto; /* 居中显示 */
  min-height: 220px; /* 确保图表有足够的高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  .chart-container {
    min-height: 200px;
    width: 92%; /* 小屏幕上略微增加宽度 */
  }
  
  .chart-title {
    font-size: 13px;
  }
}

@media screen and (max-width: 992px) {
  .chart-container {
    min-height: 180px;
  }
}

@media screen and (max-width: 768px) {
  .chart-container {
    min-height: 160px;
    width: 95%; /* 在移动设备上几乎占满 */
  }
  
  .chart-title {
    font-size: 12px;
    height: 25px;
    line-height: 25px;
  }
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 11px;
  }
  
  .chart-container {
    min-height: 140px;
  }
}
</style> 