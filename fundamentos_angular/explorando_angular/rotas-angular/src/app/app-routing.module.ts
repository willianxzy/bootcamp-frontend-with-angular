import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path: '', component:TitleComponent, pathMatch:'full'},

  //rota pai = 'portfolio' - http://localhost:4200/portfolio
  //rota filha = ':id' - http://localhost:4200/portfolio/1
  //rota filha = ':id/:token' - http://localhost:4200/portfolio/1/8997
  {path: 'portfolio', component: CardComponent, children: [
    {path: ':id', component: CardComponent},
    {path: ':id/:token', component: CardComponent}
  ]},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
