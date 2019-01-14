<template>
    <div>
        <Header></Header>
        <Swipers :list="swiperList"></Swipers>
        <icon-meun></icon-meun>
        <Popular></Popular>
        <MyLike></MyLike>
        <WeekendTrip></WeekendTrip>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './component/Header'
import Swipers from './component/Swipers'
import IconMeun from './component/IconMeun'
import Recommend from './component/Recommend'
import Popular from './component/Popular'
import MyLike from './component/MyLike'
import WeekendTrip from './component/WeekendTrip'
import Footer from './component/Footer'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: []
    }
  },
  components: {
    Header,
    Swipers,
    IconMeun,
    Recommend,
    Popular,
    MyLike,
    WeekendTrip,
    Footer
  },
  mounted () {
    this.getHomeInfoData()
  },
  methods: {
    getHomeInfoData () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    }
  }
}
</script>

<style scoped>

</style>
