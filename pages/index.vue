<script setup lang="ts">
const { $window } = useNuxtApp()
const env = process.env.nodeEnv

const foo = useFoo()
foo.state.value.hoge = 'huuga'

// const analytics = useAnalytics()
// analytics.gtmPush({
//   eventLabel: 'label'
// })

useSEO({
  title: 'index',
  type: 'website'
})

onMounted(() => {
  console.log('mounted')
})
</script>

<template lang="pug">
  div
    p {{ foo.state.value.hoge }}
    p {{ foo.state.value.huga }}
    p {{ foo.getState() }}
    p {{ env }}
    p width: {{ $window.width }}
    p height: {{ $window.height }}
    p scrolltop: {{ $window.scrollTop }}

    p
      AtomsLink(to="/foo") foo
    p
      AtomsLink(to="https://example.com" target="_blank") example

    MoleculesTutorial
</template>

