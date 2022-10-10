import Router from '@koa/router'

export function defineRoutes (): Router {
  const router = new Router()

  router.post('/', () => {})
  router.get('/:id', () => {})
  router.patch('/:id', () => {})
  router.delete('/:id', () => {})

  router.get('/:id/preview', () => {})

  router.get('/:id/channels', () => {})
  router.post('/:id/channels', () => {})
  router.patch('/:id/channels', () => {})

  router.get('/:id/threads/active', () => {})

  router.get('/:id/members/:user_id', () => {})
  router.get('/:id/members', () => {})
  router.get('/:id/members/search', () => {})
  router.put('/:id/members/:user_id', () => {})
  router.patch('/:id/members/:user_id', () => {})
  router.patch('/:id/members/@me', () => {})
  router.patch('/:id/members/@me/nick', () => {})
  router.put('/:id/members/:user_id/roles/:role_id', () => {})
  router.delete('/:id/members/:user_id/roles/:role_id', () => {})
  router.delete('/:id/members/:user_id', () => {})

  router.get('/:id/bans', () => {})
  router.get('/:id/bans/:user_id', () => {})
  router.put('/:id/bans/:user_id', () => {})
  router.delete('/:id/bans/:user_id', () => {})

  router.get('/:id/roles', () => {})
  router.post('/:id/roles', () => {})
  router.patch('/:id/roles', () => {})
  router.patch('/:id/roles/:role_id', () => {})
  router.delete('/:id/roles/:role_id', () => {})

  router.post('/:id/mfa', () => {})

  router.get('/:id/prune', () => {})
  router.post('/:id/prune', () => {})

  router.get('/:id/regions', () => {})

  router.get('/:id/invites', () => {})
  router.get('/:id/integrations', () => {})
  router.delete('/:id/integrations/:integration_id', () => {})

  router.get('/:id/widget', () => {})
  router.patch('/:id/widget', () => {})
  router.get('/:id/widget.json', () => {})
  router.get('/:id/widget.png', () => {})

  router.get('/:id/vanity-url', () => {})

  router.get('/:id/welcome-screen', () => {})
  router.patch('/:id/welcome-screen', () => {})

  router.patch('/:id/voice-states/@me', () => {})
  router.patch('/:id/voice-states/:user_id', () => {})

  router.get(':id/emojis', () => {})
  router.post(':id/emojis', () => {})
  router.get(':id/emojis/:emoji_id', () => {})
  router.patch(':id/emojis/:emoji_id', () => {})
  router.delete(':id/emojis/:emoji_id', () => {})

  return router
}
