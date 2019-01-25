<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">详情</div>
  </div>
</template>

<script>
import DetailBanner from './component/Banner'
import DetailHeader from './component/Header'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner
  }
}
</script>

<style lang="scss" scoped>
  .content{
    /*height: 50rem;*/
  }
</style>
