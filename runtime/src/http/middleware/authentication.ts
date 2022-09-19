import { BlurpleMiddleware } from '../server'

export const authentication: BlurpleMiddleware = async (ctx, next) => {
  if (typeof ctx.headers.authorization === 'undefined') return ctx.throw(401)

  const [type, token] = ctx.headers.authorization.split(' ', 2)

  const userSnowflake = ctx.blurple.tokens[token]
  if (type === 'Bot' && userSnowflake) {
    return await next()
  }

  ctx.throw(401)
}
