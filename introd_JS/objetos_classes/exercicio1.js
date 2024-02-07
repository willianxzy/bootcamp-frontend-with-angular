/* 1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar esse percurso.*/

class Carro {
    marca;
    cor;
    mediaCarro;

    constructor (marca,cor,mediaCarro) {
        this.marca = marca;
        this.cor = cor;
        this.mediaCarro = mediaCarro;
    }

    calcularGastoPercurso(distanciaemKm, precoCombustivel) {
        return (distanciaemKm / this.mediaCarro) * precoCombustivel ;
    }
};

const camaro = new Carro ('chevrolet', 'amarelo', 7);
console.log(camaro.calcularGastoPercurso(250, 5.50).toFixed(2));
const palio = new Carro ('fiat','branco', 13);
console.log(palio.calcularGastoPercurso(250, 5.50).toFixed(2));

