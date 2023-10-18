
const loaderNode = document.getElementById('loader');

const LOADER_TEXT = 'loading';

loaderNode.innerHTML = LOADER_TEXT.split('')
 .map(letter => `<span>${letter}</span>`)
 .join('');

setTimeout(() => {
 loaderNode.style.display = 'none';
 menuNavClick();
}, 1500);


// A
// const navItemNodes = document.getElementsByClassName('nav-item');

// const menuItemNode = navItemNodes[0];
// const tablesItemNode = navItemNodes[1];

// A
const [menuItemNode, tablesItemNode] = document.getElementsByClassName('nav-item');

menuItemNode.addEventListener('click', menuNavClick);


const [a, b] = [1, 2, 3, 4, 5, 6];
// a => 1
// b => 2

const [c, ...other] = [1, 2, 3, 4, 5, 6];
// c => 1
// other => [2, 3, 4, 5, 6]