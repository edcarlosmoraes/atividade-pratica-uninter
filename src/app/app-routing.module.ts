import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'curriculo' , component: CurriculoComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'contato' , component: ContatoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
