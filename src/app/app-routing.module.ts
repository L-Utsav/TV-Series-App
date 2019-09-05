import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DetailsComponent } from './details/details.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [

  { path: "", component: TestComponent },
  { path: "favorites" , component: FavoritesComponent },
  { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponent, DetailsComponent]
