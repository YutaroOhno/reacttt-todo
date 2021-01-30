import { ItodoRepo } from '../../usecases/repositories/todo'
import { ITodo } from '../../models/Itodo'

export default class TodoRepo implements ItodoRepo {

  public fetchTodos = (): ITodo[]  => {
    return [
      {
        id: 1,
        title: 'タイトル1',
        body: 'ボディ1',
        done: false
      }
    ]
  }

}
