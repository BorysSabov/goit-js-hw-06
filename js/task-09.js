function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color и 
// выводит значение цвета в span.color.

 const refs = {
  btnClick: document.querySelector('.change-color'),
  bgcolor: document.querySelector('.widget'),
  colorName: document.querySelector('.color'),
};
console.log(refs);
refs.btnClick.addEventListener('click', onClickChange);
function onClickChange () {
  refs.bgcolor.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = getRandomHexColor();
};
