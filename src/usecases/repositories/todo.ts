import { ITodo } from '../../models/Itodo'

export interface ItodoRepo {
  fetchTodos: () => ITodo[]
}
