import { BuildOptions, Factory, type DeepPartial } from 'fishery'

// import * as Factory from '../factories'

// type FactoryKeys = keyof typeof Factory
// type FactoryType<F extends FactoryKeys> = typeof Factory[F] extends FactoryTypes<any, any, infer T> ? T : never

export default class Repository<ModelType, T> {
  constructor (public readonly factory: Factory<ModelType, T>) {
  }

  create (params?: DeepPartial<ModelType>, buildOptions?: BuildOptions<ModelType, T>): ModelType {
    return this.factory.build(params, buildOptions)
  }
}
