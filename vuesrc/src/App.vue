<template>
  <div id="app">
    <!-- <echart></echart> -->
    <my-circle></my-circle>
  </div>
</template>

<script>
  import chart from './views/chart.vue';
  import circle from './views/circle.vue';
  import free_room from './views/free_room.vue';
  import new_partner from './views/new_partner.vue';
  import size from './views/size.vue';
  import turnover from './views/turnover.vue';
  import myvideo from './views/video.vue';
  import $ from 'jquery'

  // require('./assets/js/hcharts/js');
  export default {
    name: 'app',
    components: {
      "echart": chart,
      "my-circle": circle,
      "free-room": free_room,
      "new_partner": new_partner,
      "mysize": size,
      "turnover": turnover,
      "my-video": myvideo
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" >
  //  @import './assets/font/AGENCYR_num/AGENCYR.css';


  body {
    padding: 0 50px;
    background: url(./assets/background.png);
  }
</style>