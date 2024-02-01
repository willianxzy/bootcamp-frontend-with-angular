const numero = 20;
const divisivelPor10= (numero % 10) === 0;

if (numero === 0) {
    console.log('Número inválido');
} else if (divisivelPor10) {
    console.log('Sim');
} else {
    console.log('Não');
}