<template>
    <div>
        <Header></Header>
        <Swipers></Swipers>
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
export default {
  name: 'Home',
  components: {
    Header,
    Swipers,
    IconMeun,
    Recommend,
    Popular,
    MyLike,
    WeekendTrip,
    Footer
  }
}
</script>

<style scoped>

</style>
