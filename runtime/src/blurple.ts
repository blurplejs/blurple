import { Subscription } from 'rxjs'
import HttpServer from './http/server'
import User from './resources/user'
import Repository from './utils/repository'
import { snowflake } from './utils/snowflake'

export default class Blurple {
  httpServer: HttpServer
  protected repositorySubscription?: Subscription

  public tokens: Record<string, snowflake> = {}

  constructor () {
    this.httpServer = new HttpServer(this)

    this.tokens = {}
    this.repositorySubscription = Repository.get().subscribe((identifiable) => {
      if (identifiable.constructor.name !== 'User') return

      const token = (identifiable as User).token
      if (token === null) return

      this.tokens[token] = identifiable.id
    })
  }

  start (): void {
    this.httpServer.listen()

    this.tokens = {}
  }

  stop (): void {
    this.httpServer.close()
  }

  get httpUrl (): string {
    return this.httpServer.httpUrl
  }
}
