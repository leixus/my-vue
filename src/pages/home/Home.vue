<template>
  <div>
    <Header></Header>
    <Swipers :list="swiperList"></Swipers>
    <icon-meun :list="iconList"></icon-meun>
    <Popular :list="popularList"></Popular>
    <MyLike :list="myLikeList"></MyLike>
    <WeekendTrip :list="weekendTrip"></WeekendTrip>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './component/Header'
import Swipers from './component/Swipers'
import IconMeun from './component/IconMeun'
import Popular from './component/Popular'
import MyLike from './component/MyLike'
import WeekendTrip from './component/WeekendTrip'
import Footer from './component/Footer'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      popularList: [],
      myLikeList: [],
      weekendTrip: []
    }
  },
  components: {
    Header,
    Swipers,
    IconMeun,
    Popular,
    MyLike,
    WeekendTrip,
    Footer
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfoData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.popularList = data.popularList
        this.myLikeList = data.myLikeList
        this.weekendTrip = data.weekendTrip
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfoData()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfoData()
    }
  }
}
</script>

<style scoped>

</style>
