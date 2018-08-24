<template lang='pug'>
#api
  h1 the guilty bois api
  span the bois you need, when you need them

  #docs
    dl
      h2 list all the guilty bois
      dt method
      dd get
      dt url
      dd https://guiltyboi.com/api/bois
      dt response
      dd: code #{'Array<Boi>'}
    dl
      h2 get a boi
      dt method
      dd get
      dt url
      dd https://guiltyboi.com/api/bois/:id
      dt response
      dd: code Boi
    dl
      h2 verify the guilt of a boi
      dt method
      dd get
      dt url
      dd https://guiltyboi.com/api/bois/:id/verify
      dt response
      dd: code Boolean<br>String
</template>

<script>export default {
  name: 'Api'
}
</script>

<style scoped lang='stylus'>
dl
  display inline-grid
  grid-template-columns repeat(2, auto)
  max-width calc(100% - 32px)
  word-break break-word
  &:not(last-child)
    margin-right 32px

h2
  grid-column 1 / span 2
  text-align left
  color white

dt
  text-align right

dd
  margin-left 12px
  text-align left
</style>
