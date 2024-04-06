// Temos 2 maneiras pela qual podemos declarar os arrays
// 1ª Maneira
let dados: string[] = ['Willian','Julio','Pedro'];

// 2ª Maneira
let dados2: Array<string> = ['Willian','Julio','Pedro'];

// Trabalhando com arrays de multi types
// conseguimos criar arrays que eles possuem multi typos  dentro do array

let dados3: (string | number)[] = ['Willian', 19, 'Julio', 18, 'Pedro', 18];

// Em TypeScript e JavaScript o | é lido como “ou”, sendo assim declaramos (string ou number). Portanto dessa maneira será aceito tanto string como number.