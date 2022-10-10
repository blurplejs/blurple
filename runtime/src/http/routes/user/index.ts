import Router from '@koa/router'

export function defineRoutes (): Router {
  const router = new Router()

  router.get('/@me', (ctx, next) => { ctx.status = 401 })
  router.patch('/@me', () => {})
  router.get('/:id', () => {})

  router.get('/@me/guilds', () => {})
  router.get('/@me/guilds/:guild_id', () => {})
  router.delete('/@me/guilds/:guild_id/member', () => {})

  router.post('/@me/channels', () => {})
  router.get('/@me/connections', () => {})

  return router
}
