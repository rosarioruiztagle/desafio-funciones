const div1 = document.getElementById('div1');  
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');

const colorear = (e) => (e.target.style.backgroundColor = 'black');

div1.addEventListener('click', colorear);
div2.addEventListener('click', colorear);
div3.addEventListener('click', colorear);
div4.addEventListener('click', colorear);

document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        div5.style.backgroundColor = 'pink'
    } else if (e.key === 's') {
        div5.style.backgroundColor = 'orange'
    } else if (e.key === 'd') {
        div5.style.backgroundColor = 'aqua'
    } else if (e.key === 'q') {
        crear('purple');
    } else if (e.key === 'w') {
        crear('gray');   
    } else if (e.key === 'e') {
        crear('brown');
    }
});

function crear(color) {
    const div6 = document.createElement('div');
    div6.style.width = '200px';
    div6.style.height = '200px';
    div6.style.border = '2px solid black';  
    div6.style.backgroundColor = color;
    document.body.appendChild(div6);
}
