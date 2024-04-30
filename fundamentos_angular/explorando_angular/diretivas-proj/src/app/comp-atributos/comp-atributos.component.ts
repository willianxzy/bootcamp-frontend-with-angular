import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string = "enable";
  corFundo:string = "red";
  corLetra:string = "yellow";
  item:string = "";
  lista:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  adicionarItem() {
    this.lista.push(this.item);
  }

  trocar(){
    if (this.estilo === "enable") {
      this.estilo = "disable";
    } else {
      this.estilo = "enable"
    }
  }
}
