import { deleteTodo } from './deleteTodo.js'

// Convert todo in html element
export const createTodoElement = (todo, index, todosArray) => {
    // Create HTML element
    const li = document.createElement('li')

    // create delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Supprimer'
    deleteBtn.classList.add('btn', 'btn-delete')

    // click event on delete btn
    deleteBtn.addEventListener('click', (e) => deleteTodo(todosArray, index))

    // Define content of html element
    li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p class="todo-text ${todo.done ? 'todo-text-done' : ''}">${todo.text}</p>
    `

    // add btn to dom
    li.append(deleteBtn)

    return li
}
