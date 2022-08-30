<script setup lang="ts">
</script>

<template lang="pug">
#app
  OrganismsTheHeader

  main
    nuxt(ref="content")

  OrganismsTheFooter
</template>

<style lang="stylus">
.page-enter-active,
.page-leave-active
  transition opacity .4s

.page-enter,
.page-leave-active
  opacity 0
</style>

<style lang="stylus" scoped>
main
  relative top 0 left 0
</style>

