
// Счетчик состоит из спана и кнопок, которые, при клике, 
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и 
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
    
};

const counterValueEl = document.querySelector('#value');
const incremBtnEl = document.querySelector('button[data-action = "increment"]');
const decremBtnEl = document.querySelector('button[data-action = "decrement"]');

incremBtnEl.addEventListener('click', () => {
    counterValue.increment();
    counterValueEl.textContent = counterValue.value;

    console.log(counterValue.value);
});

decremBtnEl.addEventListener('click', () => {
    counterValue.decrement();
    counterValueEl.textContent = counterValue.value;

    console.log(counterValue.value);
});
