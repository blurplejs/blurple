import { type snowflake } from './snowflake'
import { Observable, Subscriber, Subscription } from 'rxjs'
import Identifiable from '#src/types/identifiable'

export default class SnowflakeRepository extends Observable<Identifiable> {
  private subscriber: Subscriber<Identifiable>
  private subscription?: Subscription
  private entities: Record<snowflake, Identifiable>

  public static repository: SnowflakeRepository

  /**
   * Returns a shared repository instance or creates one if it hasn't previously been created.
   *
   * @returns the shared repository instance
   */
  public static get (): SnowflakeRepository {
    if (typeof SnowflakeRepository.repository !== 'undefined') return SnowflakeRepository.repository

    SnowflakeRepository.repository = new SnowflakeRepository()
    return SnowflakeRepository.repository
  }

  /**
   * Instantiates the new repository as an observable and resets its state.
   */
  private constructor () {
    super((subscriber) => {
      this.subscriber = subscriber
    })

    this.reset()
  }

  /**
   * Reset the repository state. This includes removing the default subscription
   * and re-creating it.
   */
  public reset (): void {
    this.entities = {}
    if (this.subscription) this.subscription.unsubscribe()

    // Subscribe to ourselves and store every object in the repository map
    this.subscription = this.subscribe((object) => {
      this.entities[object.id] = object
    })
  }

  /**
   * Return the number of entities currently stored in the repository
   */
  public get count (): number {
    return Object.keys(this.entities).length
  }

  /**
   * Adds a new object to the repository. If an object with the same ID already
   * exists within the repository, it will be overwritten.
   *
   * @param object The object to add
   * @returns The added object
   */
  public add<T extends Identifiable> (object: T): T {
    this.subscriber.next(object)

    return object
  }

  /**
   * Tries to fetch an entity with a given snowflake from the repository.
   *
   * @param snowflake The snowflake to fetch from the repository
   * @returns The entity represented by the given snowflake, if it exists
   */
  public fetch (snowflake: snowflake): Identifiable | null {
    const object = this.entities[snowflake]
    if (typeof object === 'undefined') return null

    return object
  }
}
