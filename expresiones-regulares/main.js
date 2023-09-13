import './style.css';

const cadena = '394858';
let expresionRegular = /[01]+/;
const parrafo = document.createElement('p');

if (expresionRegular.test(cadena)) {
  parrafo.textContent = 'Si hizo match ✅';
} else {
  parrafo.textContent = 'No hizo match 🚩';
}
document.body.appendChild(parrafo);
