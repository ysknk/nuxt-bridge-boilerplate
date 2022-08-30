export default defineNuxtPlugin(() => {
  return {
    provide: {

      window: (() => {
        const $window = reactive({
          width: 0,
          height: 0,
          scrollTop: 0
        })

        if (process.client) {
          const onScroll = () => {
            $window.scrollTop = global.scrollY
          }
          const onResize = () => {
            $window.width = global.innerWidth
            $window.height = global.innerHeight
          }

          onScroll()
          onResize()

          global.addEventListener('scroll', onScroll)
          global.addEventListener('resize', onResize)
        }

        return $window
      })()

    }
  }
})

