<template>
  <ul class="listAlp">
    <li class="itemKey"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      // letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/style';
  .listAlp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .itemKey{
      line-height: .4rem;
      text-align: center;
      color: $bgColor;
    }
  }
</style>
