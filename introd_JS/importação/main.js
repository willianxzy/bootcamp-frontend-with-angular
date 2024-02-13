const funcoes = require('./funcoes-auxiliares');
//portanto agr vamos imprimir no terminal para verificar se nossa função foi importada com sucesso.
console.log(funcoes);

//---------------------------------------------------------------------------------------------------------
// Object Destructuring
// 
// Podemos realizar a importaçõa utilizando o object destructuring também, do seguinte modo:
const { gets, print} = require('./funcoes-auxiliares');
print(gets());