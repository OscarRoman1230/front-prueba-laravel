import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListComponent } from "./components/image-list/image-list.component";
import { SearchListComponent } from "./components/search-list/search-list.component";

const routes: Routes = [
  {
    path: '',
    component: ImageListComponent
  },
  {
    path: 'search/:search',
    component: SearchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
