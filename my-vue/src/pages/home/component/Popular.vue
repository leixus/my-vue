<template>
    <div class="bg-color">
      <div class="bg2">
        <title-all></title-all>
        <div class="box-margin">
          <ul class="flex-img">
            <li class="box-img" v-for="item of popularsList" :key="item.id">
              <img :src="item.url" alt="">
              <p class="p1">{{item.text}}</p>
              <p class="p2">
                <span class="p2-sp1">{{item.money}}</span>起
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
import TitleAll from './TitleAll'
export default {
  name: 'Popular',
  components: {
    TitleAll
  },
  data () {
    return {
      popularsList: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_250x250_1cd1e3cf.jpg',
          text: '南京总统府',
          money: '¥46.01'
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_250x250_c02fb8cf.jpg',
          text: '夫子庙秦淮河游船',
          money: '¥37.21'
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/sight/p0/1709/b5/b565f06947c8cdeea3.water.jpg_250x250_b816f014.jpg',
          text: '南京银杏湖',
          money: '¥55.89'
        },
        {
          id: 4,
          url: 'http://img1.qunarzz.com/sight/p0/1411/b3/1415e635014967c75a3d955ae256a628.water.jpg_250x250_90a5b193.jpg',
          text: '南京汤山一号温泉',
          money: '¥36.55'
        }
      ]
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
  .box-margin{
    margin: 0 .1rem;
    position: relative;
    height: 0;
    padding-bottom: 40%;
  }
  .flex-img{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    float: left;
    position: absolute;
    /*width: 100%;*/
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .box-img{
      overflow: hidden;
      width: 2rem;
      height: 100%;
      /*padding-bottom: 40%;*/
      margin-left: .12rem;
      /*float: left;*/
      img{
        width: 100%;
        /*border: 1px solid #ccc;*/
      }
      p{
        text-align: center;
      }
      .p1{
        color: #212121;
        font-size: .24rem;
        margin-top: .2rem;
      }
      .p2{
        margin-top: .1rem;
      }
      .p2-sp1{
        color: #ff8300;
        font-size: .24rem;
        line-height: .36rem;
      }
    }
  }
}
</style>
