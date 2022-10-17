export type TState = {
  title?: string
  url?: string
  description?: string
  keywords?: string[]
  type?: 'website'|'article'
}

export const useSEO = (payload: TState) => {
  if (!payload) { return }

  const meta = []
  if (payload.title) {
    meta.push({ hid: 'og:title', property: 'og:title', content: payload.title })
  }
  if (payload.url) {
    meta.push({ hid: 'canonical', name: 'canonical', content: payload.url })
    meta.push({ hid: 'og:url', property: 'og:url', content: payload.url })
  }
  if (payload.description) {
    meta.push({ hid: 'description', name: 'description', content: payload.description })
    meta.push({ hid: 'og:description', property: 'og:description', content: payload.description })
  }
  if (payload.keywords) {
    meta.push({ hid: 'keywords', name: 'keywords', content: payload.keywords.join(',') })
  }
  if (payload.type) {
    meta.push({ hid: 'og:type', property: 'og:type', content: payload.type })
  }

  useNuxt2Meta({
    title: payload.title,
    meta
  })
}
