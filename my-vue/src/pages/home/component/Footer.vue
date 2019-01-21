<template>
    <div>
      <div class="footer-bg"></div>
      <div class="mp-price-desc">
        <span class="mp-price-desc-highlight">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
      <div class="footer-bg"></div>
      <div class="mp-price-desc we-center">
        <router-link to="">关于我们</router-link>
      </div>
      <div class="footer-bg"></div>
      <div class="mp-price-desc we-center">
        <span>Qunar 京ICP备05021087</span>
        <router-link to="">意见反馈</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer-bg{
    background: #F3F3F3;
    width: 100%;
    height: .15rem;
  }
  .mp-price-desc {
    margin-top: .1rem;
    padding: .14rem .2rem;
    font-size: .24rem;
    line-height: .32rem;
    background: #fff;
    color: #616161;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .mp-price-desc-highlight{
      font-weight: bold;
    }
  }
  .we-center{
    text-align: center;
  }
</style>
