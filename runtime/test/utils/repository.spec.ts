import { describe } from 'mocha'
import { expect } from 'chai'
import Repository from '#src/utils/repository'
import defineFactory from '#src/factories/define'
import User from '#src/types/user'

// Define a sample factory that we can use to test the repository
const factory = defineFactory<User, { suffix?: string }>(User, ({ params, transientParams }) => {
  return { username: `Blurple${transientParams.suffix ?? ''}`, ...params }
})

describe('Repository', () => {
  it('can be passed a factory', () => {
    const repository = new Repository(factory)
    expect(repository.factory).to.be.equal(factory)
  })

  describe('.create()', () => {
    it('creates a new object using the factory', () => {
      const repository = new Repository(factory)
      expect(repository.create()).to.be.an('object')
    })

    it('creates an object with expected properties', () => {
      const repository = new Repository(factory)
      expect(repository.create().username).to.be.equal('Blurple')
    })

    it('passes parameters to the factory', () => {
      const repository = new Repository(factory)
      expect(repository.create({ username: 'foobar' }).username).to.be.equal('foobar')
    })

    it('passes in transient params', () => {
      const repository = new Repository(factory)
      const buildOptions = { transient: { suffix: '-best' } }

      const createdUser = repository.create({}, buildOptions)
      expect(createdUser.username).to.be.equal('Blurple-best')
    })
  })
})
