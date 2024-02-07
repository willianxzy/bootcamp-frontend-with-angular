/* 2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome,peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura)
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valor de seu IMC
    ------------> Vamos aprimorar esse desafio, iremos adicionar uma classificação do IMC, seguindo a tabela abaixo:
    IMC em adultos:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;*/


    class Pessoa {
        nome;
        peso;
        altura;

        constructor(nome,peso,altura) {
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;
        }

        calcularIMC () {
            return this.peso / (Math.pow(this.altura, 2))
        }

        classificarIMC(){
            const imc = this.calcularIMC();
            if (imc < 18.5) {
                return ('Você está abaixo do peso.');
            } else if (imc > 18.5 && imc < 25) {
                return ('Você está no peso normal.');
            } else if (imc > 25 && imc < 30) {
                return ('Você está acima do peso.');
            }else if (imc > 30 && imc < 40) {
                return ('Você está obeso.');
            } else {
                return ('Você está com obesidade grave.');
            }
        }
    };

    const jose = new Pessoa('José', 70, 1.75);
    console.log(jose.calcularIMC().toFixed(2));
    console.log(jose.classificarIMC());
    const willian = new Pessoa('Willian', 56, 1.73);
    console.log(willian.calcularIMC().toFixed(2));
    console.log(jose.classificarIMC());