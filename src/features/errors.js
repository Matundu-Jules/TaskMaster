export const errorEmptyInput = () => {
    const form = document.querySelector('form')
    const input = document.querySelector('input')

    const errorMsgExist = document.querySelectorAll('.error-empty-msg')

    if (errorMsgExist.length === 0) {
        const errorMsg = document.createElement('p')
        errorMsg.innerHTML = 'Insert your task please.'
        errorMsg.classList.add('error', 'error-empty-msg')
        form.insertAdjacentElement('afterend', errorMsg)
        input.focus()
    } else {
        input.focus()
    }
}

export const deleteErrorEmptyInput = () => {
    const errorMsg = document.querySelector('.error-empty-msg')

    if (errorMsg) {
        errorMsg.remove()
    } else {
        return undefined
    }
}
