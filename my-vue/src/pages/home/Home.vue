<template>
    <div>
        <Header></Header>
        <Swipers></Swipers>
        <icon-meun></icon-meun>
        <div>home</div>
    </div>
</template>

<script>
import Header from './component/Header'
import Swipers from './component/Swipers'
import IconMeun from './component/IconMeun'
export default {
  name: 'Home',
  components: {
    Header,
    Swipers,
    IconMeun
  }
}
</script>

<style scoped>

</style>
