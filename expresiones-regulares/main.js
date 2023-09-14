import './style.css'

window.onload = function() {
  const temp = document.getElementById('inputform')
  temp.addEventListener('submit', getInputValue)
}

function getInputValue(e) {
  e.preventDefault()
  console.log("getInputValue")
  const testedString = document.getElementById('testedString').value

  const expresionRegular = /expresiones/;
  const parrafo = document.createElement('p');

  if (expresionRegular.test(testedString)){
    parrafo.textContent = 'Si hizo match!, Todo bien';
  }
  else{
    parrafo.textContent = 'No hizo match. Buuu';
  }
  let mainDiv = document.getElementById('main-div')
  mainDiv.appendChild(parrafo)
}
