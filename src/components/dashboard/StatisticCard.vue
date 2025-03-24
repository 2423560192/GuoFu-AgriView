<template>
  <div class="card">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
      <div class="trend" :class="getTrendClass()">
        <span class="trend-icon">{{ getTrendIcon() }}</span>
        <span class="trend-value">{{ Math.abs(trend).toFixed(1) }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    trend: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getTrendClass() {
      if (this.trend > 0) return 'up';
      if (this.trend < 0) return 'down';
      return 'flat';
    },
    getTrendIcon() {
      if (this.trend > 0) return '↑';
      if (this.trend < 0) return '↓';
      return '→';
    }
  }
};
</script>

<style scoped>
/* 保持样式不变 */
</style> 