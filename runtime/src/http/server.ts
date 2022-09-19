import Koa, { DefaultState, Middleware } from 'koa'
import Router from '@koa/router'
import { type Server } from 'http'
import { type AddressInfo } from 'net'
import Blurple from '#src/blurple'

export type KoaState = DefaultState
export interface KoaContext {
  blurple: Blurple
}

export type BlurpleMiddleware = Middleware<KoaState, KoaContext>

export default class HttpServer {
  /**
   * The internally used Koa instance
   */
  private readonly app: Koa<KoaState, KoaContext>

  /**
   * The actively listening HTTP server instance. Is undefined if server is
   * not yet listening.
   */
  private httpServer?: Server

  /**
   * Construct a new HTTP server instance and configure its routes.
   */
  constructor (blurple: Blurple) {
    this.app = new Koa()
    this.app.context.blurple = blurple

    this.configureRouter()
  }

  /**
   * Configure the routes available for our Koa HTTP server.
   */
  private configureRouter (): void {
    const router = new Router()
    router.get('/api/users/@me', (ctx, next) => {
      ctx.status = 401
    })

    this.app
      .use(router.routes())
      .use(router.allowedMethods())
  }

  /**
   * Start listening for HTTP connections on a random available port.
   */
  listen (): void {
    this.httpServer = this.app.listen()
  }

  /**
   * Stop listening for HTTP connections if the HTTP server is already running.
   */
  close (): void {
    this.httpServer?.close()
  }

  /**
   * Returns the address information of the active HTTP server. If the server
   * is not yet running, it returns null.
   */
  get address (): string | AddressInfo | null {
    if (typeof this.httpServer === 'undefined') return null

    return this.httpServer.address()
  }

  /**
   * Returns the HTTP base URL for the running HTTP server.
   */
  get httpUrl (): string {
    const port = (this.address as AddressInfo).port
    return `http://localhost:${port}`
  }
}
