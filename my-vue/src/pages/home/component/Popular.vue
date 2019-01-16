<template>
    <div class="bg-color">
      <div class="bg2">
        <title-all></title-all>
        <ul class="mp-hotsale-list">
          <li class="mp-hotsale-item" v-for="item of list" :key="item.id">
            <a class="mp-fulllink" href=""
               data-click="ts_hotsale" data-click-index="0">
              <div class="mp-hotsale-tag image-ready">
                <img class="mp-hotsale-tagimg" :src="item.top"
                     :alt="item.title">
              </div>
              <div class="mp-hotsale-imgcon image-ready">
                <img :src="item.imgUrl"
                     :alt="item.title">
              </div>
              <div class="mp-hotsale-sight mp-ellipsis">
                {{item.title}}
              </div>
              <div class="mp-hotsale-price">
                <span class="mpg-price">
                    ¥
                    <em class="mpg-price-num">
                        {{item.price}}
                    </em>
                </span>
                起
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
import TitleAll from './TitleAll'
export default {
  name: 'Popular',
  props: {
    list: Array
  },
  components: {
    TitleAll
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-color{
  background: #F5F5F5;
  padding-top: .24rem;
  padding-bottom: .24rem;
  .bg2{
    background: #ffffff;
  }
  .mp-hotsale-list {
    padding: 0 .24rem;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .mp-hotsale-item {
    position: relative;
    display: inline-block;
    padding: .06rem 0 .2rem;
    width: 2rem;
    margin: .1rem;
  }
  .mp-fulllink {
    display: block;
    width: 100%;
    height: 100%;
  }
  .image-ready {
    background: none !important;
  }
  .mp-hotsale-tag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: .84rem;
    height: .4rem;
  }
  .image-ready img {
    opacity: 1;
  }
  .mp-hotsale-tagimg {
    width: 100%;
  }
  .mp-hotsale-imgcon {
    overflow: hidden;
    width: 2rem;
    height: 0;
    padding-bottom: 100%;
    background: #f0f5f8;
  }
  .mp-hotsale-imgcon img {
    width: 100%;
  }
  .mp-hotsale-sight {
    margin-top: .12rem;
    color: #212121;
    font-size: .24rem;
    line-height: .32rem;
    text-align: center;
  }
  .mp-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mp-hotsale-price {
    color: #616161;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
  }
  .mp-hotsale-price .mpg-price {
    color: #ff8300;
  }
}
</style>
