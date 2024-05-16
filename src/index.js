import './style.css'
import { displayTodos } from './features/displayTodos.js'
import { addTodo } from './features/addTodo.js'
import { deleteErrorEmptyInput, errorEmptyInput } from './features/errors.js'

// Get form and input element
const form = document.querySelector('form')
const input = document.querySelector('form > input')

// Array of todos
const todos = [
    {
        text: 'Ma première tâche',
        done: false,
        editMode: true,
    },
    {
        text: 'Tâche terminée',
        done: true,
        editMode: false,
    },
]

// Display todos
displayTodos(todos)

// submit event on form
form.addEventListener('submit', (e) => {
    e.preventDefault() // Delete default comportement

    // verify if the input is empty
    if (input.value.trim() === '') {
        // set error msg
        errorEmptyInput()
    } else {
        // delete error msg if exist
        deleteErrorEmptyInput()

        // Save input value and clear input
        const value = input.value.trim()

        // Set first character to uppercase
        const newValue = value.charAt(0).toUpperCase() + value.slice(1)

        // clear input
        input.value = ''

        // Add the new todo in the todos array
        addTodo(todos, newValue)

        // Refresh todo list
        displayTodos(todos)

        // Set focus on input
        input.focus()
    }
})
