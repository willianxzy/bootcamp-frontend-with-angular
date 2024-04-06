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

const myCharacter = new Character('Zodi', 199, 89);
console.log(myCharacter.attack());