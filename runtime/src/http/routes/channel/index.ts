import Router from '@koa/router'

export function defineRoutes (): Router {
  const router = new Router()

  router.get('/:id', () => {})
  router.patch('/:id', () => {})
  router.delete('/:id', () => {})

  router.get('/:id/messages', () => {})
  router.get('/:id/messages/:message_id', () => {})
  router.post('/:id/messages', () => {})
  router.post('/:id/messages/:message_id/crosspost', () => {})

  router.get('/:id/messages/:message_id/reactions', () => {})
  router.delete('/:id/messages/:message_id/reactions', () => {})
  router.delete('/:id/messages/:message_id/reactions/:emoji', () => {})
  router.put('/:id/messages/:message_id/reactions/:emoji/@me', () => {})
  router.delete('/:id/messages/:message_id/reactions/:emoji/@me', () => {})
  router.delete('/:id/messages/:message_id/reactions/:emoji/:user_id', () => {})

  router.patch('/:id/messages/:message_id', () => {})
  router.delete('/:id/messages/:message_id', () => {})
  router.delete('/:id/messages/bulk-delete', () => {})

  router.put('/:id/permissions/:overwrite_id', () => {})
  router.delete('/:id/permissions/:overwrite_id', () => {})

  router.get('/:id/invites', () => {})
  router.post('/:id/invites', () => {})

  router.post('/:id/followers', () => {})

  router.post('/:id/typing', () => {})

  router.get('/:id/pins', () => {})
  router.put('/:id/pins/:message_id', () => {})
  router.delete('/:id/pins/:message_id', () => {})

  router.put('/:id/recipients/:user_id', () => {})
  router.delete('/:id/recipients/:user_id', () => {})

  router.post('/:id/messages/:message_id/threads', () => {})
  router.post('/:id/threads', () => {})
  router.get('/:id/threads/archived/public', () => {})
  router.get('/:id/threads/archived/private', () => {})

  router.get('/:id/thread-members', () => {})
  router.get('/:id/thread-members/:user_id', () => {})
  router.put('/:id/thread-members/@me', () => {})
  router.put('/:id/thread-members/:user_id', () => {})
  router.delete('/:id/thread-members/@me', () => {})
  router.delete('/:id/thread-members/:user_id', () => {})

  router.get('/:id/users/@me/threads/archived/private', () => {})

  return router
}
