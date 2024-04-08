class Character {
    name: string;
    stregth: number;
    skill: number;


    constructor (name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    };


    attack(): void {
        console.log(`${this.name} attack with ${this.stregth} points`);
    };
};

// Sub-Classe da nossa classe Character
class Magician extends Character{
    magicPoints: number;

    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    };
};

const myCharacter = new Character('Zodi', 199, 89);
const magicCharacter = new Magician('Bruxo', 234, 78, 97); 
console.log(myCharacter.attack());
console.log(magicCharacter);