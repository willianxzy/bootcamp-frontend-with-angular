/* EXERCÍCIO

2) O IMC - Índice de Massa Corporal é um critério da organização mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;*/

const pesoPessoa = 56;
const alturaPessoa = 1.73;

const imc = pesoPessoa / Math.pow(altura, 2);
    console.log('O seu IMC é de:', imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você está abaixo do peso.');
} else if (imc > 18.5 && imc < 25) {
    console.log('Você está no peso normal.');
} else if (imc > 25 && imc < 30) {
    console.log('Você está acima do peso.');
}else if (imc > 30 && imc < 40) {
    console.log('Você está obeso.');
} else {
    console.log('Você está com obesidade grave.');
}