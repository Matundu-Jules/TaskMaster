import { displayTodos } from './displayTodos'

export const createTodoEditElement = (todo, index, todosArray) => {
    const li = document.createElement('li')

    // input element
    const input = document.createElement('input')
    input.type = 'text'
    input.value = todo.text
    input.classList.add('input-todo-edit')

    // btn for cancel modification
    const btnCancel = document.createElement('button')
    btnCancel.innerHTML = 'Cancel'
    btnCancel.classList.add('btn', 'btn-cancel')

    btnCancel.addEventListener('click', (e) => {
        e.preventDefault()
        todosArray[index].editMode = false
        displayTodos(todosArray)
    })

    // btn for save modification
    const btnSave = document.createElement('button')
    btnSave.innerHTML = 'Save'
    btnSave.classList.add('btn', 'btn-save')

    btnSave.addEventListener('click', (e) => {
        e.preventDefault()
        editTodo(index, input, todosArray)
    })

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') btnSave.dispatchEvent(new Event('click'))

        if (e.key === 'Escape') btnCancel.dispatchEvent(new Event('click'))
    })

    // add elements to dom
    li.append(input, btnCancel, btnSave)

    return li
}

// change the todo to edit mode and refresh the todo list display
export const toggleEditMode = (index, todosArray) => {
    // verify if another todo is in edit mode
    const otherEditingIndex = todosArray.findIndex((todo, i) => todo.editMode && i !== index)

    // exit edit mode in another todo if exist
    if (otherEditingIndex !== -1) {
        todosArray[otherEditingIndex].editMode = false
    }

    // toggle edit mode for actual todo
    todosArray[index].editMode = !todosArray[index].editMode

    // refresh todos
    displayTodos(todosArray)
}

const editTodo = (index, input, todosArray) => {
    input.focus()
    const value = input.value.trim()
    const newValue = value.charAt(0).toUpperCase() + value.slice(1)

    todosArray[index].text = newValue
    todosArray[index].editMode = false
    displayTodos(todosArray)
}
