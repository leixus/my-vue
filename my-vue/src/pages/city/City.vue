<template>
  <div>
    <city-header></city-header>
    <!--<cube-button @click="clickHandle">show dialog</cube-button>-->
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './component/Header'
import CitySearch from './component/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="scss" scoped>

</style>
