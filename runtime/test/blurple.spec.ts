import { describe } from 'mocha'
import { expect } from 'chai'
import Blurple from '#src/blurple'
import * as Factory from '#src/factories/index'
import axios from 'axios'

describe('Blurple', () => {
  let blurple: Blurple
  beforeEach(() => {
    blurple = new Blurple()
    blurple.start()
  })

  afterEach(() => {
    blurple.stop()
  })

  describe('repository watching', () => {
    it('saves the token of bot users in its `tokens` record', async () => {
      const user = await Factory.user.create({ bot: true })

      expect(blurple.tokens).to.include({ [user.token as string]: user.id })
    })

    it('does not save anything regarding non-bot users in its `tokens` record', async () => {
      await Factory.user.create({ bot: false })

      return expect(blurple.tokens).to.be.empty
    })

    it('does not save anything regarding other entities in its `tokens` record', async () => {
      await Factory.guild.create()

      return expect(blurple.tokens).to.be.empty
    })
  })

  describe('.start()', () => {
    it('listens to HTTP connections', () => {
      const response = axios(`${blurple.httpUrl}/api/users/@me`)
      return expect(response).to.eventually.be.rejectedWith(/status code 401/)
    })
  })

  describe('.stop()', () => {
    it('calls Repository.reset()', () => {

    })
  })
})
