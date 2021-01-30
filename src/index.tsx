import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Todos from './components/containers/todos'
import todoUseCase from './usecases/todo'
import TodoRepo from './infra/repositories/todoMock'

const usecase = new todoUseCase(
  new TodoRepo()
)

ReactDOM.render(
  <React.StrictMode>
    <p>fdsfdsfds</p>
    <Todos usecase={usecase} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
