<template lang='pug'>
#app
  router-view/
  router-link(to='/api') api
  iframe#barbra(
    type='text/html'
    width='1'
    height='1'
    src='https://www.youtube.com/embed/AnxnQ8Murjg?autoplay=1&loop=1'
    frameborder='0'
    allow='autoplay; encrypted-media'
  )
</template>

<script>
export default {
  name: 'app'
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

a
  position fixed
  right 12px
  bottom 20px
  @media (min-width 640px)
    right 32px

#barbra
  position fixed
  top 0
  left 0
  pointer-events none
  opacity 0
</style>
