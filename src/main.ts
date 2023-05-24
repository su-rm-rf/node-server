import 'dotenv/config'

import Koa from 'koa'
import cors from 'koa2-cors'
import KoaBody from 'koa-body'

import { DB_Initialize } from './db'
import router from './router'

import log from './middlewares/log'
import session from './middlewares/session'

DB_Initialize().then(() => {
  const server = new Koa()

  server.use(cors({
    origin: ctx => {
      const origins = process.env.ALLOWED_ORIGINS
      const origin = ctx.header.referer?.substring(0, ctx.header.referer.length - 1) || ''
      console.log(ctx.header.referer, origin)
      if (origins?.includes(origin)) {
        return origin
      }
      return ''
    },
    exposeHeaders: [''],
    maxAge: 1000,
    credentials: true,
    allowMethods: ['get', 'set'],
    allowHeaders: ['Content-Type'],
  }))
  server.use(KoaBody())

  server.use(log())
  server.use(session())

  server.use(router.routes()).use(router.allowedMethods())
  
  const PORT = Number(process.env.PORT)
  server.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
  })
})
.catch(err => console.log(err))