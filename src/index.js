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
        text: "I'm a todo",
        done: false,
        editMode: true,
    },
    {
        text: 'Todo done',
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
        input.value = ''

        // Add the new todo in the todos array
        addTodo(todos, value)

        // Refresh todo list
        displayTodos(todos)

        // Set focus on input
        input.focus()
    }
})
