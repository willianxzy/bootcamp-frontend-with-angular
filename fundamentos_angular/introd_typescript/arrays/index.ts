// Temos 2 maneiras pela qual podemos declarar os arrays
// 1ª Maneira
let dados: string[] = ['Willian','Julio','Pedro'];

// 2ª Maneira
let dados2: Array<string> = ['Willian','Julio','Pedro'];

// Trabalhando com arrays de multi types
// conseguimos criar arrays que eles possuem multi typos  dentro do array

let dados3: (string | number)[] = ['Willian', 19, 'Julio', 18, 'Pedro', 18];

// Em TypeScript e JavaScript o | é lido como “ou”, sendo assim declaramos (string ou number). Portanto dessa maneira será aceito tanto string como number.

// Trabalhanco com Tuplas
// Semelhante ao array de multi types, porém seguindo a sequência em que declaramos. 

let boleto: [string, number, number] = ['conta-agua', 179.67, 85374953]

// portanto se deve seguir a seguência das declarações de acordo com nossa variável. Caso seja declarado de maneira diferente da qual declaramos em nossa variável irá dar erro.

// Reaproveitando conhcimento do js
// Métodos para trabalhar com Arrays

// array.map  - Muito utilizado para mapear um array.
// array.reduce - Executa a função de CallBack uma vez para cada elemento presente no Array, excluindo valores indefinidos.
// array.pop - Remove o último elemento do array.
// array.pop - Filtrar alguma coisa específica em seu array.