function validacaoMedia(nota1, nota2) {
    var media = (nota1 + nota2);

    var notaMinima = 6;
    var notaMaxima = 10;
  
    if (media > notaMinima) {
        return "Aprovado";
    } else if (media === notaMinima) {
        return "Precisa fazer a avaliação";
    } else {
        return "Reprovado";
    }
}
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var status = validacaoMedia(nota1, nota2);
console.log("Resultado da média: " + status);
