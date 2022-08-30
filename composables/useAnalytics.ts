type TState = {
  gtm?: {
    event?: string
    eventCategory?: string
    eventAction?: string
    eventLabel: string
  }
}

export const useAnalytics = () => {
  const state = useState<TState>('analytics', () => ({
    gtm: {
      event: '',
      eventCategory: '',
      eventAction: '',
      eventLabel: ''
    }
  }))

  return {
    gtmPush: (payload: TState) => {
      if (!process.client) { return }
      window.dataLayer = window.dataLayer || []
      payload = Object.assign({}, state.value.gtm, payload)
      return window.dataLayer.push(payload)
    },
  }
}
