import { displayTodos } from './displayTodos.js'

// toggle state of todo
export const toggleTodo = (todosArray, index) => {
    todosArray[index].done = !todosArray[index].done
    displayTodos(todosArray)
}
