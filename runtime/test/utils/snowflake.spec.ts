import { describe } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import Snowflake from '#src/utils/snowflake'

let clock: sinon.SinonFakeTimers
beforeEach(() => {
  clock = sinon.useFakeTimers({ now: Date.UTC(2016, 3, 30, 11, 18, 25, 796) })
  Snowflake.INCREMENT_COUNTER = 0
})

afterEach(() => {
  clock.restore()
})

describe('Snowflake', () => {
  it('can be constructed', () => {
    const snowflake = new Snowflake()
    expect(snowflake).to.be.an('object')
  })

  it('returns its timestamp', () => {
    const snowflake = new Snowflake()

    // Taken from the Discord snowflake documentation example
    expect(snowflake.timestamp).to.equal(41944705796)
  })

  it('returns its default internal worker ID', () => {
    const snowflake = new Snowflake()
    expect(snowflake.internalWorkerID).to.equal(1)
  })

  it('returns its default internal process ID', () => {
    const snowflake = new Snowflake()
    expect(snowflake.internalProcessID).to.equal(1)
  })

  it('allows to specify a custom internal worker ID', () => {
    const snowflake = new Snowflake(5)
    expect(snowflake.internalWorkerID).to.equal(5)
  })

  it('allows to specify a custom internal process ID', () => {
    const snowflake = new Snowflake(2, 5)
    expect(snowflake.internalProcessID).to.equal(5)
  })

  it('returns its increment for the first snowflake', () => {
    const snowflake = new Snowflake()

    expect(snowflake.increment).to.equal(1)
  })

  it('returns its increment for the second snowflake', () => {
    Snowflake.INCREMENT_COUNTER++
    const snowflake = new Snowflake()

    expect(snowflake.increment).to.equal(2)
  })

  describe('.descriptor', () => {
    it('can retrieve the timestamp', () => {
      const snowflake = new Snowflake().descriptor

      expect((snowflake >> 22n) + BigInt(Snowflake.DISCORD_EPOCH)).to.equal(1462015105796n)
    })

    it('can retrieve the internal worker id', () => {
      const snowflake = new Snowflake(3, 5).descriptor

      expect((snowflake & 0x3E0000n) >> 17n).to.equal(3n)
    })

    it('can retrieve the internal process id', () => {
      const snowflake = new Snowflake(3, 5).descriptor

      expect((snowflake & 0x1F000n) >> 12n).to.equal(5n)
    })

    it('can retrieve the increment', () => {
      const snowflake = new Snowflake(3, 5).descriptor

      expect(snowflake & 0xFFFn).to.equal(1n)
    })
  })
})
