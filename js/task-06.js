// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.



const input = document.querySelector('input#validation-input');
console.log(input);



input.addEventListener('blur',onInputFocus);

function onInputFocus(event) {
    
    if (event.currentTarget.value.length != input.dataset.length) {
        return input.classList.add('invalid');
    }
    
    return input.classList.replace('invalid', 'valid');

}

