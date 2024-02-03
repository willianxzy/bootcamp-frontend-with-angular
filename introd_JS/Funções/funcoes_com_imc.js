
function calcularImc(pesoPessoa, _alturaPessoa) {
    return pesoPessoa / Math.pow(_alturaPessoa, 2);
}

function classificadorImc(imc) {
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

function main() {
    const pesoPessoa = 56;
    const alturaPessoa = 1.73;
    
    const imc = calcularImc(pesoPessoa, alturaPessoa);
    console.log(calcularImc(pesoPessoa, alturaPessoa));
    console.log(classificadorImc(imc));
}

main();