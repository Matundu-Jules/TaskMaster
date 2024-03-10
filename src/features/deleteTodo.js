import { displayTodos } from './displayTodos.js'

// delete todo
export const deleteTodo = (todosArray, index) => {
    todosArray.splice(index, 1)
    displayTodos(todosArray)
}
