<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg" alt="" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
</template>

<script>
export default {
  name: 'Swipers',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style scoped>
  .swiper-img{
    width: 100%;
  }
</style>
