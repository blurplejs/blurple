import { describe } from 'mocha'
import { expect } from 'chai'
import defineFactory from '#src/factories/define'
import User from '#src/types/user'
import Repository from '#src/utils/repository'

// Define a sample factory that we can use to test the repository
const factory = defineFactory<User, { suffix?: string }>(User, ({ params, transientParams }) => {
  return { username: `Blurple${transientParams.suffix ?? ''}`, ...params }
})

describe('defineFactory', () => {
  beforeEach(() => Repository.get().reset())

  describe('.build()', () => {
    it('returns a user', () => {
      expect(factory.build()).to.be.an('object')
      expect(factory.build().username).to.be.equal('Blurple')
    })

    it('passes transient parameters to the underlying factory', () => {
      expect(factory.build({}, { transient: { suffix: '.' } }).username).to.be.equal('Blurple.')
    })

    it('does not store the entity in the repository', () => {
      expect(() => factory.build()).not.to.change(Repository.get(), 'count')
    })
  })

  describe('.create()', () => {
    it('returns a user', async () => {
      const user = await factory.create()

      expect(user).to.be.an('object')
      expect(user.username).to.be.equal('Blurple')
    })

    it('passes transient parameters to the underlying factory', async () => {
      const user = await factory.create({}, { transient: { suffix: '.' } })

      expect(user.username).to.be.equal('Blurple.')
    })

    it('stores the entity in the repository', async () => {
      expect(Repository.get().count).to.be.equal(0)
      await factory.create()
      expect(Repository.get().count).to.be.equal(1)
    })
  })
})
