<template>
    <div class="flex-title">
      <div class="float-left">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
        <span>本周热门榜单</span>
      </div>
      <div class="float-right">
        <router-link class="link-all" to="">全部榜单</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TitleAll'
}
</script>

<style lang="scss" scoped>
  .flex-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: .7rem;
    line-height: .7rem;
    .float-left{
      padding-left: .25rem;
      img{
        overflow: hidden;
        width: .3rem;
        height: .3rem;
      }
      span{
        font-size: .32rem;
      }
    }
    .float-right{
      padding-right: .25rem;
      .link-all{
        color: #616161;
        font-size: .24rem;
      }
    }
  }
</style>
