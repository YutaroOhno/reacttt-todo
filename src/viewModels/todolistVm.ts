import { ITodo } from '../models/Itodo'

export default class TodoListVm {
  todos: any

  constructor(todos: ITodo[]) {
    this.todos = todos
  }

}

