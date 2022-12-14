export type snowflake = string

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
   * Creates a new snowflake and only returns its string representation. This will likely
   * be the main interface to work with Snowflakes, as oftentimes it isn't necessary to
   * extract any internal information from them.
   *
   * @returns the string representation of a new Snowflake
   */
  public static create (): string {
    return (new Snowflake()).toString()
  }

  /**
   * Generates the descriptor for the Snowflake.
   *
   * @returns A 64-bit integer representing the unique identifier of this Snowflake
   */
  get descriptor (): bigint {
    const value = BigInt(this.increment) +
                  (BigInt(this.internalProcessID) << 12n) +
                  (BigInt(this.internalWorkerID) << 17n) +
                  (BigInt(this.timestamp) << 22n)

    return BigInt.asUintN(64, value)
  }

  /**
   * Returns the Snowflake descriptor as a string so that it can be transmitted
   * as a string to clients that might not support 64-bit integers.
   *
   * @returns The snowflake descriptor as a string
   */
  public toString (): string {
    return this.descriptor.toString(10)
  }
}
