import HttpServer from './http/server'

export default class Blurple {
  httpServer: HttpServer

  constructor () {
    this.httpServer = new HttpServer()
  }

  start (): void {
    this.httpServer.listen()
  }

  stop (): void {
    this.httpServer.close()
  }

  get httpUrl (): string {
    return this.httpServer.httpUrl
  }
}
