<template lang='pug'>
.boi
  img(
    :alt='`${boi.firstName} ${boi.lastName}`'
    :src='boi.avi'
    :style='{"--delay": `${Math.floor(Math.random()*-4)}s`}'
  )
  .counts(v-text='boi.counts')
</template>

<script>
export default {
  name: 'Boi',
  props: {
    boi: Object
  }
}
</script>

<style scoped lang='stylus'>
@keyframes imgOrbit
  from
    transform rotate(0deg) translateX(32px) rotate(0deg)
  to
    transform rotate(360deg) translateX(32px) rotate(-360deg)

@keyframes countsOrbit
  from
    transform rotate(0deg) translateX(6px) rotate(0deg)
  to
    transform rotate(360deg) translateX(6px) rotate(-360deg)

.boi
  display inline-block
  position relative
  margin 56px

img
  width 320px
  height auto
  vertical-align middle
  transform translateX(32px)
  animation imgOrbit 3s linear infinite
  animation-delay var(--delay)

.counts
  position absolute
  right 0
  bottom 0
  transform translateX(6px)
  animation countsOrbit 4s linear infinite
  animation-delay var(--delay)
  padding 10px
  background-color blue
  color white
</style>
