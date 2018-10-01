<template>
  <div class="picture" @mouseover="stopPlay" @mouseleave="play">

    <div class="main_div">
      <transition-group tag="ul" name="image" class="ul_img">
        <li class="li_img" v-for="(img, index) in imgArray" v-show="index === count" :key="index">
          <a :href="img.toUrl">
            <img :src="img.imgUrl">
          </a>
        </li>
      </transition-group>
    </div>

    <div class="bar" :style="{marginLeft: marginVal + 'px'}">
      <div v-for="(item, index) in imgArray" :key="index" :class="{'active': index === count,'normal': true}"
      @mouseover="change(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShufflePicture',
  data () {
    return {
      timer: null,
      count: 0,
      imgArray: [
        {imgUrl: require('@/assets/img1.jpg'), toUrl: ''},
        {imgUrl: require('@/assets/img2.jpg'), toUrl: ''},
        {imgUrl: require('@/assets/img3.jpg'), toUrl: ''}
      ]
    }
  },
  created () {
    this.play()
  },
  computed: {
    marginVal () {
      return 240 - 30 * this.imgArray.length
    }
  },
  methods: {
    autoPlay () {
      this.count++
      if (this.count === this.imgArray.length) {
        this.count = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 4000)
    },
    change (i) {
      this.count = i
    },
    stopPlay () {
      clearInterval(this.timer)
    }
  }
}
</script>
<style>
  .picture{
    width: 500px;
    height: 350px;
  }
  .main_div{
    width: 500px;
    height: 300px;
    overflow: hidden;
    position: relative;
  }

  .ul_img{
    padding-inline-start: 0px;
  }

  .li_img{
    width: 500px;
    float: left;
  }

  img{
    width: 100%;
  }

  .image-enter-active, .image-leave-active {
    transition: all 1s;
  }
  .image-enter,.image-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

  .normal{
    float: left;
    border-radius: 100px;
    background-color: aquamarine;
    width: 50px;
    height: 10px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .active{
    background-color: aqua;
  }
</style>
