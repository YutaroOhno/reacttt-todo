import { ITodo } from '../models/Itodo'
import { ItodoRepo } from './repositories/todo';

export interface ItodoUsecase {
  fetchTodos: () => ITodo[]
  repo: ItodoRepo
}
