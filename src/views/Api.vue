<template lang='pug'>
#api
  h1 the guilty bois api
  span the bois you need, when you need them

  #docs: dl
    dt method
    dd get
    dt url
    dd https://guiltyboi.com/api/bois
    dt response
    dd: code #{'Array<Boi>'}
</template>

<script>
import Boi from '@/components/Boi.vue'

const BASE_URL = 'https://us-central1-guilty-boi.cloudfunctions.net'

export default {
  name: 'Bois',
  components: {
    Boi
  },
  data() {
    return {
      bois: []
    }
  },
  async mounted() {
    if (this.bois.length===0) {
      const res = await axios.get('`${BASE_URL}/bois`')
      this.bois = res.data
    }
  }
}
</script>

<style scoped lang='stylus'>
dl
  display inline-grid
  grid-template-columns repeat(2, auto)

  dt
    text-align right
  dd
    margin-left 12px
    text-align left
</style>
