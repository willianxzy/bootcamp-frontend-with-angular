import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  produtos:string[] = []

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'mousepad',
      'fone',
      'monitor',
    ]
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('component destruído')
  }

  adicionarItem() {
    this.produtos.push('Willian')
  };

  removerItem(){
    this.produtos.pop();
  }

removerManualmente(index: number) {
  alert(index)
}
}
