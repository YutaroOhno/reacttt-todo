import { ItodoUsecase } from '../../usecases/Itodo'
import TodoList from '../presentationals/todoList'
import TodoListVm  from '../../viewModels/todolistVm'
import TodoVm from '../../viewModels/todoVm'

type Props = {
  usecase: ItodoUsecase
}

const Todos = ({usecase}: Props) => {
  // エラーハンドリングしてねー
  const todoVms = usecase.fetchTodos().map((todo) => {
    return new TodoVm(todo)
  })
  const todoListVm = new TodoListVm(todoVms)

  return (
    <TodoList todoList={todoListVm} />
  )
}
export default Todos
