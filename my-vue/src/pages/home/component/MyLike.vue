<template>
  <div class="my-like">
    <div class="guess-like">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span>猜你喜欢</span>
    </div>
    <div class="like-details">
      <div class="details-flex" v-for="item of likeList" :key="item.id">
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
  data () {
    return {
      likeList: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/sight/p0/1411/bb/538133c76765880a3d3c802e45015c57.water.jpg_200x200_169b048c.jpg',
          title: '紫清湖生态温泉',
          assess: 1442,
          price: 126.7,
          address: '江宁区'
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/sight/p0/1505/f4/f455d92ba582f608.water.jpg_200x200_375e5775.jpg',
          title: '南京汤山颐尚温泉',
          assess: 2367,
          price: 117.7,
          address: '江宁区'
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/sight/p0/1504/15/1530936526074f62.water.jpg_200x200_fb55ee43.jpg',
          title: '六朝博物馆',
          assess: 1913,
          price: 12,
          address: '玄武区'
        },
        {
          id: 4,
          url: 'http://img1.qunarzz.com/sight/p18/201211/03/db9f2bb27ee40bf893835fbb.jpg_200x200_cf1de8d6.jpg',
          title: '美龄宫',
          assess: 1797,
          price: 25.8,
          address: '钟山风景...'
        },
        {
          id: 5,
          url: 'http://img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_200x200_cfb06983.jpg',
          title: '夫子庙秦淮河游船',
          assess: 2893,
          price: 90,
          address: '秦淮区'
        }
      ]
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
