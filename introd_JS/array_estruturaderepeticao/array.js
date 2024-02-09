const alunos = ['pedro','jose','julia']

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//ADICIONANDO E REMOVENDO ITENS DO NOSSO ARRAY

alunos.push('willian'); //desta maneira conseguimos adicionar mais um item a nossa lista utilizando o nomedavariavel.push;
alunos[4]= 'Matheus'; // em contra partida conseguimos adicionar um item a nossa lista, e já inserirmos na posição que desejamos.
alunos.push('teste');
alunos.push(10);
//conseguimos ter diferentes tipos de itens em nossa lista, desde strings até números.
console.log(alunos.pop()); //Desta maneira estamos pedindo para ele remover o último item de nossa lista, porém imprimi-lo para podermos utilizá-lo.
alunos.shift(); //Fazemos a mesma função anterior, porém com o primeiro item da nossa lista, mas dessa vez sem imprimir o mesmo.



console.log(alunos);
console.log(alunos[3]); //solicitamos que imprima o item 0 da nossa lista na variável alunos.
//item não existente na nossa lista, terminal imprime como undefined.
