export type TState = {
  hoge?: string
  huga: string
}

export const useFoo = () => {
  // NOTE: another composables access
  // const nuxtApp = useNuxtApp()
  // const bar = useBar()

  // NOTE: injection access
  // return nuxtApp.$hello

  // NOTE: please reload after updating
  const state = useState<TState>('hoge', () => ({
    hoge: '',
    huga: 'aa'
  }))

  return {
    state,

    getState: () => {
      return `${state.value.hoge}${"hoge"}`
    },
    // SetState: (value) => {
    //   state.value = value
    // }
  }
}
