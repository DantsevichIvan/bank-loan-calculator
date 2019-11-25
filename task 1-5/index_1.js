(function () {
    var textInput = document.getElementById('name_input')
    var current_val = 'Xxxx'
    textInput.addEventListener('input', function () {
        if (textInput.value !== current_val)
            textInput.classList.add('red')
        else if (textInput.value === current_val)
            textInput.classList.remove('red')
    })
})()