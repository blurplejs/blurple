import { describe } from 'mocha'
import { expect } from 'chai'
import HttpServer from '#src/http/server'
import { AddressInfo } from 'net'
import Blurple from '#src/blurple'

describe('HTTP API', () => {
  describe('.address', () => {
    const server = new HttpServer(new Blurple())

    context('without a running server', () => {
      it('returns null', () => {
        expect(server.address).to.be.equal(null)
      })
    })

    context('when the server is running', () => {
      beforeEach(() => server.listen())
      afterEach(() => server.close())

      it('returns an address', () => {
        expect(server.address).to.be.an('object')
      })

      it('returns a port within the address', () => {
        expect((server.address as AddressInfo).port).to.be.a('number')
      })
    })
  })
})
