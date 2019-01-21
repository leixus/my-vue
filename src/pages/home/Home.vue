<template>
    <div>
        <Header></Header>
        <Swipers></Swipers>
        <div>home</div>
    </div>
</template>

<script>
import Header from './component/Header'
import Swipers from './component/Swipers'
export default {
  name: 'Home',
  components: {
    Header,
    Swipers
  }
}
</script>

<style scoped>

</style>
