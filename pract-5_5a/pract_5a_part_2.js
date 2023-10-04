const clickLeft = () => {
 const imageNodes = document.getElementsByClassName('slider-item');

 let prevIndex = null;

 for (let i = 0; i < imageNodes.length; i += 1) {
  if (imageNodes[i].classList.contains('selected')) {
   prevIndex = i - 1;
   if (prevIndex === -1) {
    //   0    1    2
    // [el1, el2, el3]
    // index for last element: length(3) - 1 => 2
    prevIndex = imageNodes.length - 1;
   }
  }
 }

 // const selectedNodes = document.getElementsByClassName('selected');
 // const selectedNode = selectedNodes[0];
 const [selectedNode] = document.getElementsByClassName('selected');
 /**
  * toggle
  * "class1 class2".toggle('class3') => "class1 class2 class3"
  * "class1 class2 class3".toggle('class3') => "class1 class2"
  */
 selectedNode.classList.toggle('selected');

 imageNodes[prevIndex].classList.toggle('selected');
};

document.getElementById('left').addEventListener('click', clickLeft);
/**
 * setTimeout(function, time) -- 
 *  setTimeout(() => console.log('this was timeout'), 2500) -- Через 2,5с оотримаємо лог this was timeout
 * 
 * setInterval(function, time) --
 *  setInterval(() => console.log('this was timeout'), 2500) -- кожні 2,5с пишемо в консоль 'this was timeout'
 */

setInterval(clickLeft, 2500);