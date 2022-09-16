/**
 * @see https://discord.com/developers/docs/reference#snowflakes
 */
export default class Snowflake {
  /**
   * The number of milliseconds between Unix epoch and Discord epoch
   * (representing the first second of 2015).
   */
  public static readonly DISCORD_EPOCH: number = 1420070400000

  /**
   * The global increment, which is increased every time a new Snowflake is created.
   */
  public static INCREMENT_COUNTER: number = 0

  /**
   * The milliseconds elapsed since Discord Epoch, the first second of 2015,
   * or 1420070400000 in Unix Epoch.
   */
  public timestamp: number

  /**
   * Represents the current value of the increment. Each time a new Snowflake
   * is generated in a process, this increment is increased.
   */
  public increment: number

  constructor (public internalWorkerID: number = 1, public internalProcessID: number = 1) {
    this.timestamp = Date.now() - Snowflake.DISCORD_EPOCH
    this.increment = ++Snowflake.INCREMENT_COUNTER
  }

  /**
   * Generates the descriptor for the Snowflake.
   *
   * @return A 64-bit integer representing the unique identifier of this Snowflake
   */
  get descriptor (): BigInt {
    const value = BigInt(this.increment) +
                  (BigInt(this.internalProcessID) << 12n) +
                  (BigInt(this.internalWorkerID) << 17n) +
                  (BigInt(this.timestamp) << 22n)

    return BigInt.asUintN(64, value)
  }
}
