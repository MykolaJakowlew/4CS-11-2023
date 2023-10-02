// document.body.innerText += "Hello world";


const button = document.getElementById("btn-1");

const input = document.getElementById("input");

const containers = document.getElementsByClassName("container");

document.getElementById("btn-2").addEventListener('click', () => {
 const value = document.getElementById("color-count").value;
 const container = document.getElementById('colors');
 container.innerHTML = '';
 for (let i = 0; i < value; i += 1) {
  container.innerHTML += `<input class="color" type="color" />`;
 }
});

button.addEventListener('click', () => {
 const value = input.value;
 containers[0].innerHTML = '';

 const colors = document.getElementsByClassName('color');
 const set = [];
 for (const color of colors) {
  set.push(color.value);
 }

 for (let i = 0; i < value; i += 1) {
  const delay = i * 0.2;

  const max = 255;
  const min = 0;
  const redValue = Math.floor(Math.random() * (max - min + 1) + min);
  const greenValue = Math.floor(Math.random() * (max - min + 1) + min);
  const blueValue = Math.floor(Math.random() * (max - min + 1) + min);
  // Math.floor(1.7) => 1
  // Math.ceil(1.25) => 2

  const color = set[Math.floor(Math.random() * set.length)];
  containers[0].innerHTML += `
   <div 
    class="item"
    style="
     --anim-delay:${delay}s;
     // --bg-color:rgb(${redValue},${greenValue},${blueValue});
     --bg-color:${color}
    "
   >${i + 1}</div>`;
  // containers[0].innerHTML += '<div class="item">' + i + "</div>";
 }

 const items = document.getElementsByClassName('item');

 for (const item of items) {
  item.addEventListener('click', () => {
   // item.remove();
   item.classList.toggle('empty');
   // item.className += ' empty';
  });
 }
});


