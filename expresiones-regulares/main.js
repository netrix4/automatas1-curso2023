import './style.css'

window.onload = function() {
  const inputForm = document.getElementById('inputform')
  // inputForm.addEventListener('submit', getInputValue)
  inputForm.addEventListener('submit', checkRegularExpresion)

  const clearButton = document.getElementById('clearButton')
  clearButton.addEventListener('click', clearValues)
}

function checkRegularExpresion(e) {
  e.preventDefault()
  console.clear()
  const regexPattern = document.getElementById('regexPattern').value;
  console.log('Patron de la expresion regular: ', regexPattern);

  // const selectRegExFlag = document.getElementById('selectRegExFlag').value
  // console.log('Bandera selecionada: ', selectRegExFlag)

  let selectedFlags = '';

  selectedFlags += getCheckBoxValue('cbStandar')
  selectedFlags += getCheckBoxValue('cbGlobal')
  selectedFlags += getCheckBoxValue('cbCaseInsensitive')
  console.log('Banderas selecionada: ', selectedFlags)

  let testedString = document.getElementById('testedString').value
  
  const expresionRegular = new RegExp(regexPattern, selectedFlags);
  const results = document.getElementById('results');
  
  const concurrencias = testedString.match(expresionRegular);
  console.log(concurrencias);

  if (expresionRegular.test(testedString)){
    let contador = 0;
    const numeroCoincidencias = concurrencias.length;
    let resultedString = `Si hizo match!,\nNumero de concurrencias: ${numeroCoincidencias}\nConcurrencias: \n`;
    // results.textContent = `Si hizo match!,\nNumero de concurrencias: ${concurrencias.length} \n'Concurrencias: ${concurrencias.toString()}`;
    while (contador < numeroCoincidencias) {
      resultedString += concurrencias[contador] +  "\n";
      contador++;
    }
    results.textContent = resultedString;
  }
  else{
    results.textContent = 'No hizo match. Buuu';
  }
}

function getCheckBoxValue(name) {
  const checkbox = document.getElementById(name)
  return (checkbox.checked ? checkbox.value : '')
}

function clearValues() {
  document.getElementById('regexPattern').value = ""
  document.getElementById('testedString').value = ""
  document.getElementById('results').textContent = ""
  // document.getElementById('selectRegExFlag').value = "g"
  document.getElementById('cbStandar').checked = false
  document.getElementById('cbGlobal').checked = true
  document.getElementById('cbCaseInsensitive').checked = false
}