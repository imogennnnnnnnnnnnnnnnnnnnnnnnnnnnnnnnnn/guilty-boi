<template lang='pug'>
#bois: Boi(v-for='boi in bois' :key='boi.id' :boi='boi')
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
  async created() {
    const res = await axios.get(`${BASE_URL}/bois`)
    this.bois = res.data
  }
}
</script>
