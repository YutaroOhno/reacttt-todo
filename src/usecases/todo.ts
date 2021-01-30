import { ItodoRepo } from './repositories/todo'
import { ItodoUsecase } from './Itodo'

export default class Todo implements ItodoUsecase{
  repo: ItodoRepo

  constructor(todoRepo: ItodoRepo) {
    this.repo = todoRepo
  }

  public fetchTodos = () => {
    return this.repo.fetchTodos()
  }

}
