// example1 decorators
function ExibirNome(target: any) {
    console.log(target);
};

@ExibirNome
class funcionario {};

// example2 decorators
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version });
    };
};

@apiVersion
class Api {}

const api = new Api();
console.log(api);