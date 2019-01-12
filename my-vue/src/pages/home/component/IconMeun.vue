<template>
    <div class="icons">
      <div class="icon">
        <div class="icon-img">
          <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
        </div>
        <p class="icon-desc">xxx</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'IconMeun',
  data () {
    return {
      iconList: [
        {
          id: 1,
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/style';
  .icons {
    width: 100%;
    overflow: hidden;
    height: 0;
    background: green;
    padding-bottom: 50%;
    .icon {
      width: 25%;
      height: 25%;
      padding-bottom: 25%;
      float: left;
      background: red;
      position: relative;
      .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
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
</style>
