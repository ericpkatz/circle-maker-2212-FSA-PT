const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const addButton = document.querySelector('#addButton');
const container = document.querySelector('#container');

addButton.addEventListener('click', () => {
  const circle = document.createElement('div');
  const colorClass = colorPicker.value;
  const sizeClass = sizePicker.value;
  circle.classList.add(colorClass);
  circle.classList.add(sizeClass);
  container.append(circle);
});

container.addEventListener('click', (ev)=> {
  if(ev.target.id !== 'container'){
    ev.target.parentNode.removeChild(ev.target);
  }
});

