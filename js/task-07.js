
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs ={ 
    input: document.querySelector('input#font-size-control'),
    span: document.querySelector('span#text'),
};
// console.log(refs);

refs.input.addEventListener('input',onInputChangeSize);

function onInputChangeSize(event) { 
    refs.span.style.fontSize = event.currentTarget.value + 'px';
};
