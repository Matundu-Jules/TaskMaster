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

        // wait maj of dom for clic and dblclic focus on edit mode
        setTimeout(() => {
            document.querySelector('.input-todo-edit').focus()
        }, 200)
    })

    // span
    const span = document.createElement('span')
    span.classList.add('todo')
    if (todo.done) span.classList.add('done')

    // p
    const p = document.createElement('p')
    p.classList.add('todo-text')
    if (todo.done) p.classList.add('todo-text-done')
    p.innerText = todo.text

    // event click on li :  toggle state of todo
    let doubleClickDetected = false
    li.addEventListener('click', (e) => {
        e.stopPropagation()

        if (!doubleClickDetected) {
            setTimeout(() => {
                toggleTodo(todosArray, index)
            }, 200)
        }

        doubleClickDetected = false
    })

    // edit on double click
    li.addEventListener('dblclick', (e) => {
        doubleClickDetected = true
        editBtn.dispatchEvent(new Event('click'))
    })

    li.addEventListener('mouseover', (e) => {
        li.style.background = '#eee'
        if (!todo.done) {
            span.style.background = '#0a0903'
        }
    })

    li.addEventListener('mouseout', (e) => {
        li.style.background = '#fff'
        if (!todo.done) {
            span.style.background = '#fff'
        }
    })

    // add btn to dom
    li.append(span, p, editBtn, deleteBtn)

    return li
}
