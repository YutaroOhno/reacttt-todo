import { ITodo } from './Itodo' 
  
export default class Todo implements Readonly<ITodo> {
  id: number
  title: string
  body: string
  done: boolean

  constructor(todo: ITodo) {
    this.id = todo.id
    this.title = todo.title
    this.body = todo.body
    this.done = todo.done
  }
}

  