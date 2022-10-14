<script setup lang="ts">
interface IProps {
  type?: string
  src: string
  alt?: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<IProps>(), {
  src: '',
  alt: '',
  width: undefined,
  height: undefined
})

const src = ref(props.src)
const router = useRouter()
if (src.value.match(/^\//)) {
  src.value = src.value.replace(/^\//, router.options.base)
}
</script>

<template lang="pug">
img.a-image(
  :class="props.type ? 'a-image--' + type : false"
  :src="src"
  :alt="props.alt"
  :width="props.width"
  :height="props.height"
)
</template>

<style lang="stylus" scoped>
.a-image
  display inline-block
</style>
