<template>
  <div class="week-trip">
    <h2 class="mp-modtitle">周末去哪儿</h2>
    <div v-for="item of list" :key="item.id">
      <div class="week-img">
        <img :src="item.imgUrl" :alt="item.name">
      </div>
      <div class="mp-product-info">
        <p class="product-name">{{item.title}}</p>
        <p class="product-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeekendTrip',
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .week-trip{
    .mp-modtitle{
      height: .8rem;
      padding-left: .26rem;
      line-height: .8rem;
      color: #212121;
      background: #F5F5F5;
    }
    .week-img{
      overflow: hidden;
      height: 0;
      padding-bottom: 37.4375%;
      img{
        width: 100%;
      }
    }
    .mp-product-info {
      padding: .14rem .2rem .2rem .2rem;
      .product-name {
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .product-desc {
        overflow: hidden;
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

</style>
