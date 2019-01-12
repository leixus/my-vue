<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt="" />
      </swiper-slide>
      <!--<swiper-slide>-->
        <!--<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg" alt="" />-->
      <!--</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Swipers',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    /*height: 26.66vm;*/
    padding-bottom: 26.66%;
    background: #ccc;
  }
  .wrapper >>> .swiper-pagination-bullet-active {
    background: #ffffff !important;
  }
  .swiper-img{
    width: 100%;
  }
</style>
