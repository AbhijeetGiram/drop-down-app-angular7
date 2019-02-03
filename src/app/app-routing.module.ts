import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropDownComponent } from './drop-down/drop-down.component';

const routes: Routes = [
  {
    path: 'home',
    component: DropDownComponent,
    data: { title: "DropDown"}
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',
    data: { title: "DropDown"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
