// função p/ concatenar os arrays 

// devemos adicionar qual o tipo que queremos que nosso array trabalhe, apenas number ou apenas string, portanto devemos tipar isso.
function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
};

const numberArray = concatArray([1,5], [3]);
const stringArray = concatArray('Willian', 'Ana', 'Fonseca');

// conseguimos adicionar uma string dentro do nosso array de numeros, porém fazendo isso quebramos uma regra de fidelidade em nosso código.
numberArray.push('Willian')
console.log(numberArray);
// e da mesma maneira conseguimos adicionar um número em nossa array de string, porém não é isso que queremos.
stringArray.push(10)
console.log(stringArray);

//portanto vamos agora refazer nosso código para ver como que fazemos essa tipagem com nosso arrays e cada um com suas caracteristicas(number e string).