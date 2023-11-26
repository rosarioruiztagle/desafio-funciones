/*PINTAR.HTML*/
const ele1 = document.getElementById('ele1');

const pintar = (color = 'green') => {
    ele1.style.background = color
};

pintar('green');


ele1.addEventListener('click', () => {
    ele1.style.background = 'yellow'
});
  
/*4_COLORES.HTML*/
