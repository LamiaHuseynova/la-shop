import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './clothes/clothes.component';
import { FagComponent } from './fag/fag.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "fag", component: FagComponent},
  {path: "clothes", component: ClothesComponent},
  {path: "sign-up", component: MyFormComponent},
  {path: "login", component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

