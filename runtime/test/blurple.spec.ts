import { describe } from 'mocha'
import { expect } from 'chai'
import Blurple from '#src/blurple'
import axios from 'axios'

let blurple: Blurple
beforeEach(() => {
  blurple = new Blurple()
  blurple.start()
})

afterEach(() => {
  blurple.stop()
})

describe('Blurple', () => {
  describe('HTTP server', () => {
    it('listens to HTTP connections', () => {
      const response = axios(`${blurple.httpUrl}/api/users/@me`)
      return expect(response).to.eventually.be.rejectedWith(/status code 401/)
    })
  })

  describe('Authentication', () => {
    it('can return a valid bot token', async () => {
      // const token = blurple.repositories.bots.create().token

      // const response = await fetch(blurple.HttpUrl)
      // return expect(response.ok).to.be.true
    })
  })
})
