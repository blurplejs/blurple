import { describe } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import getGiven from 'givens'
import * as Koa from 'koa'
import createMockContext from '#test/support/createMockContext'
import { authentication } from '#src/http/middleware/authentication'
import UserFactory from '#src/factories/user'
import { KoaContext, KoaState } from '#src/http/server'
import Blurple from '#src/blurple'

describe('HTTP authentication middleware', () => {
  const given = getGiven<{ context: Promise<object> | object }>()

  let ctx: Koa.ParameterizedContext<KoaState, KoaContext>
  const next: Koa.Next = sinon.spy()

  beforeEach(async () => {
    const defaultContext = { customProperties: { blurple: new Blurple() } }
    ctx = createMockContext({ ...(await given.context), ...defaultContext })
  })

  context('without headers', () => {
    it('responds with a 401 error', () => {
      return expect(authentication(ctx, next)).to.eventually.be.rejectedWith('Unauthorized')
    })
  })

  context('with an invalid authorization header', () => {
    given('context', () => ({ headers: { Authorization: 'foobar' } }))

    it('responds with a 401 error', () => {
      return expect(authentication(ctx, next)).to.eventually.be.rejectedWith('Unauthorized')
    })
  })

  context('with an invalid token', () => {
    given('context', () => ({ headers: { Authorization: 'Bot token' } }))

    it('responds with a 401 error', () => {
      return expect(authentication(ctx, next)).to.eventually.be.rejectedWith('Unauthorized')
    })
  })

  context('with a valid token', () => {
    given('context', async () => {
      const bot = await UserFactory.create({ bot: true })
      return { headers: { Authorization: `Bot ${bot.token!}` } }
    })

    it('does not respond with a 401 error', () => {
      expect(() => authentication(ctx, next)).not.to.throw('Unauthorized')
    })

    it('calls the next method in the callback chain', () => {
      authentication(ctx, next)

      return expect(next).to.have.been.called
    })
  })
})
