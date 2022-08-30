export type TEnv = {
  nodeEnv: 'development'|'staging'|'production'
  apiSecret: string
  public: {
    baseURL: string
  }
}

export const NUXT_ENV:string = process.env.NUXT_ENV || 'development'
export const env:TEnv = require(`./.env.${NUXT_ENV}.ts`).default

console.log(env)
