import Repository from '#src/utils/repository'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import 'givens/setup'

chai.use(chaiAsPromised)
chai.use(sinonChai)

const repository = Repository.get()
beforeEach(() => {
  repository.reset()
})
