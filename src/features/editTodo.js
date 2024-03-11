import { displayTodos } from './displayTodos'

export const createTodoEditElement = (todo, index, todosArray) => {
    const li = document.createElement('li')

    // input element
    const input = document.createElement('input')
    input.type = 'text'
    input.value = todo.text
    input.style.flex = 'auto'

    // btn for cancel modification
    const btnCancel = document.createElement('button')
    btnCancel.innerHTML = 'Cancel'
    btnCancel.classList.add('btn', 'btn-cancel')

    btnCancel.addEventListener('click', (e) => {
        e.preventDefault()
        toggleEditMode(index, todosArray)
    })

    // btn for save modification
    const btnSave = document.createElement('button')
    btnSave.innerHTML = 'Save'
    btnSave.classList.add('btn', 'btn-save')

    btnSave.addEventListener('click', (e) => {
        e.preventDefault()
        editTodo(index, input, todosArray)
    })

    //
    li.append(input, btnCancel, btnSave)
    return li
}

// change the todo to edit mode and refresh the todo list display
export const toggleEditMode = (index, todosArray) => {
    todosArray[index].editMode = !todosArray[index].editMode
    displayTodos(todosArray)
}

const editTodo = (index, input, todosArray) => {
    const value = input.value.trim()
    const newValue = value.charAt(0).toUpperCase() + value.slice(1)

    todosArray[index].text = newValue
    todosArray[index].editMode = false
    displayTodos(todosArray)
}
