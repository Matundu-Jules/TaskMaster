import { createTodoElement } from './createTodoElement.js'

// Get list of todo elements
const todosListElem = document.querySelector('ul')

// Display todos
export const displayTodos = (todosArray) => {
    // Convert array of todos in node
    const todosNode = todosArray.map((todo, index) => {
        return createTodoElement(todo, index)
    })

    // Clear existing content from todo list
    todosListElem.innerHTML = ''

    // Add elements in DOM
    todosListElem.append(...todosNode)
}
