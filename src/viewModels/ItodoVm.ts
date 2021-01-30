export type ITodoVm = {
  id: number
  title: string
  body: string
  done: boolean
  getTitle(): ITodoVm['title']
  getBody(): ITodoVm['body']
  isDone(): ITodoVm['done']
  getTitleCount(): number
  getBodyCount(): number
}
  