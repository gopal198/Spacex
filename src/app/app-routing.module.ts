import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexProgramsComponent } from './spacex-programs/spacex-programs.component';

const routes: Routes = [
  {
    "path" : "spacex",
    component : SpacexProgramsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
