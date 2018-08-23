<template lang='pug'>
#app
  router-view/
  nav
    router-link(to='/api') api
    a(href='https://github.com/imogennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn/guilty-boi') github
  iframe#barbra(
    type='text/html'
    width='32'
    height='32'
    src='https://www.youtube.com/embed/AnxnQ8Murjg?autoplay=1&loop=1'
    frameborder='0'
    allow='autoplay; encrypted-media'
  )
</template>

<script>
import heap from './vendor/heap'

const HEAP_ID = '2405005588'

export default {
  name: 'app',
  mounted() {
    heap(HEAP_ID)
  }
}
</script>

<style lang='stylus'>
@import "../node_modules/normalize-css/normalize.css"

*
  box-sizing border-box

#app, body, html
  height 100%
  overflow: auto

#app
  font-family Helvetica, Arial, sans-serif
  font-weight bold
  font-size 20px
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  background-color red

nav
  position fixed
  right 12px
  bottom 20px
  @media (min-width 640px)
    right 32px
  * + *
    margin-left 10px

#barbra
  position fixed
  top -20px
  left -20px
  opacity 0.01
</style>
