import Identifiable from '#src/types/identifiable'
import Repository from '#src/utils/repository'
import { Factory } from 'fishery'

type GeneratorParameters<C, T = {}> = Parameters<typeof Factory.define<Partial<C>, T, C>>
type GeneratorType<C, T = {}> = ReturnType<typeof Factory.define<C, T, C>>

/**
 * Custom factory generator function that defines a default `onCreate` method in order to
 * fill a given class with the generated attributes.
 *
 * @param Ctor The constructor of the generated class
 * @param generator The generator function
 * @returns The configured factory
 */
export default function defineFactory<T extends Identifiable, I = {}> (
  Ctor: new() => T,
  generator: GeneratorParameters<T, I>[0],
): GeneratorType<T, I> {
  return Factory.define<T>(args => {
    args.onCreate(object => Repository.get().add(object))

    const attributes = { ...generator(args), ...args.params }
    return Object.assign(new Ctor(), attributes)
  })
}
