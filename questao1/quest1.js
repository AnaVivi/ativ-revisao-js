
document.getElementById('result-calculator').addEventListener('click', function(){
    let capturednumber = document.getElementById('number')
    let number = capturednumber.value;
    let NumberEnter = document.getElementById('showResult');
    let number2 = parseInt(number);    
    let newElement = document.createElement('p');
    newElement.textContent = 'Soma: '+ (number2 + number2) + "\n" +
    'Substração: ' + (number2 - number2) + "\n" +
    'Multiplicação: ' + (number2 * number2) + "\n" +
    'Divisão: ' + (number2 / number2);
    NumberEnter.appendChild(newElement);
});