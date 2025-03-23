<template>
  <div id="app" class="fade-in">
    <div class="page-tabs">
      <div 
        class="tab" 
        :class="{ active: currentPage === 'economic' }" 
        @click="switchPage('economic')"
      >
        <i class="el-icon-s-grid"></i> 经济作物生产
      </div>
      <div 
        class="tab" 
        :class="{ active: currentPage === 'grain' }" 
        @click="switchPage('grain')"
      >
        <i class="el-icon-s-data"></i> 粮食生产情况
      </div>
      <div 
        class="tab" 
        :class="{ active: currentPage === 'agricultural' }" 
        @click="switchPage('agricultural')"
      >
        <i class="el-icon-s-cooperation"></i> 农业生产条件
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <EconomicPage v-if="currentPage === 'economic'" key="economic" />
      <GrainPage v-else-if="currentPage === 'grain'" key="grain" />
      <AgriculturalPage v-else key="agricultural" />
    </transition>
  </div>
</template>

<script>
import EconomicPage from './pages/EconomicPage.vue'
import GrainPage from './pages/GrainPage.vue'
import AgriculturalPage from './pages/AgriculturalPage.vue'

export default {
  name: 'App',
  components: {
    EconomicPage,
    GrainPage,
    AgriculturalPage
  },
  data() {
    return {
      currentPage: 'economic'
    }
  },
  methods: {
    switchPage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page
      }
    }
  }
}
</script>

<style>
@import './assets/css/global.css';

body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background: #0f1c30;
  color: #fff;
  overflow-x: hidden;
}

#app {
  width: 100vw;
  height: 100vh;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBmMWMzMCIgLz4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiAvPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiAvPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIC8+CiAgPGNpcmNsZSBjeD0iMCIgY3k9IjEwMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIC8+Cjwvc3ZnPg==');
  display: flex;
  flex-direction: column;
}

.page-tabs {
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 20px;
}

.tab {
  padding: 15px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.tab i {
  margin-right: 8px;
  font-size: 18px;
}

.tab:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
}

.tab.active {
  color: #4cd5ce;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #4cd5ce, #43aa8b);
}

/* 页面切换动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 