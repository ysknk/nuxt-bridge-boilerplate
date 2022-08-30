import { gtm } from './nuxt.config.analytics'

export const url:string = 'https://example.com'
export const title:string = 'nuxt-bridge-boilerplate'
export const description:string =  'nuxt-bridge-boilerplate'
export const keywords:string[] =  ['']

export const meta = [
  { hid: 'charset', charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'format-detection', content: 'telephone=no' },
  { hid: 'description', name: 'description', content: description },
  { hid: 'keywords', name: 'keywords', content: keywords.join(',') },

  { hid: 'canonical', name: 'canonical', content: url },

  { hid: 'og:title', name: 'og:title', content: title },
  { hid: 'og:type', name: 'og:type', content: 'article' },
  { hid: 'og:description', name: 'og:description', content: description },
  { hid: 'og:url', name: 'og:url', content: url },
  { hid: 'og:site_name', name: 'og:site_name', content: title },

  { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
]

export default {
  title,

  meta,

  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  script: [
    gtm.id && {
      hid: 'gtm-head',
      innerHTML: gtm.head
    }
  ],
  noscript: [
    gtm.id && {
      hid: 'gtm-body',
      innerHTML: gtm.body,
      pbody: true
    }
  ],
  __dangerouslyDisableSanitizersByTagID: {
    'gtm-head': ['innerHTML'],
    'gtm-body': ['innerHTML']
  }
}
