import { createTodoEditElement } from './editTodo.js'
import { createTodoElement } from './createTodoElement.js'

// Get list of todo elements
const todosListElem = document.querySelector('ul')

// Display todos
export const displayTodos = (todosArray) => {
    // Convert array of todos in node
    const todosNode = todosArray.map((todo, index) => {
        if (todo.editMode) {
            return createTodoEditElement(todo, index, todosArray)
        } else {
            return createTodoElement(todo, index, todosArray)
        }
    })

    // Clear existing content from todo list
    todosListElem.innerHTML = ''

    // Add elements in DOM
    todosListElem.append(...todosNode)
}
