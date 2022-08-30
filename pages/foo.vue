<script setup lang="ts">
const foo = useFoo()
foo.state.value.hoge = 'huuga'

useSEO({
  title: 'foo',
})
</script>

<template lang="pug">
  div
    p {{ foo.state.value.hoge }}

    div(style="height:2000px;background:#ccc;")

    AtomsLink(to="/") index
</template>

