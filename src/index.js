import './style.css'

// Get html elements
const todosListElem = document.querySelector('ul')

// Array of todos
const todos = [
    {
        text: "I'm a todo",
        done: false,
    },
    {
        text: 'Todo done',
        done: true,
    },
]

// Display todos
const displayTodo = (todosArray) => {
    // Convert array of todos in node
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index)
    })

    console.log('todosNode : ', todosNode)
    console.log('...todosNode : ', ...todosNode)

    // Clear existing content from todo list
    todosListElem.innerHTML = ''

    // Add elements in DOM
    todosListElem.append(...todosNode)
}

// Convert todo in html element
const createTodoElement = (todo, index) => {
    // Create HTML element
    const li = document.createElement('li')

    // Define content of html element
    li.innerHTML = `
    <span class="todo ${todo.done ? 'done' : ''}"></span>
    <p>${todo.text}</p>
    <button class="btn btn-delete">Supprimer</button>
    `

    return li
}

displayTodo()
