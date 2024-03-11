import { deleteTodo } from './deleteTodo.js'
import { toggleEditMode } from './editTodo.js'
import { toggleTodo } from './toggleTodo.js'

// Convert todo in html element
export const createTodoElement = (todo, index, todosArray) => {
    // Create HTML element
    const li = document.createElement('li')

    // create delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.classList.add('btn', 'btn-delete')

    // create modify btn
    const editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    editBtn.classList.add('btn', 'btn-edit')

    // click event on delete btn
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        deleteTodo(todosArray, index)
    })

    // click event on edit btn
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        toggleEditMode(index, todosArray)
    })

    // Define content of html element
    li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p class="todo-text ${todo.done ? 'todo-text-done' : ''}">${todo.text}</p>
    `

    // event click on li :  toggle state of todo
    li.addEventListener('click', (e) => {
        toggleTodo(todosArray, index)
    })

    // add btn to dom
    li.append(editBtn, deleteBtn)

    return li
}
