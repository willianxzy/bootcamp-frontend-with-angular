// example1 decorators
function ExibirNome(target: any) {
    console.log(target);
};

@ExibirNome
class funcionario {};

// example2 decorators
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: 'Willian' });
    };
};

// attribute decorator
function minLenght(lenght: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < lenght) {
                throw new Error(`Tamanho menor do que ${lenght}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLenght(3)
    name = 'string';

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api('usuários');
console.log(api.name);
