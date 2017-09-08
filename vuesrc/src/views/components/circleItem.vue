<!--
Description
@authors Andy
@date    2017-09-07 17:20:25
@version 1.0.0
-->
<template>
  <div class="fix container" @click="initRotate()">
    <div class="square item" ref="square">
    </div>
    <div class="points item" ref="points">
    </div>
    <div class="housing-washer item" ref="housing_washer">
    </div>
    <div></div>
  </div>
</template>

<script>
  import $ from 'jquery';
  require('./jquery.rotate.min.js');
  export default {
    name: 'circleItem',
    props: [],
    data() {
      return {
        interval: {
          square: null,
          points: null,
          housing_washer: null,
        }
      }
    },
    methods: {
      rotateInCircle(deg, unitTime, el, way) {
        let angle = 0;
        let _this = this;
        setInterval(() => {
          // console.log(angle);
          if (way) {
            angle += deg;
          } else {
            angle -= deg;
          }
          // if (angle % 360 === 0) {
          //   angle = 0;
          // }
          $(el).rotate({
            animateTo: angle, 
          });
          // el.style.transform = "rotate(" + angle + "deg)"
        }, unitTime);
      },
      initRotate() {
        this.interval.square = this.rotateInCircle(3, 50, this.$refs.square, true);
        this.interval.points = this.rotateInCircle(15, 50, this.$refs.points, false);
        this.interval.housing_washer = this.rotateInCircle(1, 50, this.$refs.housing_washer, false);
      }
    },
    mounted() {
      // let angle = 0;
      // let _this = this;
      // setInterval( ()=> {
      //   angle += 3;
      //   $(_this.$refs.square).rotate(angle);
      // }, 50);
    }
  }
</script>

<style lang="scss" scope>
  .fix {
    width: 184px;
    height: 122px;
    background: url(./fix.png);
    position: relative;
  }

  .item {
    width: 184px;
    height: 184px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -92px 0 0 0;
    transform: rotate(0);
    transition: transform 40ms;
  }

  .points {
    background: url(./points.png);
    .spot {
      background-color: #0f0;
    }
  }

  .square {
    background: url(./square.png);
    /* margin: -65.5px 0 0 -66.5px; */
    .spot {
      background-color: #00f;
    }
  }

  .housing-washer {
    background: url(./housing-washer.png);
    left:-1px;
    .spot {
      background-color: #f00;
    }
  }

  .spot {
    width: 2px;
    height: 2px;
    position: absolute;
    top: 50%;
    left:50%;
    margin: -1px 0 0 -1px;
    background-color:black;
    z-index: 1000; 
  }
</style>