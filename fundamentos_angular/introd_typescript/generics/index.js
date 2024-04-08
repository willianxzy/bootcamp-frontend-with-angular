// função p/ concatenar os arrays 
// devemos adicionar qual o tipo que queremos que nosso array trabalhe, apenas number ou apenas string, portanto devemos tipar isso.
function concatArray() {
    var _a;
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    return (_a = new Array()).concat.apply(_a, itens);
}
;
var numberArray = concatArray([1, 5], [3]);
var stringArray = concatArray('Willian', 'Ana', 'Fonseca');
// conseguimos adicionar uma string dentro do nosso array de numeros, porém fazendo isso quebramos uma regra de fidelidade em nosso código.
numberArray.push('Willian');
console.log(numberArray);
// e da mesma maneira conseguimos adicionar um número em nossa array de string, porém não é isso que queremos.
stringArray.push(10);
console.log(stringArray);
//portanto vamos agora refazer nosso código para ver como que fazemos essa tipagem com nosso arrays e cada um com suas caracteristicas(number e string).
function concatArrayDinamico() {
    var _a;
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    return (_a = new Array()).concat.apply(_a, itens);
}
;
var numberArrayDinamico = concatArrayDinamico([1, 5], [3]);
var stringArrayDinamico = concatArrayDinamico(['Willian', 'Ana'], ['Fonseca']);
console.log(numberArrayDinamico);
console.log(stringArrayDinamico);
