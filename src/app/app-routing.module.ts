import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SelectmenuComponent } from './components/selectmenu/selectmenu.component';

const routes: Routes = [
  {path:'navbar', component: NavbarComponent},
  {path:'', component: LoginComponent},
  {path:'menu', component: SelectmenuComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
