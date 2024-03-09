// Convert todo in html element
export const createTodoElement = (todo, index) => {
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
