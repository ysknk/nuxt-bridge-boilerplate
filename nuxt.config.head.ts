import { gtm } from './nuxt.config.analytics'
import { env } from './nuxt.config.env'

const baseURL = env.public.baseURL || '/'

export const url:string = `https://example.com${baseURL}`

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

  { hid: 'og:title', property: 'og:title', content: title },
  { hid: 'og:type', property: 'og:type', content: 'article' },
  { hid: 'og:description', property: 'og:description', content: description },
  { hid: 'og:url', property: 'og:url', content: url },
  { hid: 'og:site_name', property: 'og:site_name', content: title },

  { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
]

export default {
  title,

  meta,

  link: [{ rel: 'icon', type: 'image/x-icon', href: `${baseURL}favicon.ico` }],

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
