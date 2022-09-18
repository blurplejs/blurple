import { describe } from 'mocha'
import { expect } from 'chai'
import UserFactory from '#src/factories/user'

describe('User', () => {
  describe('.token', () => {
    context('with a non-bot user', () => {
      it('does not return a token', () => {
        const user = UserFactory.build({ bot: false })
        expect(user.token).to.be.equal(null)
      })
    })

    context('with a bot user', () => {
      it('returns a string token', () => {
        const user = UserFactory.build({ bot: true })
        expect(user.token).to.be.a('string')
      })

      it('returns a string token of length 59', () => {
        const user = UserFactory.build({ bot: true })
        expect(user.token!.length).to.be.equal(59)
      })

      it('returns the same token for users with the same ID', () => {
        const firstUser = UserFactory.build({ bot: true })
        const secondUser = UserFactory.build({ bot: true, id: firstUser.id })

        expect(firstUser.token).to.be.equal(secondUser.token)
      })

      it('returns different tokens for users with different IDs', () => {
        const firstUser = UserFactory.build({ bot: true })
        const secondUser = UserFactory.build({ bot: true })

        expect(firstUser.id).to.not.be.equal(secondUser.id)
        expect(firstUser.token).to.not.be.equal(secondUser.token)
      })
    })
  })
})
