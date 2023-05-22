// http://shymean.com/article/koa%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%AF%BC%E8%87%B4%E6%8E%A5%E5%8F%A3404%E7%9A%84%E9%97%AE%E9%A2%98
export default function() {
  return async (ctx, next) => {
    console.log('log start', ctx.url)
    await next()
    console.log('log end', ctx.body)
  }
}