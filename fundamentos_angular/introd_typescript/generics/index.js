// função p/ concatenar os arrays 
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
stringArray.push(10);
console.log(stringArray);
