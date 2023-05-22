export default function() {
  return async (ctx, next) => {
    console.log('session start', ctx.req.url)
    await next()
    console.log('session end', ctx.res.outputData)
  }
}