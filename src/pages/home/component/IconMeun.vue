<template>
  <div>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <hr class="hrs" />
  </div>
</template>

<script>
export default {
  name: 'IconMeun',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/style';
  .icons >>> .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }
  .icons {
    width: 100%;
    overflow: hidden;
    height: 0;
    margin-top: .1rem;
    /*background: green;*/
    padding-bottom: 50%;
    .icon {
      width: 25%;
      height: 25%;
      padding-bottom: 25%;
      float: left;
      /*background: red;*/
      position: relative;
      .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content{
          height: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .icon-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: #333;
        @include ellipsis;
      }
    }
  }
  .hrs {
    height: .02rem;
    margin: .1rem 0;
    border: medium none;
    border-top: .02rem solid #F5F5F5;
  }
</style>
