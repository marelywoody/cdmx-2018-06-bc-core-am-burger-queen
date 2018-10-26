import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SelectmenuComponent } from './components/selectmenu/selectmenu.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { DinnerComponent } from './components/dinner/dinner.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'menu', component: SelectmenuComponent},
  {path:'reset', component: ResetPasswordComponent},
  {path: 'breakfast', component: BreakfastComponent},
  {path: 'dinner', component: DinnerComponent},
  {path: 'order', component: OrderComponent}
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
