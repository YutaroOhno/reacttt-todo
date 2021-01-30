import { ITodoVm } from '../../viewModels/ItodoVm'

type Props = {
  todo: ITodoVm
}

const Todo = ({todo}: Props) => {
  return (
    <main>
      <sub>
        <p>タイトル： {todo.getTitle()}</p>
        <p>カウント: {todo.getTitleCount()}</p>
      </sub>
      <sub>
        <p>内容： {todo.getBody()}</p>
        <p>カウント: {todo.getBodyCount()}</p>
      </sub>
      <sub>
        <p>完了： {todo.isDone() ? '◯' : '×'}</p>
      </sub>
    </main>
  )
}

export default Todo
