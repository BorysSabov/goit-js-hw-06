// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение 
// в span#name - output.Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".

  const refs = {
    inputEl: document.querySelector('input#name-input'),
    nameLabelEl: document.querySelector('span#name-output'),
};

refs.inputEl.addEventListener('input', OnInputChange);

function OnInputChange(event) { 
    refs.nameLabelEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value  === '') {
        refs.nameLabelEl.textContent = 'Anonymous';  
    } 
};



