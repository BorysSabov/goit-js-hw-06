// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение 
// в span#name - output.Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".

  const refs = {
    input: document.querySelector('input#name-input'),
    nameLabel: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', (event) => {
    if (event !== '') {
        refs.nameLabel.textContent = event.currentTarget.value;
        
    } else {
        refs.nameLabel.textContent.add('Anonymous');
    };
});

// Как без обновления страницы 
// добиться возвращения слова Anonymous? 
// Пробовал с length, но не пойму как его применить.