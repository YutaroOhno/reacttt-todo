import React, { useEffect, useContext } from 'react'
import Todo from './todo'
import {ITodoList} from '../../viewModels/ItodoListVm'

type Props = {
  todoList: ITodoList
}

const TodoList = ({todoList}: Props) => {
  return (
    <>
      {
        todoList.todos.map((todo) => {
          return <Todo todo={todo} />
        })
      }
    </>
  )
}


export default TodoList
