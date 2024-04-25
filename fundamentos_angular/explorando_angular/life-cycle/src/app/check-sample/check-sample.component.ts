import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit {

  quantidade:number = 0

  constructor() { }

  adicionar(){
    this.quantidade += 1
  }

  remover(){
    this.quantidade -= 1
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
