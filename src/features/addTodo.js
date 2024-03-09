// Adding todo in array of todos
export const addTodo = (todosArray, textTodo) => {
    todosArray.push({
        text: textTodo,
        done: false,
    })
}
