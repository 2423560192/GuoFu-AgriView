<template>
  <div id="app" class="fade-in">
    <DataVisualization />
  </div>
</template>

<script>
import DataVisualization from './components/DataVisualization.vue'

export default {
  name: 'App',
  components: {
    DataVisualization
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
}
</style> 