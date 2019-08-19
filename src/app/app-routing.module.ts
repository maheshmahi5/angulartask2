import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { EditComponent } from './edit/edit.component';
import { RoleComponent } from './role/role.component';
import { MultiComponent } from './multi/multi.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AuthguardGuard } from './auth.guard';

const routes: Routes = [
  { path: "", redirectTo: 'page1', pathMatch: 'full' },
  {
    path: 'page1',
    component: Page1Component,

  },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [AuthguardGuard], data: ['hr']
  },
  {
    path: 'page3/:id',
    component: Page3Component,
    canActivate: [AuthguardGuard], data: ['hr', 'user', 'rm']
  },
  {
    path: 'page4/:id',
    component: Page4Component,
    canActivate: [AuthguardGuard], data: ['hr', 'user', 'rm']
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthguardGuard], data: ['hr']
  },
  {
    path: 'role',
    component: RoleComponent,
    canActivate: [AuthguardGuard], data: ['hr']
  },
  {
    path: 'multi/:data',
    component: MultiComponent,
    canActivate: [AuthguardGuard], data: ['hr']
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent,
    canActivate: [AuthguardGuard], data: ['hr', 'rm']
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
