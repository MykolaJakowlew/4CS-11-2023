const containerNode = document.getElementById('container');

const menuNavClick = () => {

 containerNode.innerHTML = '';

 // B
 // const item = menuItems[0];
 // const itemNode = `
 // <div class="menu-item">
 //    <div class="menu-wrapper">
 //     <img src="${item.src}" alt="">
 //     <div class="menu-item_title">${item.title}</div>
 //     <div class="menu-item_price">${item.price}</div>
 //    </div>
 //    <div class="menu-parts">
 //     <li>${item.parts[0]}</li>
 //    </div>
 //   </div>`;
 // containerNode.innerHTML = itemNode;

 // B
 const itemNodes = menuItems.map(item => {
  const menuItemNode = document.createElement('div');
  // menuItemNode.innerText = item.title;
  menuItemNode.className = 'menu-item';

  const crossNode = document.createElement('img');
  crossNode.src = './images/cancel.png';
  /**
   * width: 8%;
   * position: absolute;
   * left: 91%;
   * top: 1%;
   */
  // crossNode.style.width = '8%';
  // crossNode.style.position = 'absolute';
  // crossNode.style = 'left: 91%;top: 1%;';
  crossNode.style.width = '8%';
  crossNode.style.position = 'absolute';
  crossNode.style.left = '91%';
  crossNode.style.top = '1%';
  crossNode.addEventListener('click', () => {
   menuItemNode.remove();
  });

  menuItemNode.appendChild(crossNode);

  const menuWrapperNode = document.createElement('div');
  menuWrapperNode.className = 'menu-wrapper';

  const imgNode = document.createElement('img');
  imgNode.src = item.src;

  const titleNode = document.createElement('div');
  titleNode.innerText = item.title;
  titleNode.className = 'menu-item_title';

  const priceNode = document.createElement('div');
  priceNode.innerText = item.price;
  priceNode.className = 'menu-item_price';

  menuWrapperNode.append(
   imgNode,
   titleNode,
   priceNode
  );

  const menuPartsNode = document.createElement('div');
  menuPartsNode.className = 'menu-parts';
  menuPartsNode.innerHTML = item.parts.map((part) => {
   return `<li>${part}</li>`;
  }).join('');

  menuItemNode.append(
   menuWrapperNode,
   menuPartsNode
  );

  return menuItemNode;
 });

 /**
  * append(arg, arg, arg, arg ...)
  */
 // C
 // containerNode.append(itemNodes[0],itemNodes[1], ...)

 // C
 // for (const node of itemNodes) {
 //  containerNode.appendChild(node);
 // }

 // C
 containerNode.append(...itemNodes);
};