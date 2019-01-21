<template>
  <div class="my-like">
    <div class="guess-like">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span>猜你喜欢</span>
    </div>
    <div class="like-details">
      <div class="details-flex" v-for="item of list" :key="item.id">
        <div class="box-img">
          <img :src="item.url" :alt="item.title">
        </div>
        <div class="details-right">
          <div class="details-title">{{item.title}}</div>
          <div class="details-assess">
            <span>4星</span>
            <span class="mp-comment-num">{{item.assess}}条评论</span>
          </div>
          <div class="price-address">
            <div class="mpg-price">
              <span>¥</span>
              <span class="mpg-price-num">{{item.price}}</span>
              <span class="price-start">起</span>
            </div>
            <div>{{item.address}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLike',
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
.my-like{
  margin: .2rem 0;
  .guess-like{
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
  .like-details{
    margin: .2rem;
    .details-flex{
      display: flex;
      overflow: hidden;
      border-bottom: 1px solid #F4F4F4;
      padding-top: .2rem;
      padding-bottom: .2rem;
      .box-img{
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .details-right{
        padding-left: .2rem;
        flex: 1;
        .details-title{
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .details-assess{
          margin-top: .14rem;
          height: .34rem;
          .mp-comment-num{
            color: #616161;
            font-size: .24rem;
            line-height: .34rem;
            /*vertical-align: text-bottom;*/
          }
        }
        .price-address{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: .22rem;
          color: #616161;
          font-size: .24rem;
          line-height: .4rem;
          .mpg-price{
            color: #ff8300;
            .mpg-price-num{
              font-size: .4rem;
            }
            .price-start{
              color: #616161;
            }
          }

        }
      }
    }
  }
  .hr-like {
    height: .02rem;
    margin: .2rem 0;
    border: medium none;
    border-top: .02rem solid #F5F5F5;
  }
}
</style>
