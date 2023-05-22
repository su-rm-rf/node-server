import Router from 'koa-router'

import todo from './todo'

const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = 'node-server'
})

router.use('/todo', todo.routes(), todo.allowedMethods())

export default router