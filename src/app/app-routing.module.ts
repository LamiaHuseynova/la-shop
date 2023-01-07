import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FagComponent } from './fag/fag.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "fag", component: FagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

