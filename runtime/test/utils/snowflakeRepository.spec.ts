import { describe } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import SnowflakeRepository from '#src/utils/snowflakeRepository'
import UserFactory from '#src/factories/user'
import Snowflake from '#src/utils/snowflake'

const repository = SnowflakeRepository.get()
beforeEach(() => {
  repository.reset()
})

describe('SnowflakeRepository', () => {
  describe('#get()', () => {
    it('always returns the same repository', () => {
      expect(SnowflakeRepository.get()).to.be.equal(repository)
    })
  })

  describe('.add()', () => {
    it('increases the count for every item added', () => {
      const user = UserFactory.build()

      expect(repository.count).to.be.equal(0)
      repository.add(user)
      expect(repository.count).to.be.equal(1)
    })

    it('allows to add multiple items', () => {
      const userA = UserFactory.build()
      const userB = UserFactory.build()

      repository.add(userA)
      repository.add(userB)
      expect(repository.count).to.be.equal(2)
    })

    it('only adds identical items once', () => {
      const user = UserFactory.build()

      repository.add(user)
      repository.add(user)
      expect(repository.count).to.be.equal(1)
    })
  })

  describe('.fetch()', () => {
    it('returns null if no item exists', () => {
      expect(repository.fetch(Snowflake.create())).to.be.equal(null)
    })

    it('returns the correct object for a snowflake', () => {
      const user = UserFactory.build()

      repository.add(user)
      expect(repository.fetch(user.id)).to.be.equal(user)
    })

    it('returns the last object that was added for a given snowflake', () => {
      const user = UserFactory.build()
      const anotherUser = UserFactory.build({ id: user.id })

      repository.add(user)
      repository.add(anotherUser)
      expect(repository.fetch(user.id)).to.be.equal(anotherUser)
    })
  })

  describe('.subscribe()', () => {
    it('notifies when an object has been added', () => {
      const spy = sinon.spy()
      repository.subscribe(spy)

      const user = UserFactory.build()
      repository.add(user)

      expect(spy).to.have.been.calledWith(user)
    })
  })
})
