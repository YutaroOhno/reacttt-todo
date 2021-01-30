import { ITodoVm } from './ItodoVm'
import { ITodo as ITodoM } from '../models/Itodo'

export default class TodoVm {
  id: number
  title: string
  body: string
  done: boolean

  constructor(todo: ITodoM) {
    this.id = todo.id
    this.title = todo.title
    this.body = todo.body
    this.done = todo.done
  }

  public getTitle(): ITodoVm['title'] {
    return this.title
  }

  public getBody(): ITodoVm['body'] {
    return this.body
  }

  public isDone(): ITodoVm['done'] {
    return this.done
  }

  public getTitleCount(): number {
    return this.title.length
  }

  public getBodyCount = (): number => {
    return this.body.length
  }

}

