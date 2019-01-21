<template>
  <div class="header">
      <div class="header-back">
          <span class="iconfont icon-size">&#xe624;</span>
      </div>
      <div class="header-container">
          <span class="iconfont icon-show">&#xe632;</span>
          <input class="header-input" type="text" placeholder="输入城市/景点/游玩主题" />
      </div>
      <router-link to='/city'>
        <div class="header-city">
            <span>城市</span>
            <span class="iconfont icon-city">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        line-height: .86rem;
        background: #00bcd4;
        color: #fff;
    }
    .header-back{
        width: .64rem;
        float: left;
        text-align: center;
        .icon-size{
            font-size: .28rem;
        }
    }
    .header-container{
        flex: 1;
        display:flex;
        background: #ffffff;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        .icon-show{
            width: .4rem;
            color: #ccc;
            text-align: center;
            margin-left: .08rem;
            margin-right: .08rem;
        }
        .header-input{
            flex: 1;
        }
    }
    .header-city{
        width: 1.24rem;
        float: right;
        text-align: center;
        margin-top: .05rem;
        color: #fff;
        .icon-city{
            font-size: .2rem;
        }
    }
</style>
