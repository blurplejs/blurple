import Router from '@koa/router'

export function defineRoutes (): Router {
  const router = new Router()
  router.get('/regions', () => {})

  return router
}
