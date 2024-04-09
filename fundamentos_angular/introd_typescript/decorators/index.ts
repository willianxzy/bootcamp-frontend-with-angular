// example1 decorators
function ExibirNome(target: any) {
    console.log(target);
};

@ExibirNome
class funcionario {};